"use client";

import PanelHeader from "@/components/dashboard/panel-header";
import InputIcon from "@/components/form/input-icon";
import Button from "@/components/general/button";
import { ArrowPathIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  MinusIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState, useMemo, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  category: string;
  // sesuaikan dengan data produk lain yang ada di API
}

type ColumnSort = {
  id: string;
  desc: boolean;
};
type SortingState = ColumnSort[];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5); // Jumlah data per halaman
  const [totalPages, setTotalPages] = useState(0); // Total halaman
  const [sortBy, setSortBy] = useState("title"); // Default sortBy
  const [order, setOrder] = useState("asc"); // Default order

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=phone&limit=23&skip=${
            (currentPage - 1) * pageSize
          }&sortBy=${sortBy}&order=${order}`
        );
        const data = await response.json();
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / pageSize));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, pageSize, sortBy, order]);

  const filteredData = useMemo(() => {
    if (!searchTerm) return products;
    return products.filter((product) =>
      Object.values(product)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, products]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredData.slice(startIndex, startIndex + pageSize);
  }, [filteredData, currentPage, pageSize]);

  const columns: ColumnDef<Product>[] = useMemo(
    () => [
      {
        header: "Product Title",
        accessorKey: "title",
        cell: ({ getValue }) => (
          <div className="text-gray-900">{getValue() as string}</div>
        ),
      },
      {
        header: "Category",
        accessorKey: "category",
        cell: ({ getValue }) => (
          <div className="text-gray-900">{getValue() as string}</div>
        ),
      },
      // tambahkan kolom lain sesuai kebutuhan
    ],
    []
  );

  const table = useReactTable({
    columns,
    data: paginatedData,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  const handleSearch = () => {
    setLoading(true);
    setSearchTerm(search);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handleReset = () => {
    setSearch("");
    setSearchTerm("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (
      currentPage < totalPages &&
      filteredData.length > currentPage * pageSize
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setOrder(order === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setOrder("asc");
    }
  };

  return (
    <>
      <PanelHeader title="Products" description="Manage your products here">
        <Button variant="primary">
          <span className="hidden md:inline-block mr-3">Add Product</span>{" "}
          <PlusCircleIcon className="size-5" />
        </Button>
      </PanelHeader>
      <div className="flex gap-2 items-center mb-4">
        <InputIcon
          icon={
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
          }
          iconButtonProps={{ onClick: handleSearch }}
          placeholder="Enter to search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button variant="default" onClick={handleReset}>
          <ArrowPathIcon className="size-5" />
        </Button>
      </div>
      <div className="relative overflow-x-scroll">
        {loading && (
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            <div className="w-2.5 h-2.5 border-2 border-t-2 border-blue-500 rounded-full animate-spin" />
          </div>
        )}
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    scope="col"
                    className="px-6 py-3 cursor-pointer"
                    onClick={() => handleSort(header.id)}
                  >
                    <div className="flex items-center gap-2">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.id === sortBy && (
                        <>
                          {order === "asc" ? (
                            <ArrowUpIcon className="h-4 w-4" />
                          ) : (
                            <ArrowDownIcon className="h-4 w-4" />
                          )}
                        </>
                      )}
                      {header.column.id !== sortBy && (
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
              <tr
                key={row.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
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
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <div className="flex gap-2">
          <Button
            variant="default"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Prev
          </Button>
          <Button
            variant="default"
            onClick={handleNextPage}
            disabled={
              currentPage === totalPages ||
              filteredData.length <= currentPage * pageSize
            }
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
