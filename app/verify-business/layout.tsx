import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Verify Any Home Services Business in Seattle, WA | Mad Hatter Chimney Sweep",
  description: "Free tool to check for fraud indicators before hiring a home services contractor in Seattle. Mad Hatter Chimney Sweep is fully licensed and verified. Call (206) 274-6409.",
}

export default function VerifyBusinessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
