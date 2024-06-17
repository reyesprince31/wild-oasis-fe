import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }: any) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex border-primary border">
      <div className="flex-1 relative">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover border-r border-primary"
        />
      </div>

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 ">
          <h3 className="text-accent font-semibold text-2xl mb-3">
            Cabin {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <User className="h-5 w-5 text-primary" />

            <p className="text-lg text-primary">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-primary">/ night</span>
          </p>
        </div>

        <div className=" border-t border-t-primary text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-primary py-4 px-6 inline-block hover:bg-accent transition-all hover:text-primary">
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
