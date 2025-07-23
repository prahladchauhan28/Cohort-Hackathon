
import { Linkedin, Instagram, X } from "lucide-react";

const TeamMemberCard = ({
  name,
  role,
  location,
  image,
  words,
  followers,
  following,
  likes,
  linkedin,
  insta,
  twitter,
}) => {
  return (
    <div className="relative w-72 h-[440px] rounded-2xl overflow-hidden shadow-xl group transition-all duration-500">
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Name + Role Overlay (always visible) */}
      <div className="absolute bottom-5 left-5 z-10 text-white">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm text-white">{role}</p>
      </div>

      {/* Hover Reveal Panel */}
      <div className="absolute inset-0 bg-gradient-to-t from-s8ul-dark/100 to-transparent translate-y-full group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-between py-6 px-4 rounded-2xl">
        {/* Top section */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-">{name}</h3>
          <p className="text-sm text-white">{role}</p>
          <p className="text-xs text-white">{location}</p>

          {/* Socials */}
          <div className="flex justify-center space-x-4 mt-4 ">
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin
                  size={18}
                  className="text-gray-100 hover:text-blue-600"
                />
              </a>
            )}
            {insta && (
              <a href={insta} target="_blank" rel="noopener noreferrer">
                <Instagram
                  size={18}
                  className="text-gray-100 hover:text-pink-500"
                />
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" rel="noopener noreferrer">
                <X size={18} className="text-gray-100 hover:text-yellow-500" />
              </a>
            )}
          </div>
        </div>

        {/* Stats section */}
        <div    style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }} 
        className="grid mt-2 mb-20 text-center overflow-y-auto max-h-70 pr-2 text-white scrollbar-hide hover:scroll-auto">
          <p className="">
            {words}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
