import { useState } from "react";


const ContactForm = () => {
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectTitle: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
 <div className="relative">
            <div className="bg-gradient-to-br from-s8ul-dark-lighter/80 to-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-s8ul-gray/20 shadow-2xl">
              {/* Form Header */}
              <div className="mb-8 text-center">
                <h3 className="text-3xl font-black text-white mb-2">
                  Reach us{" "}
                  <span className="bg-gradient-to-r from-s8ul-green to-green-400 bg-clip-text text-transparent">
                    now!
                  </span>
                </h3>
                <p className="text-gray-300 text-lg">
                  Drop your details, and we'll get back to you
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-s8ul-green to-transparent mx-auto mt-4" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative group">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-s8ul-gray/20 border-2 border-s8ul-gray/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-s8ul-green focus:bg-s8ul-gray/10 transition-all duration-300 group-hover:border-s8ul-green/50"
                      required
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-s8ul-gray/20 border-2 border-s8ul-gray/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-s8ul-green focus:bg-s8ul-gray/10 transition-all duration-300 group-hover:border-s8ul-green/50"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-s8ul-gray/20 border-2 border-s8ul-gray/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-s8ul-green focus:bg-s8ul-gray/10 transition-all duration-300 group-hover:border-s8ul-green/50"
                    required
                  />
                </div>

                {/* Project Title */}
                <div className="relative group">
                  <input
                    type="text"
                    name="projectTitle"
                    placeholder="Project Title"
                    value={formData.projectTitle}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-s8ul-gray/20 border-2 border-s8ul-gray/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-s8ul-green focus:bg-s8ul-gray/10 transition-all duration-300 group-hover:border-s8ul-green/50"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <textarea
                    name="message"
                    placeholder="Leave us a message..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-6 py-4 bg-s8ul-gray/20 border-2 border-s8ul-gray/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-s8ul-green focus:bg-s8ul-gray/10 transition-all duration-300 resize-none group-hover:border-s8ul-green/50"
                    required
                  />
                </div>

                {/* Enhanced Submit Button */}
                <button
                  type="submit"
                  className="group relative w-full bg-gradient-to-r from-s8ul-green to-green-500 text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-s8ul-green/25 overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-s8ul-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            </div>

            {/* Form Background Decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-s8ul-green/10 to-transparent rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tl from-s8ul-green/5 to-transparent rounded-full blur-2xl" />
          </div>
  )
}

export default ContactForm
