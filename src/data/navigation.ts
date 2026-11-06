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
        description: "Company background, leadership, and founding in 1986",
      },
      {
        label: "Certifications & Awards",
        href: "/certifications/",
        description: "ISO 9001:2000, Quality Policy, and Udyog Rattan Award",
      },
      {
        label: "Financials",
        href: "/financials/",
        description: "Turnover figures and CRISIL rating certificate",
      },
      {
        label: "Careers",
        href: "/careers/",
        description: "Open opportunities in engineering and projects",
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
        description: "Philips, Bosch, Sartorius, and R. Stahl associations",
      },
      {
        label: "Customers & Consultants",
        href: "/clients/",
        description: "Customer list and approved consultants",
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
