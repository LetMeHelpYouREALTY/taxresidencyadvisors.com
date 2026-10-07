import { NextResponse } from "next/server";
import { HOURS_DISPLAY, NAP_SINGLE_LINE, PHONE_DISPLAY, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = 86400;

const LLMS_CONTENT = `# Tax Residency Advisors

Tax Residency Advisors (TRA) provides tax residency real estate planning and CA-to-NV relocation services for high-net-worth families, CPAs, and tax professionals. Dr. Jan Duffy is the Las Vegas real estate expert trusted by CPAs for Nevada domicile and relocation. Office: ${NAP_SINGLE_LINE}. Hours: ${HOURS_DISPLAY}. Phone: ${PHONE_DISPLAY}.

## Topics

- Nevada tax residency real estate
- CPA referral program for Nevada relocation
- California to Nevada (CA-to-NV) relocation
- Domicile strategy and documentation
- Family office real estate consulting
- Multi-state real estate advisory

## URLs

${SITE_URL}
${SITE_URL}/for-cpas
${SITE_URL}/nevada-guide
${SITE_URL}/services
${SITE_URL}/services/tax-residency-planning
${SITE_URL}/services/ca-to-nv-relocation
${SITE_URL}/about
${SITE_URL}/resources
${SITE_URL}/contact
${SITE_URL}/sitemap.xml
`;

export function GET() {
  return new NextResponse(LLMS_CONTENT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
