import TeamMemberCard from "../components/TeamMemberCard ";
import ContactInformation from "../components/ContactInformation";
import ContactHead from "../components/ContactHead";
import ContactForm from "../components/ContactForm";

export const Contact = () => {
  const teamMembers = [
    {
      name: "Animesh Agarwal",
      role: "Founder & CEO",
      initials: "AA",
      words: "Animesh Agarwal is the Founder and CEO of 8Bit Creatives, as well as the founder of S8UL, the country’s leading Esports and gaming content organization. S8UL serves as the parent organization of IQOO SOUL, a leading Esports organization in India. Animesh dons several hats as an entrepreneur, an ex-pro gamer, a monster energy Esports athlete, and a gaming & luxury lifestyle content creator. As a pioneer in the Indian Gaming Industry, the 28-year-old has a deep understanding of the industry and is dedicated to shaping the business of Esports in India. His Company, 8Bit Creatives is also achieving remarkable milestones in content creation and brand collaborations within the gaming sector.",
      image:
        "https://ik.imagekit.io/Prahlad2002/S8UL/animesh.webp?updatedAt=1753125932750",
      linkedin: "https://www.linkedin.com/in/8bitthug/",
      insta: "https://instagram.com/animesh",
      twitter: "https://x.com/8bit_thug",
    },
    {
      name: "Lokesh Jain",
      role: "Co-Founder",
      initials: "LJ",
      words:
        "Hailing from Delhi, Lokesh Jain is the co-founder of 8Bit Creatives and S8UL. With a background in business studies from Hong Kong, he has leveraged his expertise and experience to help both organizations grow by leaps and bounds within the gaming ecosystem. The 31-year-old entrepreneur’s gaming journey began in childhood with Nintendo and PlayStation, transitioning to mobile gaming with PUBG Mobile. Despite his professional commitments, he continues to engage in gaming and streaming casually and enjoys hobbies like billiards and car racing. His contributions through 8Bit Creatives and S8UL have been instrumental in nurturing talent and advancing Indian Esports, demonstrating that strategic and sustainable growth is key to success.",
      image:
        "https://ik.imagekit.io/Prahlad2002/S8UL/lokesh.webp?updatedAt=1753125937802",
      linkedin: "https://www.linkedin.com/in/lokesh-goldy-jain-286a33253/",
      insta: "https://instagram.com/animesh",
      twitter: "https://x.com/8bit__goldy",
    },
    {
      name: "Naman Mathur",
      role: "Co-Founder",
      initials: "NM",
      words: "Widely known by his gaming alias Mortal, Naman Mathur is the Co-founder of S8UL and the face of Indian Esports. As the Co-founder, Mortal has been a driving force behind the organization's meteoric rise, channeling his experience and skillset to shape its strategic direction and growth within the vibrant Esports community of India. Mortal's illustrious career is marked by a string of remarkable achievements and accolades. The 27-year-old holds the distinction of being the only Indian Esports athlete to receive four nominations in the esteemed Esports Awards ,reflecting his immense impact and influence within the industry.",
      image:
        "https://ik.imagekit.io/Prahlad2002/S8UL/naman.webp?updatedAt=1753125940818",
      linkedin: "https://www.linkedin.com/in/naman-mathur-b044b7249/",
      insta: "https://instagram.com/animesh",
      twitter: "https://x.com/MortalxS8ul",
    },
    {
      name: "Sumit Sovasaria",
      role: "Strategic Advisor",
      initials: "SS",
      words: "Sumit is a seasoned industrialist from Guwahati, and an esports enthusiast. Over the years, he has been a keen observer of the gaming and esports ecosystem. His strategic insights and experience in scaling businesses will play a crucial role as S8UL embarks on its next phase of growth.",
      image:
        "https://ik.imagekit.io/Prahlad2002/S8UL/sumit.jpg?updatedAt=1753125945151",
      linkedin: "https://www.linkedin.com/company/s8ul/people/",
      insta: "https://instagram.com/animesh",
      twitter: "https://x.com/S8ulesports",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-32 bg-gradient-to-br from-s8ul-dark via-gray-900 to-black overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Stars */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-s8ul-green rounded-full animate-pulse opacity-60" />
        <div
          className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-pulse opacity-80"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-s8ul-green rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/5 w-1 h-1 bg-white rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "3s" }}
        />

        {/* Floating Moon */}
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-gray-300/20 to-gray-500/10 rounded-full blur-sm" />

        {/* Enhanced Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-s8ul-green/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-l from-purple-500/5 to-transparent rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "3s" }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {/* Logo Section */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-20 h-20  rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-white font-black text-xl">
                  <img
                    src="https://ik.imagekit.io/Prahlad2002/S8UL/logo.webp?updatedAt=1753125937296"
                    alt="S8UL Champion"
                    className="w-full object-cover"
                  />
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">S8UL Gaming</h3>
                <p className="text-s8ul-green font-semibold">Mumbai, India</p>
              </div>
            </div>

            <ContactHead />

            {/* Contact Information */}
            <ContactInformation />
          </div>
          {/* Right Side - Contact Form */}
          <div className="lg:col-span-1">
            <ContactForm />
          </div>
        </div>
      </div>
      {/* Enhanced Team Member Cards */}
      <section className="bg-[#0f172a] text-s8ul-green px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Founders
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Our leadership team is committed to driving innovation and achieving
            excellence.
          </p>
        </div>

        <div className="w-full max-w-screen-2xl mx-auto">
          <div className="flex flex-wrap justify-center lg:justify-between gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
