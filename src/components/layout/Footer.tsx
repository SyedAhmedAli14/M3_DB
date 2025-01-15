import React from "react";
import WheitageBlogging from "../structureschema/WheitageBlogging";
import Link from "next/link";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Featured",
    link: "/#featured",
  },
  {
    name: "Contact",
    link: "/#contact",
  },
];

const categories = [
  {
    name: "Artificial Intelligence",
  },
  {
    name: "Tourist",
  },
  {
    name: "Education",
  },
];

const Footer = () => {
  return (
    <WheitageBlogging>
      <div className="bg-gray-800 text-white py-16 px-8 sm:px-16 lg:px-48">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <h3 className="font-bold text-2xl">About</h3>
            <p className="text-gray-300">
              Syed Ahmed Ali Shah Blog Website Made For the Purpose of the GIAC-Assignment
            </p>
            <div className="space-y-2">
              <span className="block">
                <span className="font-semibold">Email:</span>{" "}
                syedahmedalis14@gmail.com
              </span>
              <span>
                <span className="font-semibold">Phone:</span>{" "}
                03332823844
              </span>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="font-bold text-2xl">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name} className="text-gray-300 hover:text-blue-400 transition duration-300">
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Category Section */}
          <div className="space-y-6">
            <h3 className="font-bold text-2xl">Category</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name} className="text-gray-300 hover:text-blue-400 transition duration-300">
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 text-center text-gray-400">
          <p>© 2024 Syed Ahmed Ali Shah. All rights reserved.</p>
        </div>
      </div>
    </WheitageBlogging>
  );
};

export default Footer;