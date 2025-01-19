"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  let headerText = "";

  if (path.startsWith("/auth/login")) {
    headerText = "Sign in to your account";
  } else if (path.startsWith("/auth/signup")) {
    headerText = "Create a new account";
  } else if (path.startsWith("/auth/forgot-password")) {
    headerText = "Forgot your password?";
  } else if (path.startsWith("/auth/reset-password")) {
    headerText = "Reset your password";
  }

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
        alt="Leegro POS"
      />
      <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        {headerText}
      </h2>
    </div>
  );
}
