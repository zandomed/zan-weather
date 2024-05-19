import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ZanWeather',
  description:
    'ZanWeather is a weather app that provides weather information for your location.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="p-16 w-svw h-svh">{children}</main>
      </body>
    </html>
  );
}
