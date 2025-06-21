import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoBootstrap,
  BiLogoJquery,
  BiLogoFirebase,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { TbApi, TbDatabase } from "react-icons/tb";
import { SiThemoviedatabase } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "Movie Website",
    image: "./IMDB.png",
    icons: [BiLogoReact, BiLogoCss3, SiThemoviedatabase],
    description:
      "This website provides information about popular , top-rated and upcoming movies.",
    github: "https://github.com/VijayKumarReddyTalakola/IMDB",
    demo: "https://imdb-rho.vercel.app",
  },
  {
    id: "2",
    name: "Ecommerce Website",
    image: "./ecom.png",
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi, TbDatabase],
    description:
      "This website provides users with all the basic kinds of shopping items.",
    github: "https://github.com/VijayKumarReddyTalakola/Ecommerce-Demo",
    demo: "https://vijay-ecommerce.vercel.app",
  },
  {
    id: "3",
    name: "Travel Hive",
    image: "./travelhive.png",
    icons: [BiLogoReact, BiLogoTailwindCss, BiLogoFirebase],
    description:
      "A travel planning platform for searching destinations, booking accommodations, and creating itineraries. Focused on user-friendly navigation.",
    github: "https://github.com/mt-tanbir",
    demo: "https://asset.uibucket.net/html/travel-hive/index.html",
  },
  {
    id: "4",
    name: "CLG - Consumer Legal Group",
    image: "./clg.png",
    icons: [BiLogoHtml5, BiLogoCss3, BiLogoBootstrap, BiLogoJquery],
    description:
      "Consumer Legal Group is a legal services firm that helps consumers resolve debt-related issues.",
    github: "https://github.com/mt-tanbir",
    demo: "https://consumerlegalgroup.com/index.html",
  },
  {
    id: "5",
    name: "EventDia Dashboard",
    image: "./eventdia-dashboard.png",
    icons: [BiLogoHtml5, BiLogoTailwindCss, , BiLogoJquery],
    description:
      "A web-based dashboard for managing events, tracking attendees, and generating re-ports.",
    github: "https://github.com/mt-tanbir",
    demo: "https://asset.uibucket.net/html/eventdia-dashboard/index.html",
  },
  {
    id: "8",
    name: "Cargopoint - Logistic Shipping & Courier Template",
    image: "./cargopoint.webp",
    icons: [BiLogoHtml5, BiLogoCss3, BiLogoBootstrap, BiLogoJquery],
    description:
      "Cargopoint is the ideal HTML template for logistics companies to boost their online presence and attract more clients.",
    github: "https://github.com/mt-tanbir",
    demo: "https://asset.uibucket.net/html/cargopoint/",
  },
];

export default ProjectsData;
