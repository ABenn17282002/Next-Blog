import React, { ReactNode } from "react";
import { Providers } from "../providers";
// auth.jsのimport
import { checkUserRole } from "../lib/auth";

export default function DashboardLayout({
  children, // will be a page or nested layout
  team,
  analytics,
  user,
  admin,
}: {
  children: React.ReactNode;
  team: ReactNode;
  analytics: ReactNode;
  user: React.ReactNode;
  admin: React.ReactNode;
}) {
  const role = checkUserRole();
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      {role === "admin" ? admin : user}
      <Providers>{children}</Providers>
      <Providers>{team}</Providers>
      <Providers>{analytics}</Providers>
    </section>
  );
}
