"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {  MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ViewIcon from "@/icons/ViewIcon";
import DeleteIcon from "@/icons/DeleteIcon";

// Mock data
const data: Payment[] = [
  {
    id: "B12341",
    amount: 150,
    status: "success",
    email: "figma@example.com",
    invoice: "B12341",
    name: "Figma",
    type: "software",
    marketplace: "subscription",
    transactionType: "subscribe",
    date: "2025-03-12",
    time: "10:30 AM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Figma-logo.svg/1024px-Figma-logo.svg.png",
  },
  {
    id: "B12342",
    amount: 200,
    status: "pending",
    email: "adobe@example.com",
    invoice: "B12342",
    name: "Adobe",
    type: "software",
    marketplace: "creative cloud",
    transactionType: "subscribe",
    date: "2025-03-12",
    time: "11:00 AM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Adobe_Corporate_Logo.svg/1024px-Adobe_Corporate_Logo.svg.png",
  },
  {
    id: "B12343",
    amount: 120,
    status: "cancelled",
    email: "fiverr@example.com",
    invoice: "B12343",
    name: "Fiverr",
    type: "services",
    marketplace: "freelance",
    transactionType: "transfer",
    date: "2025-03-12",
    time: "12:30 PM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Fiverr_logo.svg/1024px-Fiverr_logo.svg.png",
  },
  {
    id: "B12344",
    amount: 90,
    status: "success",
    email: "starbucks@example.com",
    invoice: "B12344",
    name: "Starbucks",
    type: "food",
    marketplace: "coffee shop",
    transactionType: "purchase",
    date: "2025-03-12",
    time: "1:00 PM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Starbucks_Logo_2011.svg/1024px-Starbucks_Logo_2011.svg.png",
  },
  {
    id: "B12345",
    amount: 50,
    status: "pending",
    email: "kfc@example.com",
    invoice: "B12345",
    name: "KFC",
    type: "food",
    marketplace: "fast food",
    transactionType: "purchase",
    date: "2025-03-12",
    time: "2:30 PM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/KFC_logo.svg/1024px-KFC_logo.svg.png",
  },
  {
    id: "B12346",
    amount: 275,
    status: "success",
    email: "shopify@example.com",
    invoice: "B12346",
    name: "Shopify",
    type: "software",
    marketplace: "e-commerce",
    transactionType: "subscribe",
    date: "2025-03-12",
    time: "3:00 PM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Shopify_logo_2022.svg/1024px-Shopify_logo_2022.svg.png",
  },
  {
    id: "B12347",
    amount: 450,
    status: "cancelled",
    email: "paris_shop@example.com",
    invoice: "B12347",
    name: "Paris Shop",
    type: "retail",
    marketplace: "shopping mall",
    transactionType: "purchase",
    date: "2025-03-12",
    time: "4:00 PM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Paris_logo.svg/1024px-Paris_logo.svg.png",
  },
];

export type Payment = {
  id: string;
  amount: number;
  invoice: string;
  name: string;
  type: string;
  marketplace: string;
  transactionType: string;
  date: string;
  time: string;
  logo: string;
  status: string;
  email: string;
};

// Define columns
export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "invoice",
    header: "Invoice",
    cell: ({ row }) => (
      <div className="capitalize text-black">{row.getValue("invoice")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name/Business",
    cell: ({ row }) => (
      <div className="capitalize text-black">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "transactionType",
    header: "Transaction Type",
    cell: ({ row }) => (
      <div className="capitalize text-[#6C7278] rounded-sm w-[96px] h-[33px] flex justify-center items-center font-semibold bg-[#EDF1F3]">
        {row.getValue("transactionType")}
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: "Date&Time",
    cell: ({ row }) => (
      <div className="capitalize text-black">{row.getValue("date")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <div className="capitalize text-black">${row.getValue("amount")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div
        className={`capitalize  rounded-sm ${
          row.getValue("status") == "success" &&
          "bg-[#ECF8F0CC] text-[#1C8C6E] w-[96px] h-[33px] flex justify-center items-center font-semibold"
        } ${
          row.getValue("status") == "pending" &&
          "bg-[#FBF4E4] text-[#DBAA00] w-[96px] h-[33px] flex justify-center items-center font-semibold"
        }  ${
          row.getValue("status") == "cancelled" &&
          "bg-[#F2E7E7] text-[#BE3F4A] w-[96px] h-[33px] flex justify-center items-center font-semibold"
        }`}
      >
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: () => (
      <div className="flex justify-center items-cente gap-3 ">
        <button className="cursor-pointer">
          <ViewIcon></ViewIcon>
        </button>
        <button className="cursor-pointer">
          <DeleteIcon></DeleteIcon>
        </button>
      </div>
    ),
  },
  //   {
  //     accessorKey: "email=",
  //     header: ({ column }) => (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Email
  //         <ArrowUpDown />
  //       </Button>
  //     ),
  //     cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  //   },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <div className="hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full mt-5">
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-[#EDF1F3] text-[#6C7278]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col lg:flex-row space-y-5 justify-between items-center mt-5">
        <div className="flex items-center">
          <div className="space-x-2 text-black ">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      if (!table.getCanPreviousPage()) {
                        e.preventDefault(); // Prevent the click if there are no previous pages
                      } else {
                        table.previousPage();
                      }
                    }}
                    aria-disabled={!table.getCanPreviousPage()} // This visually disables the button
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    isActive={table.getState().pagination.pageIndex === 0}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    isActive={table.getState().pagination.pageIndex === 1}
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    isActive={table.getState().pagination.pageIndex === 2}
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      if (!table.getCanNextPage()) {
                        e.preventDefault(); // Prevent the click if there are no next pages
                      } else {
                        table.nextPage();
                      }
                    }}
                    aria-disabled={!table.getCanNextPage()} // This visually disables the button
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>

        <div className="flex  items-center  ">
          <div className="text-[#1A1C1E] flex gap-4 items-center">
            <p className="text-[#1A1C1E]">showing 6 of 50 entries</p>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Rows per page" />
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
      </div>
    </div>
  );
}
