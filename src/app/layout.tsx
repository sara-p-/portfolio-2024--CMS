import React from 'react'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        {/* <InitTheme /> */}
        <link rel='icon' href='/favicon.ico' sizes='32x32' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
      </head>
      <body></body>
    </html>
  )
}
