import React from "react";
import { KindCardProps } from "@/types";

const KindCard: React.FC<KindCardProps> = ({ title, description, kindlabel, sublabel }) => {
  return (
    <div className="relative w-[640px] bg-white border-l-8 border-primary py-5 px-10">
      <div className="flex flex-col space-y-5 text-black w-[550px]">
        <p className="text-[35px] font-700">{title}</p>
        <p className="text-[25px] font-400">{description}</p>
        <p className="text-[20px] font-700">{sublabel}</p>
      </div>
      <div className="absolute text-white bg-primary text-[20px] font-600 bottom-0 right-0 px-4 py-1 rounded-tl-full">
        {kindlabel}
      </div>
    </div>
  );
};

export default KindCard;
