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

export type BitcoinTermType = {
  type: "Acronym" | "Word" | "Tech" | "Security" | "Transaction" | "Wallet" | "Market" | "Regulatory" | "Community" | "Misc"
  term: string
  description: string
}

export const columns: ColumnDef<BitcoinTermType>[] = [
  {
    accessorKey: "type",
    header: () => <div className="text-left">Type</div>,
  },
  {
    accessorKey: "term",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="-translate-x-5"
          >
            Term
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },  },
  {
    accessorKey: "description",
    header: () => <div className="text-center">Description</div>,
  },
]
