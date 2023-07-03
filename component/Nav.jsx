"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <>
      <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
          <Image
            src="/assets/images/logo.svg"
            alt="Shared Logo"
            width={30}
            height={30}
            className="object-containe"
          />
          <p className="logo_text">Shared</p>
        </Link>

        {/* Desktop Navbar */}
        <div className="sm:flex hidden">
          {isUserLoggedIn ? (
            <div className="flex gap-3 md:gap-5">
              <Link href="/new" className="black_btn">
                Create Post
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </>
  );
};
