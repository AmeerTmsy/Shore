import { SendHorizontal } from "lucide-react";

export default function Contact() {

    function handleSubmit (e) {
        e.preventDefault();
        console.log('form submition')
    }
    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6 border-b border-gray-200 pb-2">
                Contact Us
            </h1>

            <p className="text-gray-600 mb-6">
                Have questions or need assistance? We're here to help. Reach out to us
                through any of the methods below.
            </p>

            {/* Contact Info */}
            <div className="space-y-1 mb-8 font-light">
                <p className="text-gray-700">
                    <strong>Email:</strong> support@example.com
                </p>
                <p className="text-gray-700">
                    <strong>Phone:</strong> +91 98765 43210
                </p>
                <p className="text-gray-700">
                    <strong>Address:</strong> Pathanamthitta, Kerala, India
                </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4 p-4 shadow-inner rounded-lg bg-blue-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border bg-white border-gray-200 rounded-lg p-3 focus:outline-none focus:ring focus:ring-indigo-300 transition duration-300"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full border bg-white border-gray-200 rounded-lg p-3 focus:outline-none focus:ring focus:ring-indigo-300 transition duration-300"
                    />
                </div>
                <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full border bg-white border-gray-200 rounded-lg p-3 focus:outline-none focus:ring focus:ring-indigo-300 transition duration-300"
                ></textarea>
                <div className="grid grid-cols-4 gap-3">
                    <input
                        type="text"
                        placeholder="Where did you know about us"
                        className="col-span-3 w-full border bg-white border-gray-200 rounded-lg p-3 focus:outline-none focus:ring focus:ring-indigo-300 transition duration-300"
                    />
                    <button 
                    type="submit"
                    className="col-span-1 bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-100 group transition duration-500 flex justify-center items-center"
                >
                    <SendHorizontal className="group-hover:text-black transition-all duration-500" />
                </button>
                </div>
            </form>
        </div>
    );
}