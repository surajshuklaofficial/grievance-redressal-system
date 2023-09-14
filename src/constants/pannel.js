import * as BiIcons from "react-icons/bi";
import * as FasIcons from "react-icons/fa6";

export const leftpannel = [
  {
    title: "Previous Complaints",
    href: "/prev",
  },
  {
    title: "Under Process Grievances",
    href: "/process",
  },
  {
    title: "Pending Requests",
    href: "/prs",
  },
  {
    title: "Closed Requests",
    href: "/closed",
  },
  {
    title: "Lodge New Appeal",
    href: "/lna",
  },
  {
    title: "Profile",
    href: "/profile",
  },
];

export const rightPannelCards = [
  {
    icon: <BiIcons.BiDotsHorizontalRounded />,
    description: "Pending requests",
    color: "bg-orange-500",
  },
  {
    icon: <FasIcons.FaListCheck />,
    description: "Requests Closed",
    color: "bg-green-500",
  },
  {
    icon: false,
    description: "Requests Logged",
    color: "bg-rose-500",
  },
];

export const rightPannelNav = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Lodge Grievance",
    href: "/ldc",
  },
  {
    title: "View Status",
    href: "/status",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
