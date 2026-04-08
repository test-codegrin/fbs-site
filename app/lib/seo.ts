import type { Metadata } from "next";

export type PublicPagePath =
  | "/"
  | "/about"
  | "/contact"
  | "/know-you"
  | "/privacy"
  | "/services/printing-products"
  | "/services/direct-mailing"
  | "/services/signage"
  | "/services/web-design"
  | "/services/seo";

type BreadcrumbItem = {
  name: string;
  path: PublicPagePath;
};

type PageSeoConfig = {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  schemaType: string;
  breadcrumbs: BreadcrumbItem[];
  serviceType?: string;
};

export const siteConfig = {
  name: "FBS Prints",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fbsprints.com",
  defaultTitle: "FBS Prints",
  defaultDescription:
    "FBS Prints provides printing products, signage, direct mailing, web design, and SEO services for businesses that want to grow with bold branding and dependable execution.",
  defaultKeywords: [
    "FBS Prints",
    "printing services",
    "signage services",
    "direct mailing",
    "web design",
    "SEO services",
    "Illinois printing company",
  ],
  ogImage: "/images/home/printing-branding-hero.webp",
  locale: "en_US",
  phone: "+1-855-222-1133",
  email: "info@fbsprints.com",
  serviceAreas: [
    { city: "Naperville", stateCode: "IL" },
    { city: "Schaumburg", stateCode: "IL" },
  ],
  sameAs: [
    "https://twitter.com",
    "https://linkedin.com",
    "https://instagram.com",
    "https://facebook.com",
    "https://dribbble.com",
    "https://behance.net",
  ],
} as const;

export const supportedHosts = [
  "www.fbsprints.com",
  "fbsprints.com",
  "www.fbssigns.com",
  "fbssigns.com",
] as const;

const pageSeo: Record<PublicPagePath, PageSeoConfig> = {
  "/": {
    title: "FBS Prints | Printing, Signage, Web Design & SEO Services",
    description:
      "Explore FBS Prints for printing products, signage, direct mailing, web design, and SEO services built to help brands stand out and grow online.",
    keywords: [
      "printing products",
      "business signage",
      "direct mailing services",
      "web design company",
      "SEO agency",
      "branding services",
    ],
    image: "/images/home/printing-branding-hero.webp",
    schemaType: "WebPage",
    breadcrumbs: [{ name: "Home", path: "/" }],
  },
  "/about": {
    title: "About FBS Prints | Printing & Branding Experts",
    description:
      "Learn more about FBS Prints, our customer-first approach, and the printing, signage, and branding services we provide for businesses across industries.",
    keywords: [
      "about FBS Prints",
      "printing company Illinois",
      "branding experts",
      "signage company",
      "custom printing services",
    ],
    image: "/images/about/about-fbs-prints-team.webp",
    schemaType: "AboutPage",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
    ],
  },
  "/contact": {
    title: "Contact FBS Prints | Request Printing, Signage & Marketing Services",
    description:
      "Contact FBS Prints for printing, signage, direct mailing, web design, and SEO support. Reach our team for quotes, questions, and project consultations.",
    keywords: [
      "contact FBS Prints",
      "printing quote",
      "signage consultation",
      "marketing services contact",
      "Illinois print shop contact",
    ],
    image: "/images/contact/contact-support-hero.webp",
    schemaType: "ContactPage",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Contact Us", path: "/contact" },
    ],
  },
  "/know-you": {
    title: "Know Your Signs | FBS Prints Signage Gallery",
    description:
      "Browse the FBS Prints signage gallery to explore business signs, awnings, vehicle wraps, illuminated letters, and more visual branding examples.",
    keywords: [
      "sign gallery",
      "business signage gallery",
      "vehicle wraps",
      "awning signs",
      "channel letters",
      "sign design inspiration",
    ],
    image: "/images/know-your-signs/know-your-signs-hero.webp",
    schemaType: "CollectionPage",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Know Your Signs", path: "/know-you" },
    ],
  },
  "/privacy": {
    title: "Privacy Policy | FBS Prints",
    description:
      "Read the FBS Prints privacy policy to understand how we handle quote requests, contact details, website usage data, and communication related to your projects.",
    keywords: [
      "privacy policy",
      "FBS Prints privacy",
      "quote request privacy",
      "website privacy policy",
      "data handling policy",
    ],
    image: "/images/brand/fbs-prints-logo.webp",
    schemaType: "WebPage",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Privacy Policy", path: "/privacy" },
    ],
  },
  "/services/printing-products": {
    title: "Printing Products | Custom Business Printing by FBS Prints",
    description:
      "Discover FBS Prints printing products including business cards, brochures, banners, calendars, menus, and more custom print solutions.",
    keywords: [
      "printing products",
      "business cards printing",
      "brochure printing",
      "banner printing",
      "custom print products",
    ],
    image: "/images/services/printing/hotel-menu-printing.webp",
    schemaType: "WebPage",
    serviceType: "Printing Products",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Printing Product", path: "/services/printing-products" },
    ],
  },
  "/services/direct-mailing": {
    title: "Direct Mailing Services | Design, Print & Mail with FBS Prints",
    description:
      "Use FBS Prints direct mailing services for campaign design, print production, bundling, and delivery support that helps your message reach customers on time.",
    keywords: [
      "direct mailing services",
      "EDDM marketing",
      "mail campaign printing",
      "postcard mailing",
      "direct mail company",
    ],
    image: "/images/services/direct-mail/direct-mail-marketing.webp",
    schemaType: "WebPage",
    serviceType: "Direct Mailing",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Direct Mailing", path: "/services/direct-mailing" },
    ],
  },
  "/services/signage": {
    title: "Signage Services | Business Signs, Wraps & Displays by FBS Prints",
    description:
      "View FBS Prints signage services for banners, LED signs, monument signs, pylon signs, vehicle graphics, window lettering, and more custom displays.",
    keywords: [
      "signage services",
      "business signs",
      "vehicle wraps",
      "LED signs",
      "window lettering",
      "monument signs",
    ],
    image: "/images/services/signage/signage-services-hero.webp",
    schemaType: "WebPage",
    serviceType: "Signage",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Signage", path: "/services/signage" },
    ],
  },
  "/services/web-design": {
    title: "Web Design Services | Responsive Business Websites by FBS Prints",
    description:
      "FBS Prints creates responsive, conversion-focused web design solutions that help businesses build stronger online visibility and customer engagement.",
    keywords: [
      "web design services",
      "responsive website design",
      "business website design",
      "conversion focused websites",
      "digital solutions",
    ],
    image: "/images/services/web-design/business-website-design.webp",
    schemaType: "WebPage",
    serviceType: "Web Design",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Web Design", path: "/services/web-design" },
    ],
  },
  "/services/seo": {
    title: "SEO Services | Technical, Local & On-Page SEO by FBS Prints",
    description:
      "Grow search visibility with FBS Prints SEO services including audits, technical SEO, local SEO, content optimization, link building, and reporting.",
    keywords: [
      "SEO services",
      "technical SEO",
      "local SEO",
      "on-page SEO",
      "SEO audit",
      "link building",
    ],
    image: "/images/services/seo/seo-services-hero.webp",
    schemaType: "WebPage",
    serviceType: "SEO",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "SEO", path: "/services/seo" },
    ],
  },
};

export const publicPagePaths = Object.keys(pageSeo) as PublicPagePath[];

export function resolveBaseUrl(host: string | null | undefined, protocol?: string | null) {
  const normalizedHost = host?.split(",")[0]?.trim().toLowerCase();

  if (!normalizedHost) {
    return siteConfig.url;
  }

  const isLocalHost =
    normalizedHost.startsWith("localhost:") ||
    normalizedHost.startsWith("127.0.0.1:");

  if (!isLocalHost && !supportedHosts.includes(normalizedHost as (typeof supportedHosts)[number])) {
    return siteConfig.url;
  }

  const normalizedProtocol =
    protocol === "http" || protocol === "https"
      ? protocol
      : isLocalHost
        ? "http"
        : "https";

  return `${normalizedProtocol}://${normalizedHost}`;
}

export function absoluteUrl(path = "", baseUrl = siteConfig.url) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, baseUrl).toString();
}

export function buildPageMetadata(path: PublicPagePath, baseUrl = siteConfig.url): Metadata {
  const page = pageSeo[path];
  const canonical = absoluteUrl(path, baseUrl);
  const image = absoluteUrl(page.image, baseUrl);

  return {
    title: page.title,
    description: page.description,
    keywords: [...siteConfig.defaultKeywords, ...page.keywords],
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title: page.title,
      description: page.description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image],
    },
  };
}

export function getGlobalSchemas(baseUrl = siteConfig.url) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${absoluteUrl("/", baseUrl)}#organization`,
      name: siteConfig.name,
      url: absoluteUrl("/", baseUrl),
      logo: absoluteUrl("/images/brand/fbs-prints-logo.webp", baseUrl),
      image: absoluteUrl(siteConfig.ogImage, baseUrl),
      email: siteConfig.email,
      telephone: siteConfig.phone,
      sameAs: siteConfig.sameAs,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: siteConfig.phone,
          email: siteConfig.email,
          areaServed: siteConfig.serviceAreas.map(
            (area) => `${area.city}, ${area.stateCode}`,
          ),
          availableLanguage: "en",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressRegion: "Illinois",
        addressCountry: "US",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${absoluteUrl("/", baseUrl)}#website`,
      name: siteConfig.name,
      url: absoluteUrl("/", baseUrl),
      description: siteConfig.defaultDescription,
      publisher: {
        "@id": `${absoluteUrl("/", baseUrl)}#organization`,
      },
      inLanguage: "en-US",
    },
  ];
}

export function getRouteSchemas(path: PublicPagePath, baseUrl = siteConfig.url) {
  const page = pageSeo[path];
  const url = absoluteUrl(path, baseUrl);
  const pageId = `${url}#webpage`;
  const breadcrumbId = `${url}#breadcrumb`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": breadcrumbId,
    itemListElement: page.breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path, baseUrl),
    })),
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": page.schemaType,
    "@id": pageId,
    name: page.title,
    description: page.description,
    url,
    inLanguage: "en-US",
    isPartOf: {
      "@id": `${absoluteUrl("/", baseUrl)}#website`,
    },
    about: {
      "@id": `${absoluteUrl("/", baseUrl)}#organization`,
    },
    breadcrumb: {
      "@id": breadcrumbId,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(page.image, baseUrl),
    },
  };

  if (!page.serviceType) {
    return [breadcrumbSchema, pageSchema];
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: page.serviceType,
    serviceType: page.serviceType,
    description: page.description,
    url,
    image: absoluteUrl(page.image, baseUrl),
    provider: {
      "@id": `${absoluteUrl("/", baseUrl)}#organization`,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area.city,
    })),
  };

  return [breadcrumbSchema, pageSchema, serviceSchema];
}
