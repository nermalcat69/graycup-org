import type { Metadata } from "next";
import Script from "next/script";
import { generateTitle, generateDescription, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: generateTitle("Glossary"),
  description: generateDescription(
    "A complete glossary of tea, coffee, spice, sourcing, and export terms used by Gray Cup. Understand CTC, green coffee, lot traceability, FOB, cupping scores, and more."
  ),
  alternates: { canonical: `${SITE_URL}/glossary` },
};

type Term = {
  term: string;
  definition: string;
};

type Section = {
  letter: string;
  terms: Term[];
};

const glossary: Section[] = [
  {
    letter: "A",
    terms: [
      {
        term: "Arabica",
        definition:
          "Coffea arabica — the higher-altitude coffee species prized for its complex flavor, lower caffeine content, and smooth acidity. Most specialty coffee is Arabica.",
      },
      {
        term: "Assam Tea",
        definition:
          "Black tea grown in the Assam valley of northeast India, known for its malty, bold flavor and deep amber liquor. The dominant cultivar used for CTC chai production.",
      },
    ],
  },
  {
    letter: "B",
    terms: [
      {
        term: "B2B (Business-to-Business)",
        definition:
          "Wholesale or trade transactions between businesses rather than to end consumers. Gray Cup supplies tea, coffee, and spices to cafes, retailers, and exporters via b2b.graycup.in.",
      },
      {
        term: "Blend",
        definition:
          "A mix of teas or coffees from different origins, estates, or grades combined to achieve a consistent flavor, color, or body in the final cup.",
      },
      {
        term: "Bulk Chai",
        definition:
          "Pre-blended or raw CTC tea sold in large quantities for institutional buyers such as canteens, offices, railways, and food-service kitchens.",
      },
      {
        term: "Bulk Green Coffee",
        definition:
          "Unroasted coffee beans traded in large volumes, typically in 60 kg jute bags. Green coffee is the standard form for international export before roasting at the destination.",
      },
    ],
  },
  {
    letter: "C",
    terms: [
      {
        term: "Chai",
        definition:
          "The Hindi word for tea. In common usage, it refers to spiced, milk-brewed tea made with CTC leaves, sugar, and masalas like ginger, cardamom, and cinnamon.",
      },
      {
        term: "Cherry (Coffee)",
        definition:
          "The raw fruit of the coffee plant. Each cherry contains two seeds — the green coffee beans. Processing method (washed, natural, honey) is applied at this stage.",
      },
      {
        term: "CIF (Cost, Insurance, Freight)",
        definition:
          "An export pricing term where the seller covers cost of goods, insurance, and freight to the destination port. Contrast with FOB, where responsibility transfers at origin port.",
      },
      {
        term: "CIN (Corporate Identification Number)",
        definition:
          "A unique 21-digit alphanumeric code assigned to companies registered under the Indian Companies Act, 2013. Gray Cup's CIN is U47211DL2025PTC457808.",
      },
      {
        term: "Cupping",
        definition:
          "A standardized sensory evaluation method for coffee or tea. Samples are assessed for aroma, flavor, acidity, body, aftertaste, and balance to assign quality scores.",
      },
      {
        term: "Cupping Score",
        definition:
          "A numerical quality rating (typically out of 100) assigned during a cupping session. Specialty coffee is generally defined as scoring 80 or above.",
      },
      {
        term: "CTC (Crush, Tear, Curl)",
        definition:
          "A mechanical tea processing method that passes withered leaves through cylindrical rollers to produce small, granular pellets. CTC tea brews quickly with strong color and body — ideal for chai.",
      },
    ],
  },
  {
    letter: "D",
    terms: [
      {
        term: "D2C (Direct-to-Consumer)",
        definition:
          "A retail model where a brand sells directly to end customers, bypassing distributors or third-party retailers. Gray Cup operates D2C channels at graycup.com and graycup.in.",
      },
      {
        term: "Darjeeling Tea",
        definition:
          "Tea grown in the Darjeeling district of West Bengal, India, with a protected geographical indication (GI). Known for its muscatel flavor and light, floral character.",
      },
      {
        term: "Defect Rate",
        definition:
          "A quality metric in coffee grading that measures the number of imperfect beans (blacks, sours, insect damage, husks) per 300 g sample. Lower defect rates indicate higher quality.",
      },
    ],
  },
  {
    letter: "E",
    terms: [
      {
        term: "Estate Tea / Coffee",
        definition:
          "Tea or coffee grown on a single, named plantation rather than blended from multiple farms. Estate origin typically commands a premium and allows traceability to the source.",
      },
      {
        term: "Export Documentation",
        definition:
          "The set of legal and regulatory papers required for international shipment, including the commercial invoice, packing list, bill of lading, certificate of origin, and phytosanitary certificate.",
      },
    ],
  },
  {
    letter: "F",
    terms: [
      {
        term: "FSSAI (Food Safety and Standards Authority of India)",
        definition:
          "The statutory body responsible for food safety regulation in India. All food businesses handling, packaging, or exporting food products must hold a valid FSSAI license. Gray Cup's FSSAI license number is 23326008000195.",
      },
      {
        term: "First Flush",
        definition:
          "The earliest harvest of the tea season, typically in March–April in Darjeeling. First flush teas are light, fresh, and floral with a green or yellow hue.",
      },
      {
        term: "FOB (Free on Board)",
        definition:
          "An export pricing term where the seller's responsibility ends when goods are loaded onto the vessel at the origin port. The buyer assumes freight and insurance costs from that point.",
      },
    ],
  },
  {
    letter: "G",
    terms: [
      {
        term: "GI Tag (Geographical Indication)",
        definition:
          "A legal designation protecting products that have a specific geographic origin and possess qualities or reputation tied to that origin. Darjeeling Tea and Assam Tea both hold GI tags in India.",
      },
      {
        term: "Grade (Tea)",
        definition:
          "A size and quality classification applied to processed tea leaves. Common CTC grades include BOP (Broken Orange Pekoe), BOPF, PF (Pekoe Fannings), and D (Dust).",
      },
      {
        term: "Green Coffee",
        definition:
          "Raw, unroasted coffee beans. Green coffee retains more chlorogenic acids than roasted coffee and has a shelf life of 1–2 years when stored properly in grain-pro or jute sacks.",
      },
      {
        term: "GST (Goods and Services Tax)",
        definition:
          "India's unified indirect tax applied to the supply of goods and services. Gray Cup's GST registration number is 06AAMCG4985H1Z4.",
      },
    ],
  },
  {
    letter: "H",
    terms: [
      {
        term: "Honey Process",
        definition:
          "A coffee processing method where the cherry skin is removed but some or all of the mucilage (the sticky fruit layer) is left on the bean during drying. Results in sweetness between natural and washed processing.",
      },
    ],
  },
  {
    letter: "I",
    terms: [
      {
        term: "IEC (Importer Exporter Code)",
        definition:
          "A 10-digit code issued by India's Directorate General of Foreign Trade (DGFT), mandatory for any company that imports or exports goods from India. Gray Cup's IEC is AAMCG4985H.",
      },
    ],
  },
  {
    letter: "L",
    terms: [
      {
        term: "Lot",
        definition:
          "A discrete, traceable batch of tea or coffee harvested, processed, and stored together. Lot-level records allow buyers to trace flavor, origin, and processing specifics to a single batch.",
      },
      {
        term: "Loose-Leaf Tea",
        definition:
          "Whole or gently broken tea leaves sold without a tea bag. Loose-leaf teas generally produce a more nuanced cup than fannings or dust grades packed in commercial bags.",
      },
    ],
  },
  {
    letter: "M",
    terms: [
      {
        term: "Masala Chai",
        definition:
          "Spiced Indian tea made with CTC black tea, milk, sugar, and a blend of spices (masala) that typically includes ginger, cardamom, cinnamon, cloves, and black pepper.",
      },
      {
        term: "Matcha",
        definition:
          "Finely ground powder made from shade-grown green tea leaves (tencha). Used in traditional Japanese tea ceremony and increasingly popular in lattes, desserts, and health beverages.",
      },
      {
        term: "Moisture Content",
        definition:
          "The percentage of water in a batch of tea or green coffee. Acceptable moisture levels vary by commodity: 11–12.5% for green coffee, below 6% for finished CTC tea. Excess moisture leads to mold and quality degradation.",
      },
    ],
  },
  {
    letter: "N",
    terms: [
      {
        term: "Natural Process",
        definition:
          "A dry coffee processing method where whole cherries are laid on raised beds and sun-dried for weeks before hulling. Produces fruity, wine-like flavor profiles with heavier body.",
      },
      {
        term: "Nilgiri Tea",
        definition:
          "Tea grown in the Nilgiri Hills of Tamil Nadu, India. Known for its brisk, fragrant character and suitability for iced tea. Nilgiri teas are harvested year-round, unlike Darjeeling.",
      },
    ],
  },
  {
    letter: "O",
    terms: [
      {
        term: "Odisha Coffee",
        definition:
          "Specialty coffee grown in the Eastern Ghats of Odisha, India — an emerging origin producing Arabica and Robusta at tribal farm level. Gray Cup sources and promotes Odisha coffee through odishacoffee.com.",
      },
      {
        term: "Origin",
        definition:
          "The country, region, or specific farm from which a tea or coffee lot is sourced. Single-origin products trace directly to one geographic location, enabling flavor transparency and supply chain accountability.",
      },
      {
        term: "Orthodox Tea",
        definition:
          "Tea processed using traditional rolling and oxidation methods that preserve whole or partially broken leaves. Orthodox teas produce more complex, layered flavors compared to CTC.",
      },
    ],
  },
  {
    letter: "P",
    terms: [
      {
        term: "Phytosanitary Certificate",
        definition:
          "An official document issued by national plant protection authorities certifying that exported plant products are free from pests and diseases. Required for most international shipments of tea, coffee, and spices.",
      },
      {
        term: "Processing Method",
        definition:
          "The technique used to remove the fruit from coffee beans after harvest. The three primary methods are washed (wet), natural (dry), and honey, each imparting distinct flavor characteristics.",
      },
    ],
  },
  {
    letter: "R",
    terms: [
      {
        term: "Robusta",
        definition:
          "Coffea canephora — a lower-altitude coffee species with higher caffeine content and a stronger, more bitter flavor than Arabica. Widely used in espresso blends and instant coffee.",
      },
    ],
  },
  {
    letter: "S",
    terms: [
      {
        term: "Second Flush",
        definition:
          "The summer harvest of Darjeeling tea, typically in May–June. Second flush teas are fuller-bodied with the distinctive muscatel (musky grape) flavor prized by specialty buyers.",
      },
      {
        term: "Single Origin",
        definition:
          "A tea or coffee product sourced exclusively from one specific region or farm, rather than blended from multiple sources. Single-origin products support traceability and allow terroir expression.",
      },
      {
        term: "Sourcing",
        definition:
          "The process of identifying, evaluating, and procuring raw commodities directly from farms, estates, or auctions. Gray Cup sources tea, coffee, and spices by working directly with growers to ensure quality and traceability.",
      },
      {
        term: "Specialty Coffee",
        definition:
          "Coffee that scores 80 or above on the SCAA/SCA 100-point cupping scale. Specialty coffee is traceable to a specific origin, processed with care, and roasted to highlight its inherent flavor.",
      },
      {
        term: "Spice",
        definition:
          "Aromatic plant-derived ingredients used for flavoring, preservation, or health purposes. Gray Cup trades core Indian spices including cardamom, cinnamon, cloves, ginger, pepper, and turmeric.",
      },
      {
        term: "Supply Chain",
        definition:
          "The complete sequence of entities and processes involved in producing and delivering a product from farm to consumer, including cultivation, processing, quality control, packaging, export, and retail.",
      },
    ],
  },
  {
    letter: "T",
    terms: [
      {
        term: "Tea Auction",
        definition:
          "A weekly public sale where tea producers sell lots to buyers via licensed brokers. India's major auction centers are Kolkata, Guwahati, Coimbatore, and Siliguri.",
      },
      {
        term: "Terroir",
        definition:
          "The environmental factors (altitude, soil, climate, rainfall) of a specific growing location that impart unique characteristics to the tea or coffee grown there.",
      },
      {
        term: "Traceability",
        definition:
          "The ability to track a product's journey from farm to end consumer at lot level, including farm location, harvest date, processing method, and export documentation. Central to Gray Cup's sourcing philosophy.",
      },
    ],
  },
  {
    letter: "W",
    terms: [
      {
        term: "Washed Process",
        definition:
          "A wet coffee processing method where the cherry skin and mucilage are removed with water before drying. Produces clean, bright, and acidic flavor profiles with clarity of origin character.",
      },
      {
        term: "Withering",
        definition:
          "The first step in tea processing where freshly harvested leaves are spread on troughs and air-dried to reduce moisture and make the leaves pliable for rolling or CTC processing.",
      },
      {
        term: "Wholesale",
        definition:
          "The sale of goods in large quantities at lower per-unit prices, typically to retailers or institutional buyers rather than individual consumers. Gray Cup offers wholesale pricing via its B2B channel.",
      },
    ],
  },
];

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const activeLetters = new Set(glossary.map((s) => s.letter));

export default function GlossaryPage() {
  const allTerms = glossary.flatMap((s) =>
    s.terms.map((t) => ({ name: t.term, description: t.definition }))
  );

  return (
    <>
      <Script
        id="glossary-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            name: "Gray Cup Tea, Coffee & Trade Glossary",
            description:
              "A comprehensive glossary of tea, coffee, spice, sourcing, and export terms used by Gray Cup Enterprises.",
            url: `${SITE_URL}/glossary`,
            hasDefinedTerm: allTerms.map((t) => ({
              "@type": "DefinedTerm",
              name: t.name,
              description: t.description,
              inDefinedTermSet: `${SITE_URL}/glossary`,
            })),
          }),
        }}
      />

      <main className="mx-auto max-w-5xl px-4 py-16">
        {/* Header */}
        <header className="mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-2">
            Reference
          </p>
          <h1 className="text-4xl font-bold text-gray-900">Glossary</h1>
          <p className="mt-4 max-w-2xl text-base text-gray-500">
            Key terms used across tea, coffee, spice sourcing, trade, and
            export. Use this as a reference when reading our product pages,
            sourcing notes, or export documentation.
          </p>
        </header>

        {/* Alphabet nav */}
        <nav
          aria-label="Jump to letter"
          className="flex flex-wrap gap-1 mb-12 border-b border-neutral-100 pb-6"
        >
          {allLetters.map((letter) =>
            activeLetters.has(letter) ? (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-8 h-8 flex items-center justify-center rounded text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
              >
                {letter}
              </a>
            ) : (
              <span
                key={letter}
                className="w-8 h-8 flex items-center justify-center rounded text-sm text-neutral-300 cursor-default"
              >
                {letter}
              </span>
            )
          )}
        </nav>

        {/* Terms */}
        <div className="space-y-14">
          {glossary.map((section) => (
            <section key={section.letter} id={`letter-${section.letter}`}>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-b border-neutral-100 pb-2">
                {section.letter}
              </h2>
              <dl className="space-y-6">
                {section.terms.map((item) => (
                  <div key={item.term}>
                    <dt className="text-base font-semibold text-neutral-900">
                      {item.term}
                    </dt>
                    <dd className="mt-1 text-sm text-neutral-600 leading-relaxed max-w-3xl">
                      {item.definition}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-20 border-t border-neutral-100 pt-12">
          <p className="text-sm text-neutral-500 max-w-xl">
            Have a term you would like us to define? We update this glossary
            regularly.{" "}
            <a href="/contact" className="underline text-neutral-700 hover:text-neutral-900 transition-colors">
              Reach out
            </a>{" "}
            and we will add it.
          </p>
        </section>
      </main>
    </>
  );
}
