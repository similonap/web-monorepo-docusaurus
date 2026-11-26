import './globals.css';

export default function RootLayout({children}: LayoutProps<"/">) {
  return <html lang="nl"><body>{children}</body></html>;
}
