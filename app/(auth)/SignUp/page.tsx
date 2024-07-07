"use client"

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const SignUpPage = dynamic(
  ()=> import('@/components/SignUpPage/SignUpPage'),
  {
      ssr: false,
      loading: () => (
        <div className="flex items-center justify-center h-screen">
    <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
        </div>
    </div>
</div>
      )
    }
)

const SignIn = () => {

  return (
    <SignUpPage />
  );
};

export default SignIn;
