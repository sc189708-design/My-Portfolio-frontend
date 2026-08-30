import { useState, type ChangeEvent } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState<string>('');
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //Backend  wiring   (Express + mongoDb ) phase 4 
        setStatus('Backen not connected yet - this is UI placeholder.');
        console.log(formData);
    };
    return (
        <section id="contact" className="max-w-2xl mx-auto px-6 py-24">
            <h2 className=" text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Contact Me.
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input type="text"
                    name="name"
                    placeholder="your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
                <input type="email"
                    name="email"
                    placeholder="your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
                <textarea
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Send Message
                </button>
                {status && <p className="text-sm text-gray-500">{status}</p>}
            </form>
        </section>
    );
};

export default Contact;