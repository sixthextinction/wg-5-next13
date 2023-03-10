import Navbar from "../components/Navbar";

/*
The root layout replaces the pages/_app.tsx and pages/_document.tsx files.
*/
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        
        <main>{children}</main>
      </body>
    </html>
  );
}
