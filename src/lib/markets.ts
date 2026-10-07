export type MarketFaq = {
  q: string;
  a: string;
};

export type MarketSection = {
  heading: string;
  body: string;
};

export type Market = {
  slug: string;
  name: string;
  h1: string;
  description: string;
  paragraphs: string[];
  sections: MarketSection[];
  faqs: MarketFaq[];
};

export const MARKETS: Market[] = [
  {
    slug: "summerlin",
    name: "Summerlin West & The Ridges",
    h1: "Summerlin Homes for a Nevada Primary Residence",
    description:
      "Summerlin, Summerlin West, and The Ridges for CPA-referred clients establishing Nevada residency. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.",
    paragraphs: [
      "I use Summerlin when the client needs a primary residence, not a second home.",
      "Summerlin West and The Ridges sit on the west edge, with Red Rock Canyon beyond the lots.",
      "Summerlin South has more resale choices and a wider mix of home sizes.",
      "I work the search backward from the CPA's closing date.",
    ],
    sections: [
      {
        heading: "What I look for in the file",
        body: "The house has to read as daily life. I check bedroom count, garage, and how the buyer will actually use the property. A small lock-and-leave condo is harder to defend than a home the client will occupy. I put that in writing for the CPA before we offer.",
      },
      {
        heading: "How I cover the master plan",
        body: "I tour guard-gated sections in The Ridges and open resale across the rest of Summerlin. New construction is a separate track. I use the same builder desks I use valley-wide when the timeline allows a build.",
      },
    ],
    faqs: [
      {
        q: "Is Summerlin only for luxury buyers?",
        a: "No. The Ridges and parts of Summerlin West run to luxury pricing. Summerlin South and resale sections cover more of the market. I match the budget the CPA and the client already set.",
      },
      {
        q: "Can a Summerlin closing hit a December 31 domicile date?",
        a: "Yes, if we start early enough. I want 60 to 90 days before the target close. Resale is faster than a build. I keep a backup property so one failed escrow does not blow the tax year.",
      },
    ],
  },
  {
    slug: "henderson-green-valley",
    name: "Henderson & Green Valley",
    h1: "Henderson and Green Valley Homes for Nevada Residency",
    description:
      "Henderson and Green Valley primary residences for California-to-Nevada moves. Office at 901 N Green Valley Pkwy #200d, Henderson, NV 89074.",
    paragraphs: [
      "My office is in this market, at 901 N Green Valley Pkwy #200d.",
      "Green Valley and the rest of Henderson give relocating clients a suburban lot pattern.",
      "The 215 runs beside Green Valley Parkway and ties this corridor to the airport.",
      "I still underwrite the house as a primary residence, same as every other valley area.",
    ],
    sections: [
      {
        heading: "Why clients ask for Henderson",
        body: "They want a house they will live in, close to daily errands, with a straight drive on the 215. Green Valley is one pocket. Henderson is larger than that one neighborhood. I do not treat the whole city as one product.",
      },
      {
        heading: "Office visits",
        body: "Meetings are at 901 N Green Valley Pkwy #200d, Henderson, NV 89074. Hours are Monday through Sunday, 8:00 am to 8:00 pm. Call 702-222-1964 or book on my calendar.",
      },
    ],
    faqs: [
      {
        q: "Is the Tax Residency Advisors office in Green Valley?",
        a: "Yes. The office is 901 N Green Valley Pkwy #200d, Henderson, NV 89074. That is suite 200d on North Green Valley Parkway.",
      },
      {
        q: "Do you only show homes near the office?",
        a: "No. Henderson and Green Valley are one market I cover. I also place clients in Summerlin, Skye Canyon, Centennial Hills, 55+ communities, and high-rise condos.",
      },
    ],
  },
  {
    slug: "55-plus",
    name: "55+ Communities",
    h1: "55+ Communities for a Nevada Primary Residence",
    description:
      "Sun City, Del Webb, and Heritage at Stonebridge for buyers who want an age-qualified Nevada home. Dr. Jan Duffy coordinates the closing with the CPA.",
    paragraphs: [
      "Sun City, Del Webb, and Heritage at Stonebridge are the 55+ names I use most.",
      "These communities set their own age rules for at least one occupant.",
      "I confirm the current age policy and HOA rules before the first tour.",
      "The domicile file still needs a real primary residence, not a seasonal pad.",
    ],
    sections: [
      {
        heading: "What the house has to prove",
        body: "Age qualification is a community rule. Tax residency is a separate test. I look for a home the client will occupy, with utility setup and a closing date that matches the CPA's year. A golf course does not make a domicile.",
      },
      {
        heading: "Amenities I verify",
        body: "Many of these communities have a clubhouse and golf. I do not assume the amenity is open or included. I pull the current HOA sheet and the resale packet before we write.",
      },
    ],
    faqs: [
      {
        q: "Are 55+ homes acceptable for Nevada domicile?",
        a: "They can be, if the client lives there as a primary residence and the paperwork matches. I flag vacation-style use for the CPA before we offer.",
      },
      {
        q: "Which 55+ communities do you cover?",
        a: "Sun City, Del Webb, and Heritage at Stonebridge are the core list. If the client names another age-qualified community in the valley, I will underwrite that one the same way.",
      },
    ],
  },
  {
    slug: "strip-high-rises",
    name: "Luxury Strip High-Rises",
    h1: "Strip and Near-Strip High-Rise Condos",
    description:
      "High-rise condos on and near the Las Vegas Strip for clients who want a Nevada primary residence in a tower. HOA, parking, and rental rules reviewed with the CPA.",
    paragraphs: [
      "Some clients want a high-rise, not a house on a lot.",
      "I shop towers on the Strip and towers just off it.",
      "HOA dues, rental caps, and parking type change the domicile story.",
      "A small pied-à-terre can look like a second home. I say that out loud.",
    ],
    sections: [
      {
        heading: "What I send the CPA",
        body: "I send the unit size, floor plan, parking type, and the HOA rental rule. If the building limits owner occupancy or pushes short stays, the CPA needs that before the offer. I do not hide a weak file behind a view.",
      },
      {
        heading: "How a tower purchase is different",
        body: "Escrow still runs through a Nevada closing. Building packets and HOA questionnaires add days. I start those requests the day the offer is accepted so a year-end date does not slip on paperwork.",
      },
    ],
    faqs: [
      {
        q: "Can a Strip condo support Nevada residency?",
        a: "It can, if the client occupies it as a primary home and the rest of the file agrees. A rarely used one-bedroom is a harder fact pattern. I will tell the CPA which one we have.",
      },
      {
        q: "Do high-rise closings take longer?",
        a: "Often, yes. HOA documents and building approval add time. I plan for that when the tax year has a hard end date.",
      },
    ],
  },
  {
    slug: "new-construction",
    name: "New Construction",
    h1: "New Construction for a California-to-Nevada Move",
    description:
      "New homes from Century Communities, KB Home, Lennar, Pulte, and Toll Brothers for CPA-referred Nevada relocations. Dr. Jan Duffy, license S.0197614.LLC.",
    paragraphs: [
      "I keep desks with Century Communities, KB Home, Lennar, Pulte, and Toll Brothers.",
      "Quick-delivery inventory can close inside a tax year.",
      "A full build usually cannot, unless we started months ago.",
      "I put the builder's current timeline next to the CPA's date before anyone picks a lot.",
    ],
    sections: [
      {
        heading: "Two clocks",
        body: "The builder has a delivery window. The CPA has a residency date. I do not let a model-home tour ignore either clock. If the build misses December 31, I say so in the first meeting and we switch to resale or quick delivery.",
      },
      {
        heading: "What incentives I will not invent",
        body: "Builder credits change by community and by week. I quote the incentive on the current price sheet, not a number from memory. The client and the CPA see the same sheet I use.",
      },
    ],
    faqs: [
      {
        q: "Which builders do you work with?",
        a: "Century Communities, KB Home, Lennar, Pulte, and Toll Brothers. If a client wants a builder outside that list, I will say whether I already have a desk there.",
      },
      {
        q: "Can we still build and close by year-end?",
        a: "Only if a finished or nearly finished home is available. A dirt start in the fall will not close by December 31. I will not promise that timeline.",
      },
    ],
  },
  {
    slug: "skye-canyon-centennial-hills",
    name: "Skye Canyon & Centennial Hills",
    h1: "Skye Canyon and Centennial Hills for Newer Homes",
    description:
      "Skye Canyon and Centennial Hills in the northwest Las Vegas Valley for newer construction and larger lots. Dr. Jan Duffy places CPA-referred buyers.",
    paragraphs: [
      "Skye Canyon and Centennial Hills sit in the northwest part of the valley.",
      "Buyers come here for newer streets and, in many sections, a larger lot.",
      "The 215 is the usual drive back toward the rest of the valley.",
      "I still judge the house as a primary residence first.",
    ],
    sections: [
      {
        heading: "How I split the two areas",
        body: "Skye Canyon is the newer master plan. Centennial Hills is the broader northwest area around it. They are not the same inventory. I show the specific section that matches lot size, age of home, and the closing date.",
      },
      {
        heading: "Resale versus build",
        body: "Both areas still have new-home sales and resale. A resale with a standard escrow is the safer path for a hard tax-year date. I keep a build option only when the delivery window is already inside that date.",
      },
    ],
    faqs: [
      {
        q: "Are Skye Canyon and Centennial Hills the same place?",
        a: "No. Skye Canyon is a master plan in the northwest valley. Centennial Hills is the larger area around that part of town. I name the section on every tour sheet.",
      },
      {
        q: "Is this market only new construction?",
        a: "No. Both resale and new homes trade here. I pick the path that can close on the CPA's date.",
      },
    ],
  },
];

export function getAllMarketSlugs(): string[] {
  return MARKETS.map((market) => market.slug);
}

export function getMarketBySlug(slug: string): Market | undefined {
  return MARKETS.find((market) => market.slug === slug);
}
