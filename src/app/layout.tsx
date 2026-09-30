import "./globals.css";

export const metadata = {
  title: "SV TRADERS | Premium Global Agro Exports",
  description: "Connecting farmers, growing together. Exporting high-quality onions, potatoes, coconuts, and garlic.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  );
}