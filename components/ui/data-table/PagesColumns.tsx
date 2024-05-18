'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Page } from '@/app/lib/definitions';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string;
//   amount: number;
//   status: 'pending' | 'processing' | 'success' | 'failed';
//   email: string;
// };

export const PagesColumns: ColumnDef<Page>[] = [
  {
    accessorKey: 'page_id',
    header: 'Page Id',
  },
  {
    accessorKey: 'page_name',
    header: 'Page Name',
  },
  {
    accessorKey: 'page_title',
    header: 'page_title',
    // header: () => <div className="text-right">Page Title</div>,
    // cell: ({ row }) => {
    //   const page_title = 'page_title';
    //   // const page_title = parseFloat(row.getValue('page_title'));
    //   // const formatted = new Intl.NumberFormat('en-US', {
    //   //   style: 'currency',
    //   //   currency: 'USD',
    //   // }).format(amount);

    //   return <div className="text-right font-medium">{page_title}</div>;
    // },
  },
];
