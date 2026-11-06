export interface NavItemDirect {
  label: string;
  href: string;
  description?: string;
}

export interface NavItemGroup {
  label: string;
  children: readonly NavItemDirect[];
}

export type NavItem = NavItemDirect | NavItemGroup;

export function isNavGroup(item: NavItem): item is NavItemGroup {
  return "children" in item && Array.isArray(item.children);
}

/**
 * Grouped navigation structure for desktop header dropdowns.
 * Contact is intentionally omitted since the dedicated Enquire button routes to /contact/.
 */
export const headerNav: readonly NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    children: [
      {
        label: "About Us",
        href: "/about/",
        description: "34+ years turnkey engineering legacy & leadership",
      },
      {
        label: "Certifications & Awards",
        href: "/certifications/",
        description: "ISO 9001:2000, Quality Policy & Udyog Rattan Award",
      },
      {
        label: "Audited Financials",
        href: "/financials/",
        description: "Turnover records & CRISIL SE 2B rating certificate",
      },
      {
        label: "Careers",
        href: "/careers/",
        description: "Engineering vacancies in projects, CCTV & automation",
      },
    ],
  },
  { label: "Services", href: "/services/" },
  { label: "Industries", href: "/industries/" },
  { label: "Projects", href: "/projects/" },
  {
    label: "Partners",
    children: [
      {
        label: "Our Principals",
        href: "/principals/",
        description: "Philips, Bosch, Sartorius & R. Stahl associations",
      },
      {
        label: "Clients & Consultants",
        href: "/clients/",
        description: "IOCL, Reliance, BHEL & consultant approvals",
      },
    ],
  },
] as const;

/**
 * Flat list of all main site routes for footer, sitemap and search indexing.
 */
export const allRoutesNav: readonly NavItemDirect[] = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/industries/", label: "Industries" },
  { href: "/projects/", label: "Projects" },
  { href: "/principals/", label: "Principals" },
  { href: "/clients/", label: "Clients" },
  { href: "/certifications/", label: "Certifications" },
  { href: "/financials/", label: "Financials" },
  { href: "/careers/", label: "Careers" },
  { href: "/contact/", label: "Contact" },
] as const;

// Backward-compatible export for existing components
export const mainNav = allRoutesNav;

export const complianceNav = [
  { href: "/certifications/", label: "ISO & Awards" },
  { href: "/financials/", label: "Financials & CRISIL" },
  { href: "/careers/", label: "Careers & Recruitment" },
] as const;
