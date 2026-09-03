import type { Metadata } from "next";
import "./globals.css";

export function generateMetadata(): Metadata {
  return {
    title: "質屋かんてい局 城陽店｜OPEN前限定 出張買取10%UP",
    description: "2026年12月、質屋かんてい局 城陽店がOPEN予定。OPEN前限定で出張買取を強化中。12月20日まで買取価格10%UP。ブランドバッグ・時計・ジュエリー・金・自動車などお気軽にご相談ください。",
    openGraph: {
      title: "質屋かんてい局 城陽店｜出張買取10%UP",
      description: "OPEN前の今が売りどき！12月20日まで出張買取の買取価格10%UP。",
      type: "website",
      locale: "ja_JP",
      images: [],
    },
    twitter: {
      card: "summary_large_image",
      title: "質屋かんてい局 城陽店｜出張買取10%UP",
      description: "OPEN前限定。12月20日まで出張買取の買取価格10%UP。",
      images: [],
    },
    icons: { icon: "/favicon.png", shortcut: "/favicon.png", apple: "/favicon.png" },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MG693D6');` }} />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe title="Google Tag Manager" src="https://www.googletagmanager.com/ns.html?id=GTM-MG693D6" height="0" width="0" style={{ display: "none", visibility: "hidden" }} /></noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
