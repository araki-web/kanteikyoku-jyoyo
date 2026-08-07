import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const ogImage = `${protocol}://${host}/og.png`;

  return {
    title: "質屋かんてい局 城陽店｜OPEN前限定 出張買取10%UP",
    description: "2026年12月1日、質屋かんてい局 城陽店がOPEN予定。OPEN前限定で出張買取を強化中。11月30日まで買取価格10%UP。ブランドバッグ・時計・ジュエリー・金・プラチナなどお気軽にご相談ください。",
    openGraph: {
      title: "質屋かんてい局 城陽店｜出張買取10%UP",
      description: "OPEN前の今が売りどき！11月30日まで出張買取の買取価格10%UP。",
      type: "website",
      locale: "ja_JP",
      images: [{ url: ogImage, width: 1731, height: 909, alt: "質屋かんてい局 城陽店 OPEN前限定 出張買取10%UP" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "質屋かんてい局 城陽店｜出張買取10%UP",
      description: "OPEN前限定。11月30日まで出張買取の買取価格10%UP。",
      images: [ogImage],
    },
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
