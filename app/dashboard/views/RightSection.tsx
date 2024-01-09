import { SearchBar } from "../components/DashboardRight/SearchBar";
import ActionBar from "./ActionBar";
import Overview from "./Overview";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Transaction from "./Transactions";

export default function RightSection() {
  return (
    <section className="flex flex-col grow justify-start items-start bg-white text-gray-800">
      <ActionBar />
      <div className="flex flex-col gap-2 justify-start items-start h-full w-full p-8">
        <Overview />
        <Transaction />
        <Pagination>
          <PaginationContent>
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
              <PaginationLink href="#">10</PaginationLink>
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
    </section>
  );
}
