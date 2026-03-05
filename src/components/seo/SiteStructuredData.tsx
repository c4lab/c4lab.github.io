import { useEffect } from "react";
import { buildAbsoluteUrl, SEO_BASE_URL } from "../../lib/seo";
import { siteContact } from "../../data/mock/site";

const STRUCTURED_DATA_ID = "site-structured-data";

export function SiteStructuredData() {
  useEffect(() => {
    const payload = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ResearchOrganization",
          "@id": `${SEO_BASE_URL}/#organization`,
          name: "c4Lab",
          url: SEO_BASE_URL,
          logo: buildAbsoluteUrl("/images/logo-192.png"),
          email: `mailto:${siteContact.email}`,
          telephone: siteContact.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: siteContact.addressLines.join(", "),
            addressCountry: "TW"
          },
          parentOrganization: {
            "@type": "CollegeOrUniversity",
            name: "National Taiwan University"
          }
        },
        {
          "@type": "WebSite",
          "@id": `${SEO_BASE_URL}/#website`,
          url: SEO_BASE_URL,
          name: "c4Lab",
          inLanguage: "en"
        }
      ]
    };

    let script = document.head.querySelector<HTMLScriptElement>(`script#${STRUCTURED_DATA_ID}`);
    if (!script) {
      script = document.createElement("script");
      script.id = STRUCTURED_DATA_ID;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(payload);
  }, []);

  return null;
}
