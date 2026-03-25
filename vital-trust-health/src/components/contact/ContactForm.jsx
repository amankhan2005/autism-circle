import { useState } from "react";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://vital-trust-health-llc.onrender.com";

 const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");

  const [modal, setModal] = useState({
    show: false,
    type: "", // success | error
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // 🚫 prevent multiple clicks

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    setLoading(true); // 🔥 start loading

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setModal({
          show: true,
          type: "success",
          message: data.message || "Message sent successfully!",
        });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setModal({
          show: true,
          type: "error",
          message: data.message || "Something went wrong.",
        });
      }
    } catch (err) {
      setModal({
        show: true,
        type: "error",
        message: "Server error. Please try again.",
      });
    } finally {
      setLoading(false); // 🔥 stop loading
    }
  };

  return (
    <>
      {/* FORM CONTAINER */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10 relative overflow-hidden"
      >
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-teal-50 rounded-full -mr-20 -mt-20 opacity-50"></div>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            Send Us a Message
          </h3>
          <p className="text-slate-500 text-sm mb-8">
            Fill out the form below and we'll get back to you shortly.
          </p>

          {/* Error Alert */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm mb-6 flex items-center gap-2">
              <IconWarning />
              {error}
            </div>
          )}

          <div className="space-y-6">
            {/* Name & Email Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name <span className="text-[#F97316]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#3EB8A7] focus:border-transparent outline-none transition text-slate-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address <span className="text-[#F97316]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#3EB8A7] focus:border-transparent outline-none transition text-slate-700"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                placeholder="(123) 456-7890"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#3EB8A7] focus:border-transparent outline-none transition text-slate-700"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Message <span className="text-[#F97316]">*</span>
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="How can we help you?"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#3EB8A7] focus:border-transparent outline-none transition resize-none text-slate-700"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2
    ${loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#F97316] hover:bg-[#EA580C] hover:scale-[1.02] shadow-orange-200"
                }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>

      {/* MODAL */}
      {modal.show && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div
            className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl transform transition-all duration-300 scale-100"
            data-aos="zoom-in"
          >
            {/* Icon Circle */}
            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 ${modal.type === "success" ? "bg-green-100" : "bg-red-100"}`}>
              {modal.type === "success" ? (
                <IconCheck className="text-green-500 w-8 h-8" />
              ) : (
                <IconX className="text-red-500 w-8 h-8" />
              )}
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              {modal.type === "success" ? "Thank You!" : "Oops!"}
            </h3>

            <p className="text-slate-500 mb-8 leading-relaxed">
              {modal.message}
            </p>

            <button
              onClick={() => setModal({ show: false })}
              className="bg-slate-800 text-white px-8 py-3 rounded-xl font-semibold hover:bg-slate-700 transition w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// --- Icon Components ---

const IconSend = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
  </svg>
);

const IconWarning = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const IconCheck = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const IconX = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default ContactForm;