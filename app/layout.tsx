import '../styles/globals.css'

interface LayoutProps {
  pageTitle?: string
  metaDescription?: string
}

export default function RootLayout({
  children,
  pageTitle,
  metaDescription,
}: {
  children: React.ReactNode
}): Promise<LayoutProps> {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <head />
      <body className="max-w-6xl mx-auto my-8 p-5">{children}</body>
    </html>
  )
}
