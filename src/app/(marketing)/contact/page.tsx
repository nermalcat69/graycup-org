import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const addresses = [
  {
    label: "Harsha Bhawan, New Delhi",
    lines: [
      "Harsha Bhawan, 4th Floor",
      "13/29 E-Block, Connaught Place",
      "New Delhi - 110001",
    ],
  },
  {
    label: "Sonipat, Haryana",
    lines: [
      "FF122, Rodeo Drive Mall",
      "GT Road, TDI City, Kundli",
      "Sonipat, Haryana - 131030",
    ],
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div className="mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Contact Gray Cup
          </h1>
          <p className="text-lg text-muted-foreground">
            Have a question or you want to do business with Gray Cup? There is
            always a way to reach us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Card className="p-0 border border-gray-200 rounded-2xl bg-white">
            <CardHeader className="pt-4">
              <CardTitle className="text-lg font-semibold">Call Us</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <a
                href="tel:+918527914317"
                className="text-sm text-neutral-700 hover:text-black"
              >
                +91 8527914317
              </a>
            </CardContent>
          </Card>

          <Card className="p-0 border border-gray-200 rounded-2xl bg-white">
            <CardHeader className="pt-4">
              <CardTitle className="text-lg font-semibold">Email Us</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 flex flex-col gap-2">
              <a
                href="mailto:office@graycup.org"
                className="text-sm text-neutral-700 hover:text-black"
              >
                office@graycup.org
              </a>
              <a
                href="mailto:arjun@graycup.in"
                className="text-sm text-neutral-700 hover:text-black"
              >
                arjun@graycup.in
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map((address) => (
            <Card
              key={address.label}
              className="p-0 border border-gray-200 rounded-2xl bg-white"
            >
              <CardHeader className="pt-4">
                <CardTitle className="text-lg font-semibold">
                  {address.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                {address.lines.map((line) => (
                  <p key={line} className="text-sm text-neutral-700">
                    {line}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
