import Image from "next/image";
import React from "react";
import { signOut } from "next-auth/react";

type UserDetailsPropType = {
  userName: string | null | undefined;
  userEmail: string | null | undefined;
  userImage: string;
};

const UserDetails = ({
  userName,
  userEmail,
  userImage,
}: UserDetailsPropType) => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-3">
        <div>
          <Image
            src={userImage}
            alt="user_logo"
            height={40}
            width={40}
            className="rounded-full"
          />
        </div>
        <div>
          <p>{userName}</p>
          <span className="text-sm">{userEmail}</span>
        </div>
      </div>
      <div>
        <button
          className="relative inline-flex items-center justify-center px-10 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
          onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-red-500 rounded-full group-hover:w-56 group-hover:h-56 "></span>{" "}
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>{" "}
          <span className="relative">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
