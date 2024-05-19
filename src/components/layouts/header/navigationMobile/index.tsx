import React, { useState } from "react";
import homeIcon from "@/image/icon/home.png";
import barsIcon from "@/image/icon/bars-3.png";
import cartIcon from "@/image/icon/cart.png";
import userIcon from "@/image/icon/user.png";
import Image from "next/image";
import { Home } from "@/icons/feature/Home";

import { Cart } from "@/icons/feature/Cart";
import { User } from "@/icons/info/User";
import { NavBar } from "@/icons/feature/NavBar";

const Navigation = () => {
  const menu = [
    {
      icon: <Home className="w-7 h-7" />,
      name: "Home",
    },
    {
      icon: <NavBar className="w-5 h-6 mb-1 -mt-2" />,
      name: "Menu",
    },
    {
      icon: <Cart className="w-6 h-6" />,
      name: "Cart",
    },
    {
      icon: <User className="w-6 h-6" />,
      name: "User",
    },
  ];
  return (
    <nav className="fixed bottom-0 z-9999 w-full hidden xss:block bg-blue-ct7 h-20">
      <ul className="flex items-center h-full">
        {menu.map((item) => (
          <li className="w-full" key={item.name}>
            <p className="flex justify-center items-center">{item.icon}</p>
            <p className={`text-center `}>{item.name}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
