"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ClipboardCopyIcon } from "lucide-react";
import Link from "next/link";

const ReferNow = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const referralLink = `https://accredian-frontend-task-ashen.vercel.app/SignUp?ref=${referralCode}`;

  const referralLinkRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const referalCode = sessionStorage.getItem("referralCode");
    if (referalCode) {
      setReferralCode(referalCode);
    }
  }, []);

  const copyToClipboard = () => {
    if (referralLinkRef.current) {
      referralLinkRef.current.select();
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  if (!referralCode) {
    return (
      <Link
        href={"/SignIn"}
        className="bg-[#1A73E8] text-white text-xl px-8 py-2 rounded-lg w-fit"
      >
        Refer Now
      </Link>
    );
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>

        <button
          name="refer now button"
          className="bg-[#1A73E8] text-white text-xl px-8 py-2 rounded-lg w-fit"
          onClick={() => {
            setDialogOpen(true);
          }}
        >
          Refer Now
        </button>
        
      </DialogTrigger>

      <DialogContent
        className="bg-white max-h-[90vh] overflow-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <DialogHeader>
          <p className="text-2xl font-bold">{referralCode}</p>
        </DialogHeader>

        <div className="bg-gray-50 dark:bg-gray-900 py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Referral Code
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Share this code with your friends to earn rewards.
                </p>
                <div className="mt-4 flex items-center space-x-2">
                  <input
                    ref={referralLinkRef}
                    type="text"
                    readOnly
                    className="bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-4 py-2 w-full"
                    value={referralLink}
                  />
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <ClipboardCopyIcon className="h-5 w-5 mr-2" />
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                {/* You can add more UI elements or icons here */}
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <button
              name="add_task_cancel_button"
              className="bg-red-200 text-red-600 font-semibold px-5 py-2 rounded-md"
              onClick={() => {
                setDialogOpen(false);
              }}
            >
              Close
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReferNow;
