import Providers from "./providers"

export const metadata = {
  title: "Admin | Mad Hatter Chimney Sweep",
  robots: "noindex, nofollow",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Providers>{children}</Providers>
}
