"use client";

import { FilterOption } from "@/app/cabins/page";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const activeFilter = (searchParams.get("capacity") || "all") as FilterOption;

  const handleFilter = (filter: FilterOption) => {
    const params = new URLSearchParams(searchParams);

    params.set("capacity", filter);

    router.replace(`${pathname}?${params}`, { scroll: false });
  };

  return (
    <div className="border border-primary flex">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}>
        All
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}>
        Small
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}>
        Medium
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}>
        Large
      </Button>
    </div>
  );
}

interface ButtonProps {
  filter: FilterOption;
  handleFilter: (filter: FilterOption) => void;
  activeFilter: FilterOption;
  children: React.ReactNode;
}
function Button({ filter, handleFilter, activeFilter, children }: ButtonProps) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary ${
        filter === activeFilter ? "bg-primary text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}>
      {children}
    </button>
  );
}
