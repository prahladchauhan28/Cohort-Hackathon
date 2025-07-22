import React from 'react'

const ContactHead = () => {

    const contactReasons = [
    {
      title: "Brands",
      description:
        "Looking to tap into gaming? Let's craft impactful campaigns together.",
    },
    {
      title: "Esports Orgs",
      description:
        "Collaborations, tournaments, invites - let's build the future of esports.",
    },
    {
      title: "Creators & Players",
      description:
        "Want to work with us? Let's create, compete, and grow together.",
    },
  ];
  return (
    <div>
       {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                Looking forward to{" "}
                <span className="bg-gradient-to-r from-s8ul-green to-green-400 bg-clip-text text-transparent">
                  connecting
                </span>
              </h2>
              <p className="text-xl text-gray-300 font-medium">
                Who should get in touch
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-s8ul-green to-transparent" />
            </div>

            {/* Contact Reasons */}
            <div className="space-y-6">
              {contactReasons.map((reason, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-4 rounded-xl bg-s8ul-dark-lighter/30 border border-s8ul-gray/20 hover:border-s8ul-green/30 transition-all duration-300"
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-s8ul-green transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
    </div>
  )
}

export default ContactHead
