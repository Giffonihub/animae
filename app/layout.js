export const metadata = {
  title: 'ANIMAE',
  description: 'Custodi dell’identità emozionale nel Web3',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}