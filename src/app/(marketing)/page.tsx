"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import {
  CreateAgent,
  IDEAgent,
  Forms,
  Questions,
  ToDo,
  ProductPr,
  ProductIssue,
  CustomerCalls,
  ProductPrBottomLeft,
  CoffeeCup,
} from "@/components/svgs";
import { CustomerHero } from "@/components/svgs/customer-hero";
import Image from "next/image";
import { CoffeeSection } from "@/components/coffee-section";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [randomizedComponents, setRandomizedComponents] = useState<
    React.ComponentType<{ className?: string }>[]
  >([]);

  useEffect(() => {
    const components = [
      CreateAgent,
      IDEAgent,
      Forms,
      Questions,
      ToDo,
      ProductPr,
      ProductIssue,
      CustomerCalls,
    ];

    // Shuffle components
    const shuffled = [...components].sort(() => Math.random() - 0.5);
    setRandomizedComponents(shuffled);
    setMounted(true);
  }, []);

  return (
    <div>
    <div className="mx-auto px-4 lg:px-6 h-auto my-10">
      <div className="md:min-h-screen pt-10 pb-20 max-w-6xl mx-auto md:pb-0 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6 items-center">
          {/* Left Column */}
          <div>
            <div>
              <span className="mb-4 sm:ml-0.5 text-sm font-medium uppercase text-neutral-500">
                We Support Sustainability
              </span>
              <h1 className="relative text-black text-3xl sm:text-4xl lg:text-5xl font-medium sm:leading-[60px] ">
                Tea, Coffee,
                <br />
                and <span>Liquid</span>.
                <br />
                Poured into Humans.
              </h1>
            </div>

            <div className="flex relative mt-10 flex-col max:smml-4 ">
              <div className="flex flex-row gap-4">
                <a href="/contact" target="_blank">
                  <Button variant="lightgray" size="sm" className="">
                    Contact Us
                  </Button>
                </a>
                <a
              href="https://graycup.in/"
              target="_blank"
              rel="dofollow noopener"
              id="sign-in-link"
            >
              <Button variant="default" size="sm">
                Visit Store{" "}
                <kbd
                  className="max-sm:hidden font-medium text-[11px] px-1.5 py-0.5 rounded-sm border border-neutral-700 bg-neutral-800 cursor-pointer"
                >
                  India
                </kbd>
              </Button>
            </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="hidden lg:block">
            <Image
              src="/hero-side.png"
              alt="coffee beans"
              className="rotate-40 "
              draggable="false"
              width={220}
              height={220}
            />
          </div>
        </div>

        <div className="my-20 py-20 bg-neutral-100">
          <h2 className="text-5xl font-medium text-neutral-900 mb-6 flex justify-center flex-row items-center gap-4 font-instrument-sans"></h2>
        </div>

        <div className="my-20 flex flex-col md:items-center px-6 py-10 md:py-20 bg-neutral-50 md:grid md:grid-cols-[70%_30%]">
          <div>
            <div className="block md:hidden max-md:pb-5">
              <CoffeeCup />
            </div>
            <h2 className="text-2xl sm:text-5xl font-medium text-neutral-900 mb-6 font-instrument-sans">
              Gray Cup Narrative
            </h2>
            <p className="text-md sm:text-xl mb-10 text-neutral-700 my-4 max-w-2xl">
              Allow the customers to have autonomy to get help with bugs,
              outdated documentation, feature requests, etc. As Fast as Possible
              to reach Resolution.
              <br />
              <br />
              Customers shouldn't shout into the void.
            </p>
          </div>
          <div className="hidden md:block">
            <CoffeeCup />
          </div>
          <a href="https://discord.gg/gpRxmW63JW" target="_blank">
            <Button variant="gray">Join Our Discord</Button>
          </a>
        </div>

        {/* <Image src="/beans-circle.webp" alt="coffee beans" className="pl-2" width={200} height={200} /> */}

      </div>
    </div>
    <div className="px-4 lg:px-6">

    </div>
    <CoffeeSection />

    <div className="pt-10 pb-20 max-w-6xl mx-auto md:pb-0 flex flex-col justify-center">
      <h2 className="text-2xl font-medium">Where you can see our Products</h2>
      <Image src="/available-amazon.png" alt="available on amazon" width="110" height="110" className="mb-20" />
    </div>
    </div>

  );
}
