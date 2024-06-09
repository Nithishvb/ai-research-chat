"use client";

import OpenAiForm from "@/components/ui/OpenAIForm/OpenAiForm";
import { isOpenAiKeyPresent } from "@/utils/checkOpenAiKey";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { toast } from "react-toastify";

export default function Home() {

  const handleSignIn = () => {
    if(isOpenAiKeyPresent()){
      signIn("google", {
        callbackUrl: "https://full-stack-assignment-nnjx.vercel.app/pages/emails",
      })
    }else{
      toast.error("Please enter the OpenAI API key before logging in.")
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="mb-20">
          <button
            onClick={handleSignIn}
            className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 w-[400px] h-[60px] flex justify-center items-center"
          >
            <Image
              className="w-6 h-6"
              src={"https://www.svgrepo.com/show/475656/google-color.svg"}
              loading="lazy"
              alt="google logo"
              height={500}
              width={400}
            />
            <span>Login with Google</span>
          </button>
        </div>
        <div className="mt-6 text-center">
          <OpenAiForm />
        </div>
      </div>
    </div>
  );
}
