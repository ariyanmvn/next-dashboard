"use client";
import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import SearchBlackIcon from "@/icons/SearchBlackIcon";
import FilterIcon from "@/icons/FilterIcon";
import ExportIcon from "@/icons/ExportIcon";
import { DataTableDemo } from "./TransTableContent";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function TransTable() {
  const [filter, setFilter] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isExportSuccessful, setIsExportSuccessful] = useState(false);

  console.log("filter", filter);

  return (
    <div className="bg-[#FFFFFF] p-[24px] rounded-[16px] mt-2 xl:mt-5 w-[100%] xl-w-full h-[900px] mx-auto  lg:h-[805px]">
      {/* for mobile */}
      <div className="mobile-icons  flex justify-between items-center lg:hidden">
        <div className="flex w-[147px] justify-center px-2 border-gray-300 border-1 items-center cursor-pointer text-black rounded-[100px] ">
          <SearchBlackIcon></SearchBlackIcon>
          <Input className="border-none" placeholder="search..." />
        </div>

        <div className="flex gap-[10px]">
          <button
            onClick={() => setFilter(!filter)}
            className="filter border-1 border-gray-300 flex items-center cursor-pointer justify-center rounded-full w-[42px] h-[42px] lg:hidden"
          >
            <FilterIcon></FilterIcon>
          </button>
          <div
            onClick={() => setIsDialogOpen(true)}
            className="export border-1 border-gray-300 flex items-center cursor-pointer justify-center rounded-full w-[42px] h-[42px] lg:hidden"
          >
            <ExportIcon></ExportIcon>
          </div>
        </div>
      </div>

      {/* for dekstop */}

      <div className="dekstop-icons hidden lg:flex justify-between items-center">
        <div className="flex w-[300px] justify-center px-2 border-gray-300 border-1 items-center cursor-pointer text-black rounded-[100px] ">
          <SearchBlackIcon></SearchBlackIcon>
          <Input
            className="border-none shadow-none"
            placeholder="search for the transactions here"
          />
        </div>

        <div className="flex gap-[10px]">
          <button
            onClick={() => setFilter(!filter)}
            className="filter border-1  border-gray-300 flex items-center gap-3 cursor-pointer justify-center rounded-[100px]  w-[115px] h-[48px] "
          >
            <FilterIcon></FilterIcon>
            <p className="text-black">Filter</p>
          </button>
          <div
            onClick={() => setIsDialogOpen(true)}
            className="export border-1 border-gray-300 flex items-center gap-3 cursor-pointer justify-center rounded-[100px] w-[115px] h-[48px] "
          >
            <ExportIcon></ExportIcon>
            <p className="text-black">Export</p>
          </div>
        </div>
      </div>

      {/* modal */}
      <div className="modal flex justify-center items-center">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="w-[317px] h-[386px] lg:w-[480px] lg:h-[398px]">
            {/* Move close button to the left */}
            <style>
              {`
          [data-state="open"] > button.absolute {
            left: 20px;
          }
        `}
            </style>

            {!isExportSuccessful ? (
              <>
                {/* Export Data Form */}
                <DialogHeader className="flex justify-center items-center">
                  <DialogTitle className="font-semibold text-[32px]">
                    Export Data
                  </DialogTitle>
                  <DialogDescription>
                    Export data into document form
                  </DialogDescription>
                </DialogHeader>

                {/* Document Selection */}
                <div>
                  <p className="text-gray-400 text-left pl-3 pb-2">
                    Choose type of document
                  </p>
                  <div className="flex justify-center items-center">
                    <Select defaultValue="pdf">
                      <SelectTrigger className="lg:w-[416px] rounded-[16px] w-[253px] h-[62px]">
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="pdf">PDF</SelectItem>
                          <SelectItem value="csv">CSV</SelectItem>
                          <SelectItem value="xlsx">Excel (.xlsx)</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Confirm Button */}
                <DialogFooter>
                  <div className="flex justify-center items-center">
                    <Button
                      onClick={() => setIsExportSuccessful(true)}
                      className="bg-[#31B099] w-[253px] lg:w-[416px] h-[48px] text-white hover:bg-[#31B099] cursor-pointer"
                      type="button"
                      variant="secondary"
                    >
                      Confirm
                    </Button>
                  </div>
                </DialogFooter>
              </>
            ) : (
              <>
                {/* Success Message */}
                <style>
                  {`
          [data-state="open"] > button.absolute {
            display:none
          }
        `}
                </style>
                <div className="flex justify-center items-center flex-col gap-4 mt-7">
                  <img
                    src="/success.png"
                    className="lg:w-[90px] lg:h-[90px] w-[73px] h-[73px]"
                    alt=""
                  />
                  <h1 className="lg:text-[32px] text-[24px] font-semibold">
                    Export Successfully
                  </h1>
                  <p className="text-gray-400 text-center">
                    please check your document and open document file
                  </p>
                </div>

                {/* Done Button to Close Modal */}
                <DialogFooter>
                  <DialogClose asChild>
                    <div className="flex justify-center items-center">
                      <Button
                        className="bg-[#31B099] w-[253px] lg:w-[416px] h-[48px] text-white hover:bg-[#31B099] cursor-pointer"
                        type="button"
                        onClick={() => setIsExportSuccessful(false)}
                      >
                        Done
                      </Button>
                    </div>
                  </DialogClose>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {/* filter*/}
      <div
        className={`filter-icons  ${
          filter == false && `hidden`
        }  flex justify-between items-center gap-[24px] w-[300px] lg:w-[1150px] 2xl:w-[1250px] my-5 mx-auto overflow-x-auto  `}
      >
        <div>
          <Select>
            <SelectTrigger className="w-[270px] h-[48px] rounded-[100px]">
              <SelectValue placeholder="Transaction Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="10">Show 10</SelectItem>
                <SelectItem value="20">Show 20</SelectItem>
                <SelectItem value="30">Show 30</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[300px] h-[48px] rounded-[100px]">
              <SelectValue placeholder="Business Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="10">Show 10</SelectItem>
                <SelectItem value="20">Show 20</SelectItem>
                <SelectItem value="30">Show 30</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[300px] h-[48px] rounded-[100px]"> 
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="10">Show 10</SelectItem>
                <SelectItem value="20">Show 20</SelectItem>
                <SelectItem value="30">Show 30</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[300px] h-[48px] rounded-[100px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="10">Show 10</SelectItem>
                <SelectItem value="20">Show 20</SelectItem>
                <SelectItem value="30">Show 30</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <DataTableDemo></DataTableDemo>
    </div>
  );
}
