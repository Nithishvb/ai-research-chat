import React from "react";
import {
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

type EmailListPropType = {
  mailSubject: string;
  mailContent: string;
  label?: string;
  labelColor?: string;
};

const ChatDrawer = ({
  mailSubject,
  mailContent,
  label,
  labelColor,
}: EmailListPropType) => {
  return (
    <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-[500px] rounded-none">
      <div className="p-6 bg-white">
        <div className="flex justify-between">
          <p>{mailSubject}</p>
          {label && <p className={`text-sm ${labelColor}`}>{label}</p>}
        </div>
        <p className="mt-8 text-left">{mailContent}</p>
      </div>
    </DrawerContent>
  );
};

export default ChatDrawer;
