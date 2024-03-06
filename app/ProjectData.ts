import html from "../public/Images/Icons/html.png";
import css from "../public/Images/Icons/css.png";
import js from "../public/Images/Icons/js.png";
import react from "../public/Images/Icons/react.png";
import next from "../public/Images/Icons/next.svg";
import node from "../public/Images/Icons/node.svg";
import express from "../public/Images/Icons/express.svg";
import psql from "../public/Images/Icons/postgresql.svg";
import tailwind from "../public/Images/Icons/tailwind.svg";
import prisma from "../public/Images/Icons/prisma.svg";

import groceryStoreImg from "../public/Images/grocerystore.png"
import creditCardImg from "../public/Images/fscreditcard.png";
import creditCardDashImg from "../public/Images/creditcarddash.png";
import ecommerceImg from "../public/Images/ecommercedash.png";

export const ProjectData = [
  {
    name: "Grocery Store",
    link: "https://next-grocery-store-tau.vercel.app/",
    skills: [html, css, js, react, next, prisma, psql, tailwind],
    github: "",
    description: "",
    image: groceryStoreImg,
  },
  {
    name: "Credit Card Application",
    link: "https://creditcard-kappa-orpin.vercel.app/",
    skills: [html, css, js, react, node, express, psql],
    github: "",
    description: "",
    image: creditCardImg,
  },

  {
    name: "Ecommerce Dashboard",
    link: "https://dashboard-ten-tawny-27.vercel.app/",
    skills: [html, css, js, react],
    github: "",
    description: "",
    image: ecommerceImg,
  },
  {
    name: "Credit Card Dashboard",
    link: "https://credit-card-dashboard.vercel.app/",
    skills: [html, css, js, react],
    github: "",
    description: "",
    image: creditCardDashImg,
  },
];
