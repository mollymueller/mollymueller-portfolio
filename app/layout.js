import { Bungee, Bungee_Shade, Libre_Baskerville, Open_Sans } from 'next/font/google';
import './globals.css';

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bungee',
  display: 'swap',
});

const bungeeShade = Bungee_Shade({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bungee-shade',
  display: 'swap',
});

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-bodoni',
  display: 'swap',
});

const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Molly Mueller – AI-Empowered, Systems-Obsessed, Data-Driven Product Designer',
  description:
    'Molly Mueller is an AI-empowered, systems-obsessed, data-driven product designer building things that look, feel, and work just right.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bungee.variable} ${bungeeShade.variable} ${libreBaskerville.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
