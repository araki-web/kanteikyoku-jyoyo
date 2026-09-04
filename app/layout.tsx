import type { Metadata } from "next";
import "./globals.css";

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL("https://li-lu.libertynet.jp"),
    title: "質屋かんてい局 城陽店｜OPEN前限定 出張買取10%UP",
    description: "2026年12月、質屋かんてい局 城陽店がOPEN予定。OPEN前限定で出張買取を強化中。12月20日まで買取価格10%UP。ブランドバッグ・時計・ジュエリー・金・自動車などお気軽にご相談ください。",
    alternates: { canonical: "/jyoyo-pre-lp/" },
    robots: { index: true, follow: true },
    openGraph: {
      title: "質屋かんてい局 城陽店｜出張買取10%UP",
      description: "OPEN前の今が売りどき！12月20日まで出張買取の買取価格10%UP。",
      type: "website",
      locale: "ja_JP",
      url: "/jyoyo-pre-lp/",
      images: [{
        url: "/jyoyo-pre-lp/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "質屋かんてい局 城陽店 2026年12月OPEN予定 出張買取の買取価格10%UP",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: "質屋かんてい局 城陽店｜出張買取10%UP",
      description: "OPEN前限定。12月20日まで出張買取の買取価格10%UP。",
      images: ["/jyoyo-pre-lp/images/og.jpg"],
    },
    icons: { icon: "/favicon.png", shortcut: "/favicon.png", apple: "/favicon.png" },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <head>
        <script src="/js/results-carousel.js" defer />
        {/* Google Tag Manager */}
        <script src="/js/main.js" defer />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe className="gtm-noscript" title="Google Tag Manager" src="https://www.googletagmanager.com/ns.html?id=GTM-MG693D6" height="0" width="0" /></noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
