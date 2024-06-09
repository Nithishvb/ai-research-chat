import React from "react";

type EmailActionsPropTypes = {
  setNumberOfEmails: (val: any) => void;
  handleClassify: (val: any) => void;
};

const EmailActions = ({
  handleClassify,
  setNumberOfEmails,
}: EmailActionsPropTypes) => {
  return (
    <div className="flex justify-between p-6 items-center">
      <div>
        <form className="max-w-sm mx-auto">
          <select
            id="countries"
            onChange={(e) => setNumberOfEmails(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>{" "}
          </select>
        </form>
      </div>
      <div>
        <button
          onClick={handleClassify}
          className="px-4 py-2 text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200"
        >
          classify
        </button>
      </div>
    </div>
  );
};

export default EmailActions;
