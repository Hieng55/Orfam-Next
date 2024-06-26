import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { User } from "@/icons/info/User";
import { Order } from "@/icons/feature/Order";
import { Brand } from "@/icons/feature/Brand";
import { Discount } from "@/icons/feature/Discount";
import { Logout } from "../../../icons/feature/Logout";
import { Categories } from "@/icons/feature/Categories";
import { Dashboard } from "@/icons/feature/Dashboard";

const DashboardAdmin = () => {
  const router = useRouter();

  const menuItems = [
    {
      text: "Manager products",
      route: "/admin/products",
      icon: <Dashboard className="w-5 h-5 ml-1 l:ml-0 l:translate-x-0.5" />,
    },
    {
      text: "Manager brands",
      route: "/admin/brands",
      icon: <Brand className="w-6 h-6 -mt-2 l:-translate-x-1" />,
    },
    {
      text: "Manager categories",
      route: "/admin/categories",
      icon: <Categories className="w-6 h-6 -mt-2 l:-translate-x-1 l:m-0" />,
    },
    {
      text: "Manager discount",
      route: "/admin/discount",
      icon: <Discount className="w-6 h-6 -mt-2 l:-translate-x-1 l:-translate-y-0.5 l:!m-0" />,
    },
    {
      text: "Manager users",
      route: "/admin/users",
      icon: <User className="w-6 h-6" />,
    },
    {
      text: "Manager orders",
      route: "/admin/orders",
      icon: <Order className="w-6 h-6" />,
    },
  ];

  useEffect(() => {
    if (router.pathname === "/admin") {
      router.push(menuItems[0].route);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex h-full mb-4 w-1/4 flex-col justify-between border-e bg-gray-800 shadow-shadow2 rounded-lg l:w-max">
        <div className="px-4 py-6 xs:p-3">
          <h3 className="text-white text-center p-5 bg-gray-600 rounded-xl font-semibold l:p-3">
            <span className="l:hidden">ADMIN ORFARM</span> <span className="xxl:hidden l:!block">A</span>
          </h3>
          <ul className="mt-6 space-y-6">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  router.push(item.route);
                }}
                className={`flex text-sm items-center gap-4 rounded-lg hover:bg-gray-600 hover:text-white px-4 py-4 xs:px-3 xs:py-2 font-medium text-gray-300 cursor-pointer ${
                  router.pathname === item.route && "bg-gray-600 text-white shadow-shadow2 font-semibold"
                }`}
              >
                <span>{item.icon}</span> <span className="l:hidden">{item.text}</span>
              </li>
            ))}
            <div className="sticky inset-x-0 border-t border-gray-100">
              <li
                className={`flex text-sm items-center mt-10 gap-4 rounded-lg hover:bg-[#ffffff2b] hover:text-white px-4 py-3 l:m-0 l:!p-3 font-medium text-gray-300 cursor-pointer`}
              >
                <span>
                  <Logout className="w-6 h-6 l:l:translate-x-1" />
                </span>
                <span className="l:hidden">LOGOUT</span>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;
