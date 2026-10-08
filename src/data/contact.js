import { FaGithub, FaLinkedin, FaWhatsapp, FaInbox } from "react-icons/fa";

const ContactData = {
  email: "mtanbir.dev@gmail.com",
  phone: "+880 1756-723072",
  address: "Dhaka, Bangladesh",
  links: [
    {
      url: "https://github.com/mt-tanbir",
      label: "GitHub",
      icon: FaGithub,
    },
    {
      url: "https://www.linkedin.com/in/mahmud-tanbir/",
      label: "LinkedIn",
      icon: FaLinkedin,
    },
    {
      url: "https://wa.me/8801756723072",
      label: "WhatsApp",
      icon: FaWhatsapp,
    },
    {
      url: "mailto:mtanbir.dev@gmail.com",
      label: "Email",
      icon: FaInbox,
    },
  ],
};

export default ContactData;
