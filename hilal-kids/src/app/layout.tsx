import './globals.css'

export const metadata = {
  title: 'Hilal Kids',
  description: 'Next.js App',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
