import { ArrowUpDown, Download } from "lucide-react";
import { ActionButton2 } from "../components/DashboardRight/ActionButton2";
import { SearchBar } from "../components/DashboardRight/SearchBar";
import { ActionButton3 } from "../components/DashboardRight/ActionButton3";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Transaction() {
  return (
    <main className="w-full h-full grow flex flex-col gap-4">
      <div className="grid gap-4">
        <h1 className="text-base font-medium">Transactions | This Month</h1>
        <span className="flex gap-2">
          <ActionButton3 text="Pending payout (23)" selected={false} />
          <ActionButton3 text="Completed payout (2)" selected={false} />
          <ActionButton3 text="Refunds (2)" selected={true} />
        </span>
      </div>

      <div className="w-full grow flex flex-col gap-1 justify-between p-2 pb-4 rounded-md bg-gray-50 shadow-md shadow-gray-200">
        <div className="flex items-center justify-between">
          <SearchBar
            text={"Search by order ID..."}
            fill={false}
            width={"100"}
          />
          <div className="flex place-content-center">
            <ActionButton2
              text={"Sort"}
              icon={<ArrowUpDown className="size-4" />}
            />
            <ActionButton2 icon={<Download className="size-4" />} />
          </div>

        </div>
        <div className="grow bg-neutral-200">
        </div>
        <Pagination className="text-[#4D4D4D]">
          <PaginationContent >
            <PaginationItem>
              <PaginationPrevious
                href="#"
                className="border-[1px] border-gray-300"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive={true} className="bg-[#146EB4] text-white">10</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">11</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">12</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">13</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">14</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">15</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">16</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">17</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">18</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                className="border-[1px] border-gray-300"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </main>
  );
}
