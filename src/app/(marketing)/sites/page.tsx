import type { Metadata } from "next";
import Link from "next/link";
import { generateTitle, generateDescription } from "@/lib/seo";

export const metadata: Metadata = {
  title: generateTitle("Our Sites"),
  description: generateDescription(
    "Explore the informational websites owned and operated by Gray Cup, focused on bulk chai, CTC tea education, and loose-leaf tea knowledge."
  ),
};

export default function SitesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      {/* Page Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Our Sites</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-600">
          GrayCup operates a group of informational websites focused on
          different aspects of tea, from bulk chai usage to CTC grading and
          loose-leaf tea education. All sites listed below are owned and
          operated by GrayCup.
        </p>
      </header>

      {/* Cards Grid */}
      <section className="grid gap-6 md:grid-cols-3">
        {/* GrayCup Main Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">GrayCup</h2>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            The main website for Gray Cup: products, sourcing, exports, and
            everything we do with tea, coffee, and spices.
          </p>
          <Link
            href="https://graycup.com"
            className="mt-4 inline-block text-sm font-medium text-primary-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit graycup.com
          </Link>
        </div>

        {/* GrayCup Org Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">GrayCup.org</h2>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Company information website for Gray Cup Enterprises, covering
            registration details, leadership, and corporate disclosures.
          </p>
          <Link
            href="https://graycup.org"
            className="mt-4 inline-block text-sm font-medium text-primary-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit graycup.org
          </Link>
        </div>

        {/* BulkChai Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">BulkChai</h2>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Informational platform on bulk chai usage across cafés, offices,
            canteens, and retail environments.
          </p>
          <Link
            href="https://bulkchai.com"
            className="mt-4 inline-block text-sm font-medium text-primary-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit bulkchai.com
          </Link>
        </div>

        {/* BulkCTC Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">BulkCTC</h2>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Dedicated to explaining CTC tea: grades, particle size, colour
            output, and consistency in bulk chai preparation.
          </p>
          <Link
            href="https://bulkctc.com"
            className="mt-4 inline-block text-sm font-medium text-primary-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit bulkctc.com
          </Link>
        </div>

        {/* PureCha Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">PureCha</h2>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Loose-leaf and orthodox tea education covering purity, processing
            methods, and leaf quality.
          </p>
          <Link
            href="https://purecha.in"
            className="mt-4 inline-block text-sm font-medium text-primary-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit purecha.in
          </Link>
        </div>

        {/* GrayFarms Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Gray Farms</h2>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            A public directory of tea and coffee farms, built to bring
            transparency to the supply chain and help growers get discovered.
          </p>
          <Link
            href="https://grayfarms.in"
            className="mt-4 inline-block text-sm font-medium text-primary-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit grayfarms.in
          </Link>
        </div>

        {/* OdishaCoffee Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Odisha Coffee</h2>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Dedicated to coffee grown in Odisha: origin stories, farm
            profiles, and the region's emerging specialty coffee scene.
          </p>
          <Link
            href="https://odishacoffee.com"
            className="mt-4 inline-block text-sm font-medium text-primary-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit odishacoffee.com
          </Link>
        </div>

        {/* BulkGreenCoffee Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Bulk Green Coffee</h2>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Informational resource on sourcing and buying green coffee in bulk,
            covering grades, processing methods, and supply chain basics.
          </p>
          <Link
            href="https://bulkgreencoffee.com"
            className="mt-4 inline-block text-sm font-medium text-primary-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit bulkgreencoffee.com
          </Link>
        </div>

        {/* GrayBulk Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">GrayBulk</h2>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            GrayCup's bulk sourcing platform connecting buyers with
            large-volume tea and coffee suppliers across India.
          </p>
          <Link
            href="https://graybulk.com"
            className="mt-4 inline-block text-sm font-medium text-primary-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit graybulk.com
          </Link>
        </div>
      </section>

      {/* Ownership Note */}
      <section className="mt-16 max-w-3xl">
        <h3 className="text-xl font-semibold text-gray-900">
          Ownership & Transparency
        </h3>
        <p className="mt-3 text-gray-600">
          All websites listed on this page are owned and operated by GrayCup.
          Each platform serves a specific informational purpose while following
          the same standards of accuracy, clarity, and transparency.
        </p>
      </section>
    </main>
  );
}
