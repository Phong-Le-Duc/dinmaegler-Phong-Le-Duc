import { Form, useLocation, useNavigate } from "react-router";
import { z } from "zod/v4"; // Importer zod for at kunne bruge z.treeifyError
import { registerSchema } from "../../utility/schemas";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function FormRegister() {
    type FormErrors = {
        [key: string]: { errors: string[] }
    };

    const [errors, setErrors] = useState<FormErrors>({});

    const { login } = useAuth() as { login: (token: string) => void };
    const navigate = useNavigate();

    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/favorite-homes";



    async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);
        const result = registerSchema.safeParse(data);

        console.log(result);

        if (!result.success) {
            const errors = z.treeifyError(result.error);
            setErrors(errors.properties || {});
        } else {
            setErrors({});
            // Handle successful registration

            const { confirmPassword, ...userWithoutConfirm } = result.data;

            const response = await fetch("https://dinmaegler.onrender.com/auth/local/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userWithoutConfirm)
            });
            const userdata = await response.json();

            if (!response.ok) {
                setErrors(userdata.message || userdata.error || "Please fill out all fields");
            } else {
                login(userdata.jwt);
                navigate("/", { replace: true });
            }
        }
    }



    return (
        <>
            <div className="border border-gray-300 p-10 rounded-[3px] shadow-md max-w-md mx-auto my-15">
                <div>
                    <Form onSubmit={handleRegister} className="login-form flex flex-col gap-4">
                        <label htmlFor="fullname">Fulde navn:</label>
                        <input
                            type="text"
                            id="fullname"
                            name="username"
                            // required
                            placeholder="Fulde navn"
                            className="border border-gray-300 p-1 rounded-[3px]"
                        />
                        <p>{errors && errors?.username?.errors[0]}</p>

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            // required
                            placeholder="email"
                            className="border border-gray-300 p-1 rounded-[3px]"
                        />
                        <p>{errors && errors?.email?.errors[0]}</p>

                        <label htmlFor="password">Adgangskode:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            // required
                            placeholder="Adgangskode"
                            className="border border-gray-300 p-1 rounded-[3px]"
                        />
                        <p>{errors && errors?.password?.errors[0]}</p>

                        <label htmlFor="confirmPassword">Bekræft adgangskode:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            // required
                            placeholder="Bekræft adgangskode"
                            className="border border-gray-300 p-1 rounded-[3px]"
                        />
                        <p>{errors && errors?.custom?.errors[0]}</p>

                        <button type="submit" className="border border-gray-300 p-1 rounded-[3px] bg-dinmaegler-blue text-white">
                            Opret bruger
                        </button>
                    </Form>

                </div>
            </div>
        </>
    )
}