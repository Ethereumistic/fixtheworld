"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Add this class to your stylesheet or JSX file
const typeCellStyle = 'text-bgray'
const termCellStyle = 'text-tgreen text-xl font-bold'
const descCellStyle = 'text-white text-xl '; // Customize the styles as needed


export type BitcoinTermType = {
  type: "Acronym" | "Word" | "Tech" | "Security" | "Transaction" | "Wallet" | "Market" | "Regulatory" | "Community" | "Misc"
  term: string
  description: string
}

export const columns: ColumnDef<BitcoinTermType>[] = [
  {
    accessorKey: "type",
    header: () => <div className="text-left">Type</div>,
    cell: ({ cell }) => {
      const value = cell.getValue(); // Use getValue() to access the cell value

      // Ensure value is always a string before rendering
      const termString = (typeof value === 'string') ? value : '';

      return <div className={typeCellStyle}>{termString}</div>;
    },
  },
  {
    accessorKey: "term",
    cell: ({ cell }) => {
      const value = cell.getValue(); // Use getValue() to access the cell value

      // Ensure value is always a string before rendering
      const termString = (typeof value === 'string') ? value : '';

      return <div className={termCellStyle}>{termString}</div>;
    },
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-translate-x-5"
        >
          <div className={`px-4`}>Term</div>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
        
      );

    },

  },
  {
    accessorKey: "description",
    header: () => <div className="text-center">Description</div>,
    cell: ({ cell }) => {
      const value = cell.getValue(); // Use getValue() to access the cell value

      // Ensure value is always a string before rendering
      const termString = (typeof value === 'string') ? value : '';

      return <div className={descCellStyle}>{termString}</div>;
    },
  },
];
