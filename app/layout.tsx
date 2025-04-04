"use client"

import { Inter } from "next/font/google";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./app.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
        <body className={inter.className}>
          <Authenticator>
            {children}
          </Authenticator>
        </body>
    </html>
  );
}
