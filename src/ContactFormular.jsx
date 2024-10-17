import { useState } from "react";

export default function ContactFormular() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setName("");
        setEmail("");
        setMessage("");

        alert("Formulář vyplněn.")

        const output = {
            name: name,
            email: email,
            message: message
        };
        console.log(output);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div className="jmenoEmail">
                    <label htmlFor="name">Jméno a příjmení:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="email">E-mailová adresa:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <label htmlFor="message">Zpráva:</label>
                <textarea
                    name="message"
                    id="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button className="button">Odeslat</button>
            </form>
        </div>
    )
}