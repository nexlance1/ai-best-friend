// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'AI Best Friend',
  description: 'Your compassionate AI companion',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
