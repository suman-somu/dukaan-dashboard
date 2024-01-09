import { Avatar, Flex } from "@radix-ui/themes";
import { ChevronDown } from "lucide-react";
export default function LeftProfile() {
  return (
    <div className="h-fit w-full hover:bg-white hover:bg-opacity-15 rounded-md p-1">
      <div className="w-full flex items-center justify-between rounded-md">
        <div className="flex items-center justify-between">
          <Avatar
            src="https://picsum.photos/seed/picsum/200/300"
            fallback="A"
          />
          <div className="h-fit grow mx-2 flex flex-col justify-center">
            <h1 className="text-white font-medium ">Nishyan</h1>
            <a className="text-white text-xs" href="/">
              Visit Store
            </a>
          </div>
        </div>

        <button className="h-full w-fit">
          <ChevronDown className="text-white" />
        </button>
      </div>
    </div>
  );
}
