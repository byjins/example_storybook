import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
} from "@tanstack/react-table";
import "./Table.css";

export interface TableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  enablePagination?: boolean;
  enableSorting?: boolean;
  enableFiltering?: boolean;
  pageSize?: number;
  className?: string;
}

const Table = <TData extends Record<string, unknown>>({
  data,
  columns,
  enablePagination = true,
  enableSorting = true,
  enableFiltering = false,
  pageSize = 10,
  className,
}: TableProps<TData>) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: enablePagination
      ? getPaginationRowModel()
      : undefined,
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    getFilteredRowModel: enableFiltering ? getFilteredRowModel() : undefined,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    state: {
      sorting,
      columnFilters,
      pagination,
    },
  });

  const combinedClassName = className
    ? `table-container ${className}`
    : "table-container";

  return (
    <div className={combinedClassName}>
      <table className="table">
        <thead className="table-header">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="table-header-row">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="table-header-cell"
                  style={{
                    width:
                      header.getSize() !== 150 ? header.getSize() : undefined,
                  }}
                >
                  {header.isPlaceholder ? null : (
                    <div
                      className={`table-header-content ${
                        enableSorting && header.column.getCanSort()
                          ? "sortable"
                          : ""
                      }`}
                      onClick={
                        enableSorting && header.column.getCanSort()
                          ? header.column.getToggleSortingHandler()
                          : undefined
                      }
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {enableSorting &&
                        header.column.getCanSort() &&
                        (header.column.getIsSorted() === "asc" ? (
                          <span className="sort-indicator"> ↑</span>
                        ) : header.column.getIsSorted() === "desc" ? (
                          <span className="sort-indicator"> ↓</span>
                        ) : (
                          <span className="sort-indicator"> ↕</span>
                        ))}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="table-body">
          {table.getRowModel().rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="table-empty">
                데이터가 없습니다
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="table-row">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="table-cell">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      {enablePagination && (
        <div className="table-pagination">
          <button
            className="table-pagination-button"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            className="table-pagination-button"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <span className="table-pagination-info">
            페이지{" "}
            <strong>
              {table.getState().pagination.pageIndex + 1} /{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <button
            className="table-pagination-button"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            className="table-pagination-button"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
