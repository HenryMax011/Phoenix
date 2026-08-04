"use client";

import { useEffect } from "react";

const GTM_ID = "GTM-WCZR6FK7";
const ADS_ID = "AW-18368960208";

/**
 * Injeta GTM + Google Ads no client (não derruba SSR na Hostinger).
 */
export function GoogleTags() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.__phoenixGoogleTagsLoaded) return;
    window.__phoenixGoogleTagsLoaded = true;

    window.dataLayer = window.dataLayer || [];

    // --- Google Tag Manager ---
    const gtmInline = document.createElement("script");
    gtmInline.text = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;
    document.head.appendChild(gtmInline);

    // --- Google Ads (gtag.js) ---
    const adsSrc = document.createElement("script");
    adsSrc.async = true;
    adsSrc.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`;
    document.head.appendChild(adsSrc);

    const adsInit = document.createElement("script");
    adsInit.text = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ADS_ID}');`;
    document.head.appendChild(adsInit);
  }, []);

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}

declare global {
  interface Window {
    dataLayer: unknown[];
    __phoenixGoogleTagsLoaded?: boolean;
  }
}
