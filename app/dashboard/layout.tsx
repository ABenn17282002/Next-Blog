import React, { ReactNode } from 'react'
import { Providers } from "../providers";

export default function DashboardLayout({
  children, // will be a page or nested layout
  team,
  analytics,
}: {
  children: React.ReactNode;
  team: ReactNode
  analytics: ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      <Providers>{children}</Providers>
      <Providers>{team}</Providers>
      <Providers>{analytics}</Providers>
    </section>
  );
}