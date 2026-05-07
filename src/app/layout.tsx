import type { Metadata } from "next";
import { Providers } from "../providers";

export const metadata: Metadata = {
  title: "OpenLight Studio | 照亮代码的未来",
  description: "OpenLight Studio - 自研操作系统内核 BrightS, D Struct Language, FH Clac",
  keywords: "操作系统, 编程语言, 数据可视化, 开源项目, OpenLight Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}