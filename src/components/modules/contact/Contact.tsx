"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("✅ Thank you for reaching out! I’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (

      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Contact Me
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Have a question or want to collaborate? Feel free to reach out! 🚀
        </p>

        {/* Contact Info */}
        <div className="text-center mb-8">
          <p className="text-gray-700 mb-2">
            📩 Email:{" "}
            <a
              href="mailto:habiburmamun313@gmail.com"
              className="text-indigo-600 font-medium hover:underline"
            >
              habiburmamun313@gmail.com
            </a>
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/habibur5313"
              target="_blank"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/habibur-rahman13"
              target="_blank"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/habibur5231"
              target="_blank"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
  );
}
