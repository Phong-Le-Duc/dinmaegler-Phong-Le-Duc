import { Form, useLocation, useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { Link } from "react-router";
import { z } from "zod/v4"; // Importer zod for at kunne bruge z.treeifyError
import { loginSchema } from "../../utility/schemas";


export default function FormLogin() {
    type FormErrors = {
        [key: string]: { errors: string[] }
    };

    const [errors, setErrors] = useState<FormErrors>({});
    const { login } = useAuth() as { login: (token: string) => void };
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/favorite-homes";



    async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        const result = loginSchema.safeParse(data);

        console.log(result);


        if (!result.success) {
            const errors = z.treeifyError(result.error);
            console.log(errors);
            setErrors(errors.properties || {});
        } else {
            setErrors({});



            const response = await fetch("https://dinmaegler.onrender.com/auth/local", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const userdata = await response.json();

            if (!response.ok) {
                setErrors(userdata.message || userdata.error || "Please provide login credentials");
            } else {
                login(userdata.jwt);
                navigate(from, { replace: true });
            }
        }
    }



    return (
        <>
            <div className="border border-gray-300 p-10 rounded-[3px] shadow-md max-w-md mx-auto my-15">
                <div>
                    <Form onSubmit={handleLogin} className="login-form flex flex-col gap-4">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="identifier"
                            // required
                            placeholder="email"
                            className="border border-gray-300 p-1 rounded-[3px]"
                        />
                        <p>{errors && errors?.email?.errors[0]}</p>

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            // required
                            placeholder="password"
                            className="border border-gray-300 p-1 rounded-[3px]"
                        />
                        <p>{errors && errors?.password?.errors[0]}</p>

                        <button
                            type="submit"
                            className="border border-gray-300 p-1 rounded-[3px] bg-dinmaegler-blue text-white transition hover:bg-blue-700 hover:shadow cursor-pointer"
                        >
                            Login
                        </button>
                    </Form>

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