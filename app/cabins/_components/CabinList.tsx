import { unstable_noStore } from "next/cache";
import CabinCard from "./CabinCard";
import { getCabins } from "@/lib/data-service";
import { FilterOption } from "../page";

type Cabin = {
  id: string;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
};

async function CabinList({ filter }: { filter: FilterOption }) {
  //remove cache
  // unstable_noStore();
  const cabins: Cabin[] = await getCabins();

  let displayedCabins: Cabin[] = [];
  if (filter === "all") displayedCabins = cabins;
  if (filter === "small")
    displayedCabins = cabins.filter((c) => c.maxCapacity <= 3);
  if (filter === "medium")
    displayedCabins = cabins.filter(
      (c) => c.maxCapacity >= 4 && c.maxCapacity <= 7
    );
  if (filter === "large")
    displayedCabins = cabins.filter((c) => c.maxCapacity >= 8);

  if (!cabins.length) return null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
