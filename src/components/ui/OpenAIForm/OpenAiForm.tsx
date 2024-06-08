import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const OpenAiForm = () => {
  const [apiKey, setApiKey] = useState<string>("");

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Enter OpenAI API
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                OpenAI API Key
              </label>
              <input
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                id="first_name"
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="API Key"
                required
              />
              <div className="flex justify-center">
                <DialogClose className="mt-6">
                  <button
                    className="px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg"
                    onClick={() => localStorage.setItem("API_KEY", apiKey)}
                  >
                    Save
                  </button>
                </DialogClose>
              </div>
            </div>
          </DialogHeader>
          <div className="flex items-center space-x-2"></div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OpenAiForm;
