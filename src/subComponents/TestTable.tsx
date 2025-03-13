"use client"
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const data = [
  { id: 1, name: "John Doe", email: "john@example.com", details: "Additional info about John." },
  { id: 2, name: "Jane Smith", email: "jane@example.com", details: "More details about Jane." },
];

const ExpandableTable = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleRow = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <Table className="w-full border border-gray-200">
      <TableHeader>
        <TableRow>
          <TableHead className="w-10"></TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <React.Fragment key={row.id}>
            {/* Main Row */}
            <TableRow>
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleRow(row.id)}
                >
                  {expandedRow === row.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </Button>
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
            {/* Expanded Row */}
            {expandedRow === row.id && (
              <TableRow className="bg-gray-100">
                <TableCell colSpan={3} className="p-4 text-gray-700">
                  {row.details}
                </TableCell>
              </TableRow>
            )}
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExpandableTable;
