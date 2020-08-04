import mediumIcon from "./assets/icons/medium_icon.svg"
import linkedinIcon from "./assets/icons/linkedin_icon.svg"
import twitterIcon from "./assets/icons/twitter_icon.svg"
import angellistIcon from "./assets/icons/angellist_icon.svg"

export const COMPANY = {
  name: "Company",
  children: [
    {
      name: "About",
      to: "/about",
    },
    {
      name: "News",
      to: "/news",
    },
    {
      name: "Career",
      to: "/career",
    },
    {
      name: "Contact",
      to: "/contact-us",
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
