
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { data } from "../../data/data"
import { ChevronDown, Info } from "lucide-react"
import { colors } from "@/app/consts/color"

export function TableDemo() {
    return (
        <Table>
            <TableHeader className={`bg-[#F2F2F2] rounded-lg`}>
                <TableRow className="text-sm rounded-md">
                    <TableHead >Order ID</TableHead>
                    <TableHead className="flex justify-start items-center">Order Date&nbsp;<ChevronDown className="size-4" /></TableHead>
                    <TableHead className="text-right">Order Amount</TableHead>
                    <TableHead className="flex justify-end items-center text-right">Transaction Fees&nbsp;<Info className="size-4" /></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((entry, index) => (
                    <TableRow key={index}>
                        <TableCell className={`font-medium text-[#146EB4]`}>{entry.orderid}</TableCell>
                        <TableCell>{entry.orderdate}</TableCell>
                        <TableCell className="text-right">{`₹`}{entry.orderamount}</TableCell>
                        <TableCell className="text-right">{`₹`}{entry.transactionfees}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
