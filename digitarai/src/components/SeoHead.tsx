import { useEffect } from "react";

interface SeoHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: "website" | "article";
  faqSchema?: { question: string; answer: string }[];
  breadcrumbs?: { name: string; url: string }[];
}

export default function SeoHead({
  title,
  description,
  keywords,
  canonicalUrl = window.location.href,
  ogType = "website",
  faqSchema,
  breadcrumbs,
}: SeoHeadProps) {
  
  useEffect(() => {
    // 1. Set Title exactly as passed from the page
    document.title = title;

    // 2. Set or Update Meta Description
    updateMeta("name", "description", description);

    // 3. Set or Update Meta Keywords (only if keywords are provided)
    if (keywords) {
      updateMeta("name", "keywords", keywords);
    } else {
      // Optional: Remove keywords tag if navigating to a page without them
      const existingKeywords = document.querySelector(`meta[name="keywords"]`);
      if (existingKeywords) {
        existingKeywords.remove();
      }
    }

    // 3. Open Graph Tags
    updateMeta("property", "og:title", `${title} | DigitarAI`);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:type", ogType);
    updateMeta("property", "og:url", canonicalUrl);
    updateMeta("property", "og:image", "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&h=630&q=80"); // fallback premium visual
    updateMeta("property", "og:site_name", "DigitarAI");

    // 4. Twitter Card Tags
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", title);
    updateMeta("name", "twitter:description", description);
    updateMeta("name", "twitter:image", "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&h=630&q=80");

    // 5. Canonical Link
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // 6. JSON-LD Structured schema injection (Breadcrumb and FAQ List)
    const jsonLdScripts: HTMLScriptElement[] = [];

    // Base Corporate Organization Schema
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "DigitarAI",
      "url": "https://digitarai.ai",
      "logo": "https://digitarai.ai/logo.png",
      "tagline": "Advanced AI Marketing That Grows Your Business Faster.",
      "sameAs": [
        "https://linkedin.com/company/digitarai",
        "https://twitter.com/digitarai",
        "https://instagram.com/digitarai"
      ]
    };
    injectSchema(orgSchema, "org-schema");

    // Breadcrumb Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbListSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((b, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": b.name,
          "item": b.url,
        })),
      };
      injectSchema(breadcrumbListSchema, "breadcrumb-schema");
    } else {
      removeSchema("breadcrumb-schema");
    }

    // FAQ Schema
    if (faqSchema && faqSchema.length > 0) {
      const faqListSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqSchema.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      };
      injectSchema(faqListSchema, "faq-schema");
    } else {
      removeSchema("faq-schema");
    }

    return () => {
      // Cleanup dynamics on unmount (standard clean practice for client routing)
      removeSchema("breadcrumb-schema");
      removeSchema("faq-schema");
    };
  }, [title, description, canonicalUrl, ogType, faqSchema, breadcrumbs]);

  // Helper inside effect
  function updateMeta(attrName: string, attrVal: string, content: string) {
    let meta = document.querySelector(`meta[${attrName}='${attrVal}']`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute(attrName, attrVal);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  }

  function injectSchema(schemaObj: object, elementId: string) {
    removeSchema(elementId);
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = elementId;
    script.innerHTML = JSON.stringify(schemaObj);
    document.head.appendChild(script);
  }

  function removeSchema(elementId: string) {
    const script = document.getElementById(elementId);
    if (script) {
      script.remove();
    }
  }

  return null; // Side effect strictly inside document head
}
