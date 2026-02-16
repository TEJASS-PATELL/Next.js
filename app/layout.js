import Navigation from "./Navigation";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navigation />
        {children}
      </body>
    </html> 
  );
}
