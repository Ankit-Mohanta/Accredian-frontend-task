"use client"

import React, { useEffect, useState } from 'react';
import Logo from "@/assets/logo.png.png";
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const referralCode = sessionStorage.getItem("referralCode");
    if (referralCode) {
      setUser(referralCode);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    setUser("");
  };

  return (
    <div className='w-full sticky top-0 bg-white z-10'>
      <div className='w-full max-w-[1360px] mx-auto flex items-center justify-between py-4'>
        <div className='flex items-center gap-8'>
          <Link href={"/"}>
            <Image
              alt='Logo'
              src={Logo}
              width={125}
              unoptimized={true}
              className='h-auto object-cover'
            />
          </Link>
          <button
            name='Courses button'
            className='px-2 py-2 leading-none rounded-md bg-[#1A73E8] text-sm font-medium text-white flex items-center gap-1'>
            Courses
            <ChevronDown />
          </button>
        </div>
        <div className='flex items-center gap-8'>
          <Link
            href={"#"}
            className='text-[#1A202C] font-medium text-sm transition hover:text-[#1A73E8]'>
            Refer & Earn
          </Link>
          <Link
            href={"#"}
            className='text-[#1A202C] font-medium text-sm transition hover:text-[#1A73E8]'>
            Resources
          </Link>
          <Link
            href={"#"}
            className='text-[#1A202C] font-medium text-sm transition hover:text-[#1A73E8]'>
            About us
          </Link>
          <div className='flex items-center gap-4'>
            {user ? (
              <>
                <span className='text-[#1A202C] font-medium text-sm'>Welcome, {user}</span>
                <button
                  onClick={handleLogout}
                  className='px-2 py-2 leading-none rounded-md bg-[#94A3B8] bg-opacity-20 text-sm font-medium transition text-[#1A202C] hover:text-white hover:bg-[#1A73E8] flex items-center gap-1 cursor-pointer'>
                  Log out
                </button>
              </>
            ) : (
              <Link
                href={"/SignIn"}
                className='px-2 py-2 leading-none rounded-md bg-[#94A3B8] bg-opacity-20 text-sm font-medium transition text-[#1A202C] hover:text-white hover:bg-[#1A73E8] flex items-center gap-1 cursor-pointer'>
                Log in
              </Link>
            )}
            <button
              name='try for free button'
              className='px-2 py-2 leading-none rounded-md bg-[#1A73E8] text-sm font-medium text-white flex items-center gap-1'>
              Try for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
