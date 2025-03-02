import type { Metadata } from "next";
import RootLayoutClient from "./_rootLayout"; // Import client layout

export const metadata: Metadata = {
  title: "Rajvardhan Singh | Portfolio",
  description: "Full-Stack Developer | MERN Stack Enthusiast",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
