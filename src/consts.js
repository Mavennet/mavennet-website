import mediumIcon from "./assets/icons/medium_icon.svg"
import linkedinIcon from "./assets/icons/linkedin_icon.svg"
import twitterIcon from "./assets/icons/twitter_icon.svg"
import angellistIcon from "./assets/icons/angellist_icon.svg"

export const SERVICE = {
  name: "Service",
  children: [
    {
      name: "Strategy",
      to: "/strategy",
    },
    {
      name: "Design",
      to: "/design",
    },
    {
      name: "Implementation",
      to: "/implementation",
    },
    {
      name: "Support",
      to: "/support",
    },
  ],
}

export const COMPANY = {
  name: "Company",
  children: [
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Newsroom",
      to: "/newsroom",
    },
    {
      name: "Partners",
      to: "/partners",
    },
    {
      name: "Career",
      to: "/career",
    },
    {
      name: "Contact",
      to: "/contact",
    },
  ],
}

export const SOCIAL_NETWORK = {
  linkedin: {
    url: "https://linkedin.com",
    src: linkedinIcon,
  },
  twitter: {
    url: "https://twitter.com",
    src: twitterIcon,
  },
  angellist: {
    url: "https://angel.co",
    src: angellistIcon,
  },
  medium: {
    url: "https://medium.com",
    src: mediumIcon,
  },
}
