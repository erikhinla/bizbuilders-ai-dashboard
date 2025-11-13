'use client';

import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const getBrandColor = () => {
    if (pathname.includes('bizbuilders')) return 'bg-gradient-to-r from-amber-50 to-white';
    if (pathname.includes('bizbot')) return 'bg-gradient-to-r from-emerald-50 to-white';
    return 'bg-gradient-to-r from-slate-50 to-white';
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${getBrandColor()} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
