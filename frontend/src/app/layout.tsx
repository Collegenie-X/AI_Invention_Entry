import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "teensparkai — 아이디어에 불꽃, 설계는 내가",
  description: "AI와 함께하는 청소년 기획 스튜디오. 열린 질문을 따라가며 막연한 아이디어를 설계도로 키워요.",
  openGraph: {
    title: "teensparkai — 아이디어에 불꽃, 설계는 내가",
    description: "열린 질문 하나가 제품의 설계도로 ✦",
    locale: "ko_KR",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#07070a" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
