import { siteConfig } from "@/lib/site";

/** Dados estruturados para Google (Organization + WebSite) */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/brand/phoenix-icon.png`,
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: siteConfig.phones,
        address: {
          "@type": "PostalAddress",
          streetAddress: "R. Cachoeira Escura — Jardim Triana",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          postalCode: "03554-070",
          addressCountry: "BR",
        },
        sameAs: Object.values(siteConfig.social).filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "pt-BR",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
