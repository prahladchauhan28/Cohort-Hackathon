import { Linkedin, Instagram, X } from "lucide-react";

const TeamMemberCard = ({ name, role, initials, image, linkedin, insta, twitter }) => {
  return (
    <div className="group bg-gradient-to-br from-s8ul-dark-lighter to-gray-800/50 rounded-xl p-4 border border-s8ul-gray/20 hover:border-s8ul-green/30 transition-all duration-300 transform hover:scale-105">
      <div className="flex items-center space-x-3 mb-3">
        {/* Avatar */}
        <div className="w-12 h-12 bg-gradient-to-br from-s8ul-green to-green-600 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full rounded-full"
            />
          ) : (
            <span>{initials}</span>
          )}
        </div>

        {/* Name and Role */}
        <div className="flex-1">
          <h4 className="text-white font-bold text-sm group-hover:text-s8ul-green transition-colors duration-300">
            {name}
          </h4>
          <p className="text-gray-400 text-xs">{role}</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-3">
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <X size={16} className="text-gray-400 hover:text-s8ul-green transition-colors duration-300" />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} className="text-gray-400 hover:text-s8ul-green transition-colors duration-300" />
          </a>
        )}
        {insta && (
          <a href={insta} target="_blank" rel="noopener noreferrer">
            <Instagram size={16} className="text-gray-400 hover:text-s8ul-green transition-colors duration-300" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
