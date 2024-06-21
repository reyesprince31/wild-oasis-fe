import { Suspense } from "react";
import CabinList from "./_components/CabinList";
import { Spinner } from "@/components/Spinner";
import Filter from "@/components/Filter";

// export const revalidate = 3600;

export type FilterOption = "all" | "small" | "medium" | "large";

export const metadata = {
  title: "Cabins",
};

export default async function Page({
  searchParams,
}: {
  searchParams: { capacity?: FilterOption };
}) {
  const filter = searchParams.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-primary/70 font-medium">
        Our Luxury Cabins
      </h1>

      <p className="text-secondary text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className="mb-10 flex justify-end">
        <Filter />
      </div>

      <Suspense key={filter} fallback={<Spinner />}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
