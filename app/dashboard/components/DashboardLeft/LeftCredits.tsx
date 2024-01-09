import { Avatar, Flex } from "@radix-ui/themes";
import { ChevronDown, Wallet } from "lucide-react";
export default function LeftCredits() {
  return (
    <div className="h-fit w-full bg-white bg-opacity-15 rounded-md p-2">
      <div className="w-full flex items-center justify-start">
        <div className="bg-white bg-opacity-20 h-fit w-fit p-1 rounded-md">
          <Wallet className="text-white" />
        </div>
        <div className="h-fit grow mx-2 flex flex-col justify-center">
          <h1 className="text-white font-light text-xs">Available Credits</h1>
          <a className="text-white font-medium text-base" href="/">
            222.10
          </a>
        </div>
      </div>
    </div>
  );
}
