"use client";

import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import DashboardLogo from "@/components/dashboard/logo";
import SidebarMenu, { MenuSection } from "@/components/dashboard/sidebar-menu";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import HeaderProfileMenu, {
  HeaderMenu,
} from "@/components/dashboard/header-profile-menu";

export default function Dashboard({
  children,
  headerMenu,
  menuSections,
}: {
  children: React.ReactNode;
  headerMenu: HeaderMenu;
  menuSections: MenuSection;
}) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsSmallScreen(window.innerWidth < 768);
        setOpenSidebar(window.innerWidth >= 768);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex w-full justify-end bg-gray-100">
      <Transition show={openSidebar}>
        <aside
          className={`${
            isSmallScreen
              ? "absolute top-0 left-0 w-9/12 z-50"
              : "relative xl:w-2/12 md:w-3/12"
          } h-screen bg-indigo-600 text-white text-sm font-medium transition duration-300 ease-in-out border-r border-gray-200`}
        >
          <div className="px-8 pt-5 pb-2 flex justify-between items-center">
            <DashboardLogo />
            {isSmallScreen && (
              <button
                onClick={() => setOpenSidebar(false)}
                className="text-white text-xl font-bold"
              >
                <XMarkIcon className="size-6" />
              </button>
            )}
          </div>
          <SidebarMenu menuSections={menuSections}></SidebarMenu>
        </aside>
      </Transition>
      <div
        className={`transition-all duration-500 ease-in-out ${
          openSidebar && !isSmallScreen ? "xl:w-10/12 md:w-9/12" : "w-full"
        }`}
      >
        <header className="text-sm bg-white shadow-sm p-3 border-b border-gray-200 flex items-center justify-between">
          <div>
            <button
              className="p-2 bg-white border border-gray-300 rounded-lg text-gray-500"
              onClick={() => setOpenSidebar((open) => !open)}
            >
              <Bars3Icon className="size-4" />
            </button>
          </div>
          <HeaderProfileMenu headerMenu={headerMenu} />
        </header>
        <main className="p-4">
          <div className="p-4 bg-white shadow-inner shadow-md rounded-lg">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
