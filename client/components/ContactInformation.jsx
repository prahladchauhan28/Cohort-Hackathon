import { X, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const ContactInformation = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
      <div className="flex items-center space-x-3 text-gray-300">
        <Mail className="w-5 h-5 text-s8ul-green" />
        <span className="text-sm">contact@s8ul.gg</span>
      </div>
      <div className="flex items-center space-x-3 text-gray-300">
        <Phone className="w-5 h-5 text-s8ul-green" />
        <span className="text-sm">+91 98765 43210</span>
      </div>
      <div className="flex items-center space-x-3 text-gray-300">
        <MapPin className="w-5 h-5 text-s8ul-green" />
        <span className="text-sm">Mumbai, India</span>
      </div>
    </div>
  );
};

export default ContactInformation;
