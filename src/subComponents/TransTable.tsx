import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SearchIcon from "@/icons/SearchIcon";
import { Input } from "@/components/ui/input";
import SearchBlackIcon from "@/icons/SearchBlackIcon";

export default function TransTable() {
  return (
    <div className="bg-[#FFFFFF] rounded-[16px] xl:mt-5 w-[100%] xl-w-full h-[900px] mx-auto  lg:h-[805px]">
      <div className="icons">

        <div className="flex w-[250px] justify-center px-2 border-gray-300 border-1 items-center cursor-pointer text-black rounded-[100px] ">
          <SearchBlackIcon></SearchBlackIcon>
          <Input className="border-none" placeholder="search anything here" />
        </div>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
