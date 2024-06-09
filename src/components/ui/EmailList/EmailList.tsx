import React from "react";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import ChatDrawer from "../ChatDrawer/ChatDrawer";

type EmailListPropType = {
  subject: string;
  mailContent: string;
  label?: string;
};

export const LabelColors: any = {
  Important: "text-green-400",
  Spam: "text-red-400",
  Marketing: "text-orange-400",
  Social: "text-blue-400",
  General: "text-lime-400",
  Promotions: "text-yellow-400",
};

const EmailList = ({ subject, mailContent, label }: EmailListPropType) => {
  return (
    <div className="p-4">
      <Drawer direction="right">
        <DrawerTrigger>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
            <div className="flex justify-between">
              <p className="w-[250px] truncate text-left">{subject}</p>
              {label && (
                <p className={`text-sm ${LabelColors[label]}`}>{label}</p>
              )}
            </div>
            <p className="mt-4 text-left line-clamp-2">{mailContent}</p>
          </div>
        </DrawerTrigger>
        <ChatDrawer
          mailSubject={subject}
          mailContent={mailContent}
          label={label}
          labelColor={label ? LabelColors[label] : ""}
        />
      </Drawer>
    </div>
  );
};

export default EmailList;
