"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav className="bg-gray-500 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link className="text-white text-lg font-bold" href={"/"}>
            Home
          </Link>
        </div>
        <div>
          <Link
            className="text-white text-lg font-bold"
            href={session ? "/api/auth/signout" : "/api/auth/signin"}
          >
            {session ? "Signout" : "SignIn"}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
