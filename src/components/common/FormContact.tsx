import { Form, useNavigate } from "react-router"
import { useState } from "react";
import { contactSchema } from "../../utility/schemas";
import { z } from "zod/v4"; // Importer zod for at kunne bruge z.treeifyError



export default function FormContact({ }) {
    type FormErrors = {
        [key: string]: { errors: string[] }
    };

    const [errors, setErrors] = useState<FormErrors>({});
    const navigate = useNavigate();


    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        //    FormData er ikke et objekt, derfor laver vi det om til et objekt 
        const data = Object.fromEntries(formData.entries());
        console.log("Form submitted:", data);

        const result = contactSchema.safeParse(data);

        // console.log(result);


        if (!result.success) {
            const errors = z.treeifyError(result.error);
            console.log(errors);
            setErrors(errors.properties || {});
        } else {
            setErrors({});

            fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(result.data)
                //  body: JSON.stringify(agent.email)  ?? how to send to agents mail? carsten siger det er backend's job ????

            }).then(response => {
                console.log("data was sent!!");
                if (response.ok)
                    navigate("/");
            })
                .catch(error => {
                    console.error("Error submitting form:", error);
                });
        }
    }


    return (
        <>
            <section className="my-8">
                <p>Kontakt os</p>
                <Form method="post" onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-md p-6 bg-white rounded border-1 border-gray-300 shadow">

                    <div className="flex gap-4">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="name" className="mb-1 text-sm text-gray-700">Navn</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                            // required
                            />
                            <p className="text-red-600 text-sm min-h-[1.5em]">{errors && errors?.name?.errors[0]}</p>
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="email" className="mb-1 text-sm text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="border border-gray-300 rounded py-2 focus:outline-none focus:border-blue-400"
                            // required
                            />
                            <p className="text-red-600 text-sm min-h-[1.5em]">{errors && errors?.email?.errors[0]}</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="subject" className="mb-1 text-sm text-gray-700">Emne</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                        // required
                        />
                        <p className="text-red-600 text-sm min-h-[1.5em]">{errors && errors?.subject?.errors[0]}</p>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-1 text-sm text-gray-700">Besked</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400 resize-none"
                        // required
                        ></textarea>
                        <p className="text-red-600 text-sm min-h-[1.5em]">{errors && errors?.message?.errors[0]}</p>
                    </div>
                    <button type="submit" className="bg-blue-300 p-2">Send besked</button>
                </Form>
            </section>
        </>
    )
};