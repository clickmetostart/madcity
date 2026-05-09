export interface StateInfo {
  name: string;
  slug: string;
  cities: string[];
  specialty: string;
  description: string;
  highlights: string[];
}

export const stateData: Record<string, StateInfo> = {
  wisconsin: {
    name: "Wisconsin",
    slug: "wisconsin",
    cities: ["Madison", "Milwaukee", "Green Bay", "Sun Prairie", "Middleton"],
    specialty: "WHEDA & First-Time Buyer Specialist",
    description: "As our home base, we have unparalleled expertise in the Wisconsin real estate market. From Madison's tech hub to Milwaukee's growing neighborhoods, we help Wisconsinites secure the best rates.",
    highlights: [
      "WHEDA Down Payment Assistance expert",
      "Specialized in Dane County & Waukesha County markets",
      "Deep understanding of Wisconsin tax credits for homeowners",
      "Local Madison office for in-person consultations"
    ]
  },
  illinois: {
    name: "Illinois",
    slug: "illinois",
    cities: ["Chicago", "Aurora", "Naperville", "Rockford", "Joliet"],
    specialty: "FHA & Conventional Loan Expert",
    description: "Serving the greater Chicagoland area and across Illinois. We understand the competitive nature of the IL market and provide fast pre-approvals that help your offer stand out.",
    highlights: [
      "Expertise in Chicago's diverse neighborhood markets",
      "Streamlined FHA loans for first-time buyers",
      "Competitive conventional rates for suburban upgrades",
      "Remote digital closings for efficiency"
    ]
  },
  florida: {
    name: "Florida",
    slug: "florida",
    cities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Naples"],
    specialty: "Second Home & Investment Properties",
    description: "Whether you're looking for a primary residence or a vacation getaway in the Sunshine State, we provide the specialized financing required for Florida properties.",
    highlights: [
      "Specialized in Condominium & HOA financing",
      "Expertise in Second Home / Vacation property loans",
      "Investment property portfolio options (DSCR)",
      "Familiar with Florida's unique insurance requirements"
    ]
  },
  texas: {
    name: "Texas",
    slug: "texas",
    cities: ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth"],
    specialty: "Jumbo & High-Balance Loans",
    description: "The Texas market is booming. We provide high-balance and Jumbo financing for the rapidly growing markets in Austin, Dallas, and beyond.",
    highlights: [
      "High-balance loan specialists",
      "Fast closings to compete in hot markets",
      "Veteran-friendly VA loan expert",
      "New construction financing options"
    ]
  },
  colorado: {
    name: "Colorado",
    slug: "colorado",
    cities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Boulder"],
    specialty: "Competitive Market Strategist",
    description: "In the fast-moving Colorado market, timing is everything. We provide lightning-fast pre-approvals and clear communication to ensure you win your dream home.",
    highlights: [
      "Fast-track underwriting for 21-day closings",
      "Conventional & Jumbo options for the Front Range",
      "Expertise in mountain property financing",
      "Highly responsive digital platform"
    ]
  },
  minnesota: {
    name: "Minnesota",
    slug: "minnesota",
    cities: ["Minneapolis", "St. Paul", "Rochester", "Duluth", "Bloomington"],
    specialty: "Midwest Market Expert",
    description: "Serving the Twin Cities and throughout Minnesota. We provide localized knowledge and a transparent process for MN homebuyers.",
    highlights: [
      "Expertise in Twin Cities metro neighborhoods",
      "Low down payment FHA & VA options",
      "Competitive rates for the 10,000 lakes region",
      "Clear, upfront closing cost estimates"
    ]
  },
  iowa: {
    name: "Iowa",
    slug: "iowa",
    cities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City"],
    specialty: "USDA & Rural Property Specialist",
    description: "From Des Moines to the rural heartland, we specialize in USDA and agricultural-adjacent property financing for Iowa residents.",
    highlights: [
      "USDA Zero-Down payment expert",
      "Localized knowledge of Iowa's property tax cycles",
      "Streamlined process for suburban & rural buyers",
      "Personalized service from a Midwest-born team"
    ]
  },
  michigan: {
    name: "Michigan",
    slug: "michigan",
    cities: ["Detroit", "Grand Rapids", "Lansing", "Ann Arbor", "Sterling Heights"],
    specialty: "First-Time Homebuyer Expert",
    description: "Helping Michiganders achieve the dream of homeownership. We provide the tools and education needed for first-time buyers in the Great Lakes State.",
    highlights: [
      "Comprehensive first-time buyer education",
      "FHA specialist for urban & suburban markets",
      "MISTATE-friendly lending options",
      "Local market insight for the Grand Rapids & Detroit areas"
    ]
  },
  "north-dakota": {
    name: "North Dakota",
    slug: "north-dakota",
    cities: ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo"],
    specialty: "Rural & Conventional Financing",
    description: "Providing stable, expert financing for North Dakota residents. We understand the unique needs of the ND real estate market.",
    highlights: [
      "Conventional & USDA options",
      "Expertise in Fargo-Moorhead metro market",
      "Simple, transparent closing process",
      "Direct communication with Rob Miller"
    ]
  },
  "south-dakota": {
    name: "South Dakota",
    slug: "south-dakota",
    cities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown"],
    specialty: "Midwest Value Specialist",
    description: "Serving the Mount Rushmore State. We provide competitive rates and localized service for South Dakota homebuyers.",
    highlights: [
      "Zero down payment options (VA/USDA)",
      "Expertise in Sioux Falls growing neighborhoods",
      "Fast, digital-first pre-approvals",
      "Honest, no-surprise fee structure"
    ]
  },
  washington: {
    name: "Washington",
    slug: "washington",
    cities: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue"],
    specialty: "Tech-Savvy Digital Closings",
    description: "Serving the Pacific Northwest. We provide a 100% digital experience that matches the tech-forward nature of the Washington market.",
    highlights: [
      "High-balance & Jumbo options for Seattle/Bellevue",
      "Seamless digital closing process",
      "Expertise in WA state lending regulations",
      "Fast pre-approvals for the competitive PNW market"
    ]
  }
};
