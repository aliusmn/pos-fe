import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import React from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Url } from "next/dist/shared/lib/router/router";

// href is required if menuItem doesn't have a nested menu
type MenuItem = {
  title: string;
  icon: React.ReactNode;
  children?: {
    title: string;
    href: string;
  }[];
  href?: Url;
};

export type MenuSection = {
  title?: string;
  menuItems: MenuItem[];
}[];

export default function SidebarMenu({
  menuSections,
}: {
  menuSections: MenuSection;
}) {
  return (
    <nav className="p-4 overflow-y-scroll scrollbar scrollbar-thumb-indigo-400 scrollbar-track-indigo-400 scrollbar-thin h-[calc(100%-80px)]">
      {menuSections.map((item, index) => (
        <section className="mb-6" key={`menu-section-${index}`}>
          {item.title ? (
            <p className="px-4 py-2 text-xs font-bold">{item.title}</p>
          ) : null}
          <ul>
            {item.menuItems.map((menuItem, index) => (
              <li
                className="px-4 py-2 hover:bg-indigo-700 my-1 rounded-lg"
                key={`menu-item-${index}`}
              >
                {menuItem.children && menuItem.children.length > 0 ? (
                  <Disclosure>
                    <DisclosureButton className="group w-full flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {menuItem.icon}
                        <span>{menuItem.title}</span>
                      </div>
                      <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="text-white pt-2 pl-7">
                      {menuItem.children.map((child, index) => (
                        <Link
                          href={child.href}
                          className="block px-2 py-1 text-sm rounded-lg hover:bg-indigo-400"
                          key={`menu-item-child-${index}`}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                ) : menuItem.href ? (
                  <Link
                    href={menuItem.href}
                    className="flex items-center space-x-3"
                  >
                    {menuItem.icon}
                    <span>{menuItem.title}</span>
                  </Link>
                ) : (
                  <div className="flex items-center space-x-3">
                    {menuItem.icon}
                    <span>{menuItem.title}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </nav>
  );
}
