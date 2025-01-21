import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSeparator,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import User from "@/public/user.png";
import React from "react";

export type HeaderMenu = (HeaderMenuItem | null)[];

type HeaderMenuItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

export default function HeaderProfileMenu({
  headerMenu,
}: {
  headerMenu: HeaderMenu;
}) {
  return (
    <Menu>
      <MenuButton>
        <div className="flex items-center space-x-2">
          <Image src={User} alt="Default user icon" width={30} height={30} />
          <span className="font-semibold">John Doe</span>
          <ChevronDownIcon className="size-4" />
        </div>
      </MenuButton>
      <MenuItems
        anchor="bottom"
        transition
        className="origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 bg-white border border-gray-200 rounded-lg shadow-lg"
      >
        {headerMenu.map((item, index) =>
          item === null ? (
            <MenuSeparator
              key={`header-menu-separator-${index}`}
              className="my-1 h-px bg-gray-200"
            />
          ) : (
            <MenuItem key={`header-menu-item-${index}`}>
              <Link
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-150 rounded flex items-center"
              >
                {item.icon}
                <span className="ml-2 text-sm">{item.title}</span>
              </Link>
            </MenuItem>
          )
        )}
      </MenuItems>
    </Menu>
  );
}
