"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.png.png";
import Link from "next/link";
import axios from "axios";
import { errorMessage, successMessage } from "@/components/Toastify/Message";
import { useRouter, useSearchParams } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const query = useSearchParams()
  const ref = query.get('ref')

  useEffect(() => {
    if (ref) {
      setReferralCode(ref.toString()); // Ensure it's a string
    }
  }, [query]);

  const handleSignIn = async (e: any) => {
    e.preventDefault();

    if(referralCode){
      const validReferralCode = await axios.post('/api/Referral',{referredById:referralCode})
      console.log(validReferralCode.data)
      if(!validReferralCode.data.referralCode){
        errorMessage("Referral code is not valid")
        return
      }
    }

    if(!email){
        errorMessage("Please give your email")
        return
    }
    if(!password){
        errorMessage("Please give your password")
        return
    }

    setLoading(true);

    const user = await axios.post('/api/SignIn', { email, password })
    if(user.data.user){
        errorMessage("User already exists");
        setLoading(false)
        return
    }

    if(!fullName){
        errorMessage("What is your name?")
        setLoading(false)
        return
    }

    axios
      .post("/api/User", { email, password, fullName, referredById:referralCode })
      .then((response) => {
        if (response.status === 200) {
          successMessage("Sign up successful");
          sessionStorage.setItem(
            "referralCode",
            response.data.newUser.referralCode
          );
          setTimeout(() => {
              router.push("/");
          }, 3000);
        }
      })
      .catch((err) => {
        errorMessage(
          "Sign in failed. Please check your credentials and try again."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-10 lg:py-0">
        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image className="w-auto h-12 object-cover" src={Logo} alt="logo" />
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSignIn}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="referralCode"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Referral Code (optional)
                </label>
                <input
                  type="text"
                  name="referralCode"
                  id="referralCode"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter referral code"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                />
              </div>
              {error && <p className="text-red-600">{error}</p>}
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign up"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/SignIn"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
