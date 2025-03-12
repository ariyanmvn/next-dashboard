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
import { Input } from "@/components/ui/input";
import SearchBlackIcon from "@/icons/SearchBlackIcon";
import FilterIcon from "@/icons/FilterIcon";
import ExportIcon from "@/icons/ExportIcon";

export default function TransTable() {
  return (
    <div className="bg-[#FFFFFF] p-[24px] rounded-[16px] mt-2 xl:mt-5 w-[100%] xl-w-full h-[900px] mx-auto  lg:h-[805px]">
      {/* for mobile */}
      <div className="mobile-icons  flex justify-between items-center lg:hidden">
        <div className="flex w-[147px] justify-center px-2 border-gray-300 border-1 items-center cursor-pointer text-black rounded-[100px] ">
          <SearchBlackIcon></SearchBlackIcon>
          <Input className="border-none" placeholder="search..." />
        </div>

        <div className="flex gap-[10px]">
          <div className="filter border-1 border-gray-300 flex items-center cursor-pointer justify-center rounded-full w-[42px] h-[42px] lg:hidden">
            <FilterIcon></FilterIcon>
          </div>
          <div className="export border-1 border-gray-300 flex items-center cursor-pointer justify-center rounded-full w-[42px] h-[42px] lg:hidden">
            <ExportIcon></ExportIcon>
          </div>
        </div>
      </div>

      {/* for dekstop */}

      <div className="dekstop-icons hidden lg:flex justify-between items-center">
        <div className="flex w-[250px] justify-center px-2 border-gray-300 border-1 items-center cursor-pointer text-black rounded-[100px] ">
          <SearchBlackIcon></SearchBlackIcon>
          <Input
            className="border-none shadow-none"
            placeholder="search anything here"
          />
        </div>

        <div className="flex gap-[10px]">
          <div className="filter border-1  border-gray-300 flex items-center gap-3 cursor-pointer justify-center rounded-[100px]  w-[115px] h-[48px] ">
            <FilterIcon></FilterIcon>
            <p className="text-black">Filter</p>
          </div>
          <div className="export border-1 border-gray-300 flex items-center gap-3 cursor-pointer justify-center rounded-[100px] w-[115px] h-[48px] ">
            <ExportIcon></ExportIcon>
            <p className="text-black">Export</p>
          </div>
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
