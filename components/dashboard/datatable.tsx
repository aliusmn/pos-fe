"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";

interface DataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
}

export default function DataTable<TData>({
  data,
  columns,
  currentPage,
  totalItems,
  itemsPerPage,
}: DataTableProps<TData>) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
      {/* Table */}
      <div className="relative overflow-x-scroll">
        <table className="w-full text-sm text-left">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 cursor-pointer"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center gap-2">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <ArrowUpIcon className="h-4 w-4" />,
                        desc: <ArrowDownIcon className="h-4 w-4" />,
                      }[header.column.getIsSorted() as string] || (
                        <MinusIcon className="h-4 w-4 text-gray-400" />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => {
            const newPage = currentPage - 1;
            window.location.href = `/branches?page=${newPage}`;
          }}
          className="button"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => {
            const newPage = currentPage + 1;
            window.location.href = `/branches?page=${newPage}`;
          }}
          className="button"
        >
          Next
        </button>
      </div>
    </div>
  );
}
