import { Cormorant_Garamond, Outfit } from 'next/font/google';

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '600'],
  display: 'swap',
  variable: '--font-cormorant',
});

export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

