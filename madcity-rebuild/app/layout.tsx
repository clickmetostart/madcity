import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "MadCity Home Loans | Madison, WI Mortgage Lender | Rob Miller",
    template: "%s | MadCity Home Loans",
  },
  description:
    "Expert mortgage guidance in Madison, WI. Rob Miller helps first-time buyers, veterans, and homeowners get FHA, VA, conventional, jumbo & WHEDA loans in 2026. Call 608-227-2002.",
  keywords: [
    "mortgage lender Madison WI",
    "home loans Madison Wisconsin",
    "FHA loans Wisconsin",
    "VA loans Madison",
    "WHEDA loans",
    "jumbo loans Wisconsin",
    "Rob Miller mortgage",
    "MadCity Home Loans",
  ],
  authors: [{ name: "Rob Miller", url: "https://madcityhomeloans.com" }],
  openGraph: {
    type: "website",
    siteName: "MadCity Home Loans",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MadCity Home Loans",
  description:
    "Expert mortgage lender serving Madison, WI and surrounding areas. Specializing in FHA, VA, conventional, jumbo, USDA, and WHEDA home loans.",
  url: "https://madcityhomeloans.com",
  telephone: "+1-608-227-2002",
  email: "rob@provisor.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8446 Excelsior Dr Ste 2-RM",
    addressLocality: "Madison",
    addressRegion: "WI",
    postalCode: "53717",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.0731,
    longitude: -89.4012,
  },
  openingHours: "Mo-Fr 08:00-18:00",
  priceRange: "$$",
  areaServed: [
    "Wisconsin",
    "Illinois",
    "Minnesota",
    "Iowa",
    "Michigan",
    "Florida",
    "Texas",
    "Colorado",
    "North Dakota",
    "South Dakota",
    "Washington",
  ],
  employee: {
    "@type": "Person",
    name: "Rob Miller",
    jobTitle: "Branch Manager / Senior Loan Officer",
    identifier: "NMLS #239865",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MortgageBroker',
              name: 'MadCity Home Loans',
              image: 'https://madcityhomeloans.com/rob-miller.jpg',
              '@id': 'https://madcityhomeloans.com',
              url: 'https://madcityhomeloans.com',
              telephone: '6082272002',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '8446 Excelsior Dr Ste 2-RM',
                addressLocality: 'Madison',
                addressRegion: 'WI',
                postalCode: '53717',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 43.0725,
                longitude: -89.5255,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00',
              },
              sameAs: [
                'https://www.facebook.com/madcityhomeloans',
                'https://www.linkedin.com/in/robmillerprovisor',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
