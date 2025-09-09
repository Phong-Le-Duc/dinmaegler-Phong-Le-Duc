import { Form, useLocation, useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { Link } from "react-router";

export default function Login() {
    const [error, setError] = useState();
    const { login } = useAuth() as { login: (token: string) => void };
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/favorite-homes";

    async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        const response = await fetch("https://dinmaegler.onrender.com/auth/local", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const userdata = await response.json();

        if (!response.ok) {
            setError(userdata.message || userdata.error || "Please provide login credentials");
        } else {
            login(userdata.jwt);
            navigate(from, { replace: true });
        }
    }

    return (
        <>
            <div className="border border-gray-300 p-10 rounded-[3px] shadow-md max-w-md mx-auto my-15">
                <div>
                    <form onSubmit={handleLogin} className="login-form flex flex-col gap-4">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="identifier"
                            required
                            placeholder="email"
                            className="border border-gray-300 p-1 rounded-[3px]"
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            placeholder="password"
                            className="border border-gray-300 p-1 rounded-[3px]"
                        />

                        <button
                            type="submit"
                            className="border border-gray-300 p-1 rounded-[3px] bg-dinmaegler-blue text-white transition hover:bg-blue-700 hover:shadow cursor-pointer"
                        >
                            Login
                        </button>
                    </form>

                    <div className="">
                        <p className="mt-5 mb-1">Login med</p>
                        <div className="grid grid-cols-3 gap-2">
                            <button className="bg-red-500 text-white py-2 rounded-[3px] transition hover:bg-red-600 hover:shadow cursor-pointer">Google</button>
                            <button className="bg-blue-600 text-white py-2 rounded-[3px] transition hover:bg-blue-700 hover:shadow cursor-pointer">Facebook</button>
                            <button className="bg-blue-400 text-white py-2 rounded-[3px] transition hover:bg-blue-500 hover:shadow cursor-pointer">Twitter</button>
                        </div>
                    </div>
                    <div className="">
                        <p className="mt-5 mb-1">
                            Har du ikke en konto? <span className="text-blue-500"><Link to="/register">Opret bruger.</Link></span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}