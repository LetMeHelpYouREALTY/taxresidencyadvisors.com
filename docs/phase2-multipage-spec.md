# Cursor Prompt: Convert taxresidencyadvisors.com to Multipage Site

## Phase 2 — Dr. Jan Duffy as Avatar, CPA Referral Strategy

Paste this into Cursor. This builds on the existing B-One Consulting template already deployed at taxresidencyadvisors.com.

---

## PROMPT START

You are converting **taxresidencyadvisors.com** from a single-page site into a **multipage Next.js site**. The site is already live using the B-One Consulting template with our Phase 1 customizations (KLB Consultants branding, navy/gold palette, services, case studies, about section, contact form).

### CRITICAL STRATEGIC CONTEXT

**The avatar / face of this site is Dr. Jan Duffy.**
- Nevada Licensed Real Estate Agent (S.0197614.LLC)
- Berkshire Hathaway HomeServices Nevada Properties
- 30+ years Las Vegas market expertise, $127M+ career sales, 500+ families served
- Ph.D. in Market Research & Consumer Behavior
- Specializes in: Summerlin West luxury ($800K-$10M+), 55+ communities (Sun City, Del Webb, Heritage at Stonebridge), luxury Strip high-rises, new construction, divorce/probate situations
- Brand voice: Brooklyn-tough PhD professional — direct, warm, data-driven. NOT grandma, NOT corporate, NOT pushy.
- Tagline: "Let Me Help You!"
- Builder relationships: Century Communities, KB Home, Lennar, Pulte, Toll Brothers

**The primary TARGET PERSONA is CPAs and Tax Preparers.**
These are NOT the end clients. These are the **referral sources** — the accountants, tax attorneys, enrolled agents, and financial planners whose clients need to:
- Relocate from California to Nevada for tax reasons
- Establish proper Nevada domicile documentation
- Buy/sell real estate as part of a tax residency change
- Navigate multi-state property holdings

**The value proposition to the CPA/Tax Preparer is:**
"When your client decides to make the move to Nevada, I'm the expert on the ground who handles the real estate side — so you stay focused on the tax strategy, and your client gets white-glove service from someone who's done this 500+ times."

**The referral funnel:**
CPA advises client on NV tax residency → CPA refers client to Dr. Jan for NV real estate → Dr. Jan handles the home purchase (and CA sale if needed) → CPA retains the client relationship, Dr. Jan handles the transaction → Everyone wins.

### EXISTING TECH STACK
- Next.js (App Router) + TypeScript
- Tailwind CSS + Framer Motion
- Three.js (hero)
- Deployed on Vercel
- Color palette: Navy `#1B2A4A`, Gold `#C9A84C`, Slate `#64748B`, Off-white `#F8F7F4`, Deep navy `#0F1A2E`

---

### SITE ARCHITECTURE — MULTIPAGE STRUCTURE

Convert from single-page scroll to **App Router multipage layout** with shared navigation and footer.

```
app/
├── layout.tsx                  ← Global layout (nav + footer)
├── page.tsx                    ← HOME (redesigned hero + highlights)
├── about/
│   └── page.tsx                ← ABOUT (Dr. Jan bio, team, story)
├── services/
│   └── page.tsx                ← SERVICES (4 service cards expanded)
│   └── tax-residency-planning/
│       └── page.tsx            ← SERVICE DETAIL: Tax Residency
│   └── multi-state-advisory/
│       └── page.tsx            ← SERVICE DETAIL: Multi-State
│   └── family-office-consulting/
│       └── page.tsx            ← SERVICE DETAIL: Family Office
│   └── ca-to-nv-relocation/
│       └── page.tsx            ← SERVICE DETAIL: Relocation
├── for-cpas/
│   └── page.tsx                ← CPA REFERRAL LANDING PAGE (★ KEY PAGE)
├── case-studies/
│   └── page.tsx                ← CASE STUDIES index
├── nevada-guide/
│   └── page.tsx                ← NEVADA RELOCATION GUIDE (SEO content)
├── contact/
│   └── page.tsx                ← CONTACT + CONSULTATION FORM
├── components/
│   ├── Navbar.tsx              ← Shared navigation
│   ├── Footer.tsx              ← Shared footer
│   ├── CTA.tsx                 ← Reusable call-to-action blocks
│   ├── TestimonialCard.tsx     ← Reusable testimonial component
│   └── StatBar.tsx             ← Reusable stats component
```

---

### SHARED NAVIGATION (components/Navbar.tsx)

Replace the single-page scroll nav with multipage routing:

```
Logo: "KLB CONSULTANTS" (left)

Nav links:
  Home  |  About Dr. Jan  |  Services ▾  |  For CPAs & Advisors  |  Nevada Guide  |  Case Studies  |  Contact

Services dropdown:
  - Tax Residency Planning
  - Multi-State Advisory
  - Family Office Consulting
  - CA-to-NV Relocation

CTA Button (right): "Refer a Client" → links to /for-cpas
Mobile: Hamburger menu with same structure
```

Keep the Framer Motion slide-in animation from the original template. Make the nav sticky with a glass/blur effect on scroll (`backdrop-blur-md bg-navy/80`).

### SHARED FOOTER (components/Footer.tsx)

```
Column 1 — Dr. Jan Duffy
  Las Vegas Real Estate Expert
  Berkshire Hathaway HomeServices Nevada Properties
  NV License: S.0197614.LLC
  702-222-1964
  info@taxresidencyadvisors.com

Column 2 — Quick Links
  About Dr. Jan
  Services
  For CPAs & Advisors
  Nevada Relocation Guide
  Case Studies
  Contact

Column 3 — Markets We Serve
  Summerlin West & The Ridges
  Henderson & Green Valley
  55+ Communities
  Luxury Strip High-Rises
  New Construction
  Skye Canyon & Centennial Hills

Column 4 — For Professionals
  CPA Referral Program
  Tax Preparer Resources
  Financial Advisor Partnerships
  Schedule a Consultation

Bottom bar:
  © 2026 KLB Consultants | Dr. Jan Duffy | Berkshire Hathaway HomeServices Nevada Properties
  Equal Housing Opportunity logo | Privacy Policy | Terms
```

---

### PAGE 1: HOME (app/page.tsx)

Redesign the homepage as a gateway page, not the entire site.

**Hero Section:**
```
Headline: "Your Client Decided to Move to Nevada. Now What?"
Subheadline: "I'm Dr. Jan Duffy — the Las Vegas real estate expert that CPAs and tax advisors trust when their clients make the tax-residency move. 30+ years. 500+ families. Every neighborhood. Every builder."
Primary CTA: "CPA? Refer a Client →" → /for-cpas
Secondary CTA: "Moving to Nevada? Start Here →" → /nevada-guide
```

The hero should immediately speak to BOTH audiences — the CPA who's referring, and the end client who found the site directly.

**Below the fold — 3 trust blocks (animated on scroll):**

```
Block 1: "For CPAs & Tax Advisors"
  "Your clients trust you with their tax strategy. Trust me with their real estate. White-glove service, confidential process, and I keep you in the loop every step."
  → CTA: "Learn About Our Referral Program"

Block 2: "For Clients Relocating to Nevada"
  "Moving to Nevada is a big financial decision — and picking the right home in the right neighborhood matters as much as the tax savings. I'll show you every option."
  → CTA: "Explore Nevada Communities"

Block 3: "For Family Offices & Investors"
  "Institutional-grade real estate advisory for multi-state portfolios. Multifamily, new construction pipelines, and P3 partnerships."
  → CTA: "Talk Strategy"
```

**Stats Bar (reuse existing component):**
```
30+ Years  |  500+ Families  |  $127M+ in Sales  |  CA + NV Markets  |  Since 2005
```

**Featured Services (4 cards linking to service detail pages):**
Keep the numbered 01-04 cards from the current site but make them clickable links to `/services/[slug]`.

**Social Proof / Testimonial Section:**
```
"We've referred over a dozen clients to Dr. Jan for their Nevada relocations. She understands the tax timeline, gets the domicile documentation right, and our clients always close on time."
— [Name withheld], CPA, Los Angeles

"Dr. Jan didn't just find us a house — she understood why we were moving and made sure every detail supported our residency change. Our accountant was impressed."
— [Name withheld], Tech Executive, relocated from San Jose to Summerlin
```

**Mini CPA CTA Banner:**
```
Background: Gold gradient
"Are you a CPA or Tax Professional? Our referral program is built for you."
Button: "Learn More →" → /for-cpas
```

**Trusted By / Affiliations (keep existing):**
Berkshire Hathaway HomeServices, NAR, Nevada Realtors, California Realtors, Family Office Networks

---

### PAGE 2: ABOUT DR. JAN (app/about/page.tsx)

This is the **trust-building page**. Dr. Jan is the avatar — this page sells HER.

**Hero:**
```
Photo placeholder area (left) + Bio (right)
Headline: "Meet Dr. Jan Duffy"
Subheadline: "Las Vegas Real Estate Expert | Ph.D. | 30+ Years | 500+ Families"
```

**Bio Section (written in Dr. Jan's voice — Brooklyn-tough, warm, direct):**
```
"I've been selling real estate in Las Vegas for over 30 years. Not from behind a desk at some corporate office — on the ground, in the neighborhoods, at every open house and every closing table.

I hold a Ph.D. in Market Research and Consumer Behavior, which is a fancy way of saying I understand why people make the decisions they do — especially the big ones, like where to live and how much to spend. That research background is why CPAs and tax advisors trust me: I get the WHY behind the move, not just the house.

When your client calls me, they're getting someone who knows every subdivision in Summerlin, every builder's incentive program, every 55+ community in the valley, and every condo tower on the Strip. I've closed $127 million in career sales across 500+ families. I know what the comps say, what the market's doing this week, and which neighborhoods are about to get a lot more expensive.

I work with Berkshire Hathaway HomeServices Nevada Properties — the most trusted name in real estate. And I work by referral, which means your reputation is my reputation. I treat every referred client like family."

— Dr. Jan Duffy
   NV License S.0197614.LLC
   702-222-1964
```

**"Why CPAs Choose Dr. Jan" Section (3 columns):**
```
Column 1: "I Understand the Tax Timeline"
  I know your client needs to establish domicile by a specific date. I work backward from that deadline to make sure we close on time, every time. No surprises, no delays.

Column 2: "I Protect Your Client Relationship"
  You referred them to me — that means you trust me with YOUR reputation. I keep you informed, I never overstep, and I make sure your client comes back to you even happier.

Column 3: "I Know Every Neighborhood"
  135+ hyperlocal Las Vegas neighborhoods. I don't show your client 3 random listings — I match them to the right community based on lifestyle, commute, schools, amenities, and long-term value.
```

**Credentials Bar:**
```
- Ph.D., Market Research & Consumer Behavior
- Nevada Licensed Agent S.0197614.LLC
- Berkshire Hathaway HomeServices Nevada Properties
- 30+ Years Las Vegas Market Expertise
- $127M+ Career Sales Volume
- 500+ Families Served
```

**KLB Consultants Team Section (smaller, below Dr. Jan's bio):**
```
"Dr. Jan is supported by the KLB Consultants team for institutional and multi-state advisory:"

Kelly Lynn Boyle — President, CA Licensed Broker
  Family office consulting, institutional RE investment. Est. 2005.

Dr. Gene Boyle — Managing Director
  CA-based. RE investment strategy, multi-state portfolio optimization.
```

---

### PAGE 3: FOR CPAs & ADVISORS (app/for-cpas/page.tsx)

★ **THIS IS THE MOST IMPORTANT PAGE ON THE SITE.** ★

This is the dedicated landing page for the CPA/tax preparer referral program.

**Hero:**
```
Headline: "A Real Estate Partner Your Clients (and Your Reputation) Deserve"
Subheadline: "When your client decides to establish Nevada residency, you need a real estate expert who understands tax timelines, domicile documentation, and confidential service. That's what I do."
CTA: "Refer a Client Now" → scrolls to referral form
Secondary: "Download Our CPA Partnership Guide" → (future PDF asset)
```

**The Problem/Solution Framework:**

```
Section: "The Problem You're Solving For Your Client"

Your client is leaving California (or another high-tax state) for Nevada. The tax strategy is solid. But now they need to:
  ✓ Buy a home in Nevada that supports their domicile claim
  ✓ Close before the tax year deadline
  ✓ Get documentation that withstands an FTB audit
  ✓ Potentially sell their California property
  ✓ Navigate a real estate market they don't know

You can't do all of that AND manage their tax return. You need a real estate partner on the ground in Nevada who gets it.
```

```
Section: "How Our Referral Program Works"

Step 1: You Refer → Send us your client's name and timeline. That's it. Call, email, or use the form below. Takes 60 seconds.

Step 2: We Connect → I personally call your client within 24 hours. I introduce myself, learn their needs, and explain the Nevada market — tailored to their situation and your tax strategy.

Step 3: We Execute → I handle the entire real estate transaction: property search, neighborhood matching, negotiation, inspections, closing. I coordinate with you on any domicile documentation needs.

Step 4: You Stay Informed → You get status updates at key milestones. Your client stays your client. I never cross the line into tax advice — that's your lane.

Step 5: Everyone Wins → Your client is in their new Nevada home on time. Their domicile documentation is clean. You look like a hero. And I've earned the right to your next referral.
```

**"What Makes This Different" — 4 value props:**

```
1. "I Understand FTB Audits"
   I've worked with enough CPA-referred clients to know what the California Franchise Tax Board looks for when they challenge a residency change. The home purchase is a critical piece of evidence — I make sure it's bulletproof.

2. "Tax-Year Deadline Awareness"
   Your client needs to close by December 31st? I work backward from that date. Every property search, every negotiation, every inspection is scheduled to hit YOUR timeline, not mine.

3. "Confidential, Professional Process"
   Many of your clients are high-net-worth, high-profile, or going through sensitive transitions (divorce, pre-IPO, retirement). I've handled them all with discretion for 30+ years.

4. "Zero Cost to You or Your Firm"
   There is no fee, no contract, and no obligation. I earn my commission from the real estate transaction. Your referral costs you nothing — and earns your client everything.
```

**Social Proof (CPA-specific testimonials):**
```
"I've been referring clients to Dr. Jan for 5 years. She's the only agent I trust with high-net-worth relocations because she actually understands why the timing matters."
— CPA, Southern California (name withheld for privacy)

"My client closed in Summerlin 3 weeks before year-end. Dr. Jan had backup properties ready in case the first deal fell through. That kind of preparation is rare."
— Enrolled Agent, San Francisco Bay Area

"What I appreciate most is that Dr. Jan never tries to give tax advice. She stays in her lane, does exceptional work, and makes me look good to my clients."
— Tax Attorney, Los Angeles
```

**CPA Referral Form (below testimonials):**
```
Section headline: "Refer a Client"
Subtext: "Confidential. I'll personally follow up within 24 hours."

Fields:
  - Your Name (CPA/Advisor)
  - Your Firm Name
  - Your Email
  - Your Phone
  - Client Name (or "Prefer to introduce directly")
  - Client's Relocation Timeline (dropdown: Q1 2026, Q2 2026, Q3 2026, Q4 2026, Not Sure)
  - Client's Budget Range (dropdown: $300K-$500K, $500K-$800K, $800K-$1.5M, $1.5M-$3M, $3M+, Not Sure)
  - Special Considerations (textarea: divorce situation, pre-IPO, 55+ community, new construction preference, etc.)
  - How did you hear about us? (dropdown: Colleague referral, Google search, LinkedIn, Conference/event, Other)

  Submit button: "Send Referral"
```

**Below the form — FAQ for CPAs:**
```
Q: "Do I need to be involved in the real estate transaction?"
A: Not at all. Once you refer your client, I handle everything. But I'm happy to coordinate with you on domicile documentation, closing timelines, or anything else that supports the tax strategy.

Q: "What markets do you cover?"
A: All of Las Vegas and Henderson — Summerlin, The Ridges, Red Rock Country Club, Skye Canyon, Centennial Hills, 55+ communities (Sun City, Del Webb, Heritage at Stonebridge), luxury Strip high-rises, and all new construction from Century Communities, KB Home, Lennar, Pulte, and Toll Brothers. If they're moving to Nevada, I've got it covered.

Q: "What about selling their California property?"
A: I partner with top-tier California agents (including our own KLB team with Kelly Lynn Boyle, CA Licensed Broker) to handle the CA disposition. Your client gets coordinated buy/sell service across both states.

Q: "My client needs to close before December 31st. Can you guarantee that?"
A: I can't guarantee anything in real estate — but I can tell you that I've never missed a year-end deadline on a CPA-referred relocation. I build in backup options, I stay on top of every timeline, and I communicate proactively.

Q: "Is there a formal referral agreement?"
A: I keep it simple. A referral is a referral — you send your client my way, I take excellent care of them. If you'd like something in writing for your records, I'm happy to provide a professional referral acknowledgment.

Q: "How do I know my client is being taken care of?"
A: I'll send you a status update when I first connect with your client, when we identify target properties, when we go under contract, and when we close. If you want more frequent updates, just say the word.
```

---

### PAGE 4: SERVICES INDEX (app/services/page.tsx)

Expand the 4 service cards into a full page with more detail and links to individual service pages.

Keep the 01-04 numbered layout but add 2-3 paragraphs per service and a "Learn More →" link to each detail page.

### PAGE 5-8: SERVICE DETAIL PAGES (app/services/[slug]/page.tsx)

Each service gets its own page with:
- Hero with service title and one-line description
- 3-4 paragraphs of detail (written in Dr. Jan's direct, data-driven voice)
- "Who This Is For" section (bullet points of ideal client types)
- Related case study
- CTA: "Schedule a Consultation" or "Have your CPA refer you"
- Sidebar or bottom section: "Are you a CPA? Learn about our referral program →"

**Service 1: Tax Residency Planning (/services/tax-residency-planning)**
```
Focus: Establishing proper NV domicile. Neighborhood selection that supports residency claims. Closing timelines aligned to tax years. Documentation-ready transactions.

Who it's for: High-net-worth individuals leaving CA, pre-IPO founders, retiring executives, trust beneficiaries.

Key data points: Nevada has no state income tax, no inheritance tax, no estate tax. CA FTB actively audits residency changes — your home purchase is evidence item #1.
```

**Service 2: Multi-State Advisory (/services/multi-state-advisory)**
```
Focus: Managing RE holdings across CA and NV. Entity structuring for multi-state properties. Coordinated buy/sell across state lines.

Who it's for: Investors with properties in both states, family offices with Western US portfolios, business owners with multi-state operations.
```

**Service 3: Family Office Consulting (/services/family-office-consulting)**
```
Focus: Institutional-grade RE advisory. Multifamily acquisition, P3 partnerships, portfolio-level strategy. Backed by KLB Consultants (Kelly Lynn Boyle, President + Dr. Gene Boyle, Managing Director).

Who it's for: Single-family offices, multi-family offices, institutional investors, PE-backed RE funds.
```

**Service 4: CA-to-NV Relocation (/services/ca-to-nv-relocation)**
```
Focus: The nuts and bolts of moving from California to Nevada. Neighborhood matching, builder incentives, new construction inventory, 55+ communities, luxury options, school districts, lifestyle matching.

Who it's for: Families, retirees, remote workers, anyone making the physical move.

Key data points: Average CA equity of $X converts to Y% more home in NV. Summerlin West luxury from $800K. New construction from $300K. 55+ communities from $350K.
```

---

### PAGE 9: CASE STUDIES (app/case-studies/page.tsx)

Expand the existing 4 case studies into a full page. Each case study gets:
- Situation (anonymized)
- Challenge
- Solution (what Dr. Jan did)
- Result (specific numbers)
- CPA angle: "The client's CPA referred them because..."

Add a CTA at the bottom: "Have a client with a similar situation? Refer them to Dr. Jan →"

---

### PAGE 10: NEVADA RELOCATION GUIDE (app/nevada-guide/page.tsx)

**This is the SEO content hub.** Long-form guide targeting organic search.

```
Title: "The Complete Guide to Relocating from California to Nevada (2026)"
Subtitle: "Everything your clients need to know — from a real estate expert who's guided 500+ families through the move."

Sections:
1. Why Nevada? (No income tax, no estate tax, business-friendly, cost of living comparison)
2. Establishing Nevada Domicile (What the CA FTB looks for, documentation checklist)
3. Las Vegas Neighborhoods for Relocators (Summerlin, Henderson, Skye Canyon, 55+ communities, luxury high-rises)
4. New Construction Options (Builder inventory: Century Communities, KB Home, Lennar, Pulte, Toll Brothers)
5. The Timeline: How Long Does It Take? (Search → contract → close → domicile → tax filing)
6. Working with Your CPA and Real Estate Agent Together (how the referral relationship works)
7. Common Mistakes to Avoid (keeping CA ties too strong, not documenting intent, buying wrong type of property)
8. FAQ

Each section should be 300-500 words with specific data points, Vegas addresses, and neighborhood names. This is Dr. Jan's voice — direct, data-rich, zero fluff.
```

Add internal links throughout: "Ready to start? Talk to Dr. Jan →" and "Have your CPA contact us →"

---

### PAGE 11: CONTACT (app/contact/page.tsx)

Full contact page with:

**Two-track form:**
```
Tab 1: "I'm a CPA / Tax Professional" → Referral form (mirrors /for-cpas form)
Tab 2: "I'm Relocating to Nevada" → Client inquiry form

Client form fields:
  - Full Name
  - Email
  - Phone
  - Current City/State
  - Relocation Timeline (dropdown)
  - Budget Range (dropdown)
  - What type of property? (checkboxes: Single family, 55+ community, Luxury/custom, New construction, High-rise condo, Investment property)
  - Were you referred by a CPA or financial advisor? (Yes/No + name field)
  - Message / Questions
  - Submit: "Request a Consultation"
```

**Contact info sidebar:**
```
Dr. Jan Duffy
Las Vegas Real Estate Expert
Berkshire Hathaway HomeServices Nevada Properties
NV License: S.0197614.LLC

📞 702-222-1964
📧 info@taxresidencyadvisors.com

Office: Las Vegas, Nevada
Serving: All of Las Vegas, Henderson, Summerlin, and surrounding areas
```

---

### GLOBAL SEO REQUIREMENTS

**Every page must have:**
1. Unique `<title>` and `<meta description>` in the page's metadata export
2. Open Graph tags (title, description, image)
3. JSON-LD structured data appropriate to the page type

**Schema markup per page:**
- Home: `ProfessionalService` + `Person` (Dr. Jan)
- About: `Person` (Dr. Jan) with `jobTitle`, `worksFor`, `alumniOf`
- Services: `Service` type for each service
- For CPAs: `ProfessionalService` with `audience: "CPAs and Tax Professionals"`
- Nevada Guide: `Article` with `author: Dr. Jan Duffy`
- Contact: `LocalBusiness` with `ContactPoint`

**Internal linking strategy:**
- Every page links to /for-cpas at least once
- Every service page links to /contact and /for-cpas
- Nevada Guide links to all 4 service pages
- Case studies link to relevant service pages

---

### DR. JAN'S VOICE GUIDELINES (Apply to ALL copy)

**DO:**
- 8-15 words per sentence average
- Always include specific data (dollar amounts, percentages, neighborhood names, builder names)
- Be direct and warm simultaneously
- Use "I" and "my" — this is personal, not corporate
- Reference specific Las Vegas neighborhoods by name
- Example: "Summerlin West homes in The Ridges start around $1.2M. Red Rock Country Club is more like $800K-$3M depending on the lot."

**DON'T:**
- Use corporate-speak ("We are delighted to assist you with your relocation needs...")
- Use grandma voice ("Oh sweetie, let me help you find the perfect home!")
- Use pushy sales language ("ACT NOW before rates go up!")
- Use vague generalizations ("Las Vegas has many great neighborhoods")
- Say "genuinely," "honestly," or "straightforward"
- Use emojis in body copy (OK in CTAs per the emoji guide: Seller💰, Buyer🏆, 55+☀️)

**Voice examples:**
✅ "Right around $637K based on this week's comps in Summerlin South."
✅ "Your corner lot in The Ridges adds 8-12% over interior lots — I can show you the data."
✅ "I've closed 14 CPA-referred relocations in the last 18 months. Zero missed deadlines."
✅ "The Toll Brothers community in Summerlin West is releasing 12 new lots next month. I can get your client on the priority list."

---

### DESIGN & UX REQUIREMENTS

**Color Palette (keep from Phase 1):**
- Navy `#1B2A4A` (primary)
- Gold `#C9A84C` (accent/CTAs)
- Slate `#64748B` (secondary text)
- Off-white `#F8F7F4` (light backgrounds)
- Deep navy `#0F1A2E` (dark sections/footer)

**Typography:**
- Headings: Playfair Display or Cormorant Garamond (serif)
- Body: Inter or DM Sans (sans-serif)

**Page transitions:**
- Use Framer Motion for subtle page transitions (fade or slide)
- Animate sections on scroll (fade-up, 200ms delay between elements)
- Keep Three.js hero ONLY on homepage — other pages use clean gradient or image headers

**CTA Button Styles:**
- Primary (Gold): "Refer a Client" / "Schedule Consultation"
- Secondary (Navy outline): "Learn More" / "View Services"
- Ghost (text + arrow): "Read the Guide →" / "See Case Studies →"

**Mobile:**
- Mobile-first responsive design
- Hamburger nav on mobile
- Forms should be full-width on mobile
- CTAs should be thumb-friendly (min 48px tap target)

---

### IMPLEMENTATION ORDER

Work through these in order, showing me each file:

1. **app/layout.tsx** — Update global layout with multipage nav + footer components
2. **components/Navbar.tsx** — New multipage navigation with dropdown
3. **components/Footer.tsx** — Expanded footer with all columns
4. **app/page.tsx** — Redesigned homepage (gateway page, not full site)
5. **app/for-cpas/page.tsx** — ★ CPA referral landing page (highest priority)
6. **app/about/page.tsx** — Dr. Jan bio page
7. **app/services/page.tsx** — Services index
8. **app/services/[slug]/page.tsx** — Individual service detail pages
9. **app/case-studies/page.tsx** — Expanded case studies
10. **app/nevada-guide/page.tsx** — SEO content hub
11. **app/contact/page.tsx** — Two-track contact form

Start with layout.tsx and Navbar.tsx, then build the /for-cpas page since that's the money page. Show me each file change as you go.

## PROMPT END
