import Navigation from "../../components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html> 
  );
}
