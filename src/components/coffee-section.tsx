import Image from "next/image";

export function CoffeeSection() {
  return (
    <div>
      <div className="flex flex-row  max-w-fit ">
        <div className="flex flex-row rounded-none sm:rounded-l-2xl bg-orange-200">
          <h3 className="text-sm xs:text-md sm:text-lg md:text-xl lg:text-4xl text-orange-950 text-nowrap font-semibold font-instrument-sans py-4 md:py-8 px-3 md:px-6">
            Coffee Beans <br /> from Different <br /> Regions
          </h3>
        </div>
        <div className="flex flex-row bg-indigo-50">
          <h3 className="text-sm xs:text-md sm:text-lg md:text-xl lg:text-4xl text-orange-950 font-semibold font-instrument-sans py-4 md:py-8 px-3 md:px-6">
            Quality Coffee <br /> Beans for
            <br /> Everyone
          </h3>
        </div>
        <div className="flex flex-row sm:rounded-tr-2xl z-30 bg-fuchsia-200">
          <h3 className="text-sm xs:text-md sm:text-lg md:text-xl lg:text-4xl text-orange-950 font-semibold font-instrument-sans py-4 md:py-8 px-3 md:px-6">
            Great Coffee <br /> shouldn't be
            <br />
            exclusive
          </h3>
        </div>
        <Image
          src="/beans.webp"
          alt="beans"
          className="-mb-30 z-10 rotate-30 grayscale opacity-50 hover:opacity-100 duration-300 hidden lg:block  hover:grayscale-0"
          draggable="false"
          width="280"
          height="280"
        />
      </div>

      <div className="flex justify-end z-30">
        <Image
          src="/three-beans.webp"
          alt="beans"
          className="w-fit grayscale opacity-50 hover:opacity-100 duration-300 hover:grayscale-0 hidden lg:block  h-fit z-10 rotate-30"
          draggable="false"
          width="70"
          height="70"
        />

        <div className="flex flex-row sm:rounded-bl-2xl bg-yellow-200 z-30">
          <h3 className="text-sm xs:text-md sm:text-lg md:text-xl lg:text-4xl text-orange-950 text-nowrap font-semibold font-instrument-sans py-4 md:py-8 px-3 md:px-6">
            Single Origin
            <br /> and <br />
            Blended Beans
          </h3>
        </div>
        <div className="flex flex-row bg-neutral-100 z-30">
          <h3 className="text-sm xs:text-md sm:text-lg md:text-xl lg:text-4xl text-orange-950 font-semibold font-instrument-sans py-4 md:py-8 px-3 md:px-6">
            Roasted Carefully <br /> with <br />
            Consistency
          </h3>
        </div>
        <div className="flex flex-row sm:rounded-r-2xl bg-green-200 z-30">
          <h3 className="text-sm xs:text-md sm:text-lg md:text-xl lg:text-4xl text-orange-950 font-semibold font-instrument-sans py-4 md:py-8 px-3 md:px-6">
            Nothing Added.
            <br /> Nothing
            <br />
            Artificial
          </h3>
        </div>
      </div>
    </div>
  );
}
