import { Merriweather, Raleway } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap",
  subsets: ["latin"],
});
const raleway = Raleway({
  weight: ["100", "900"],
  variable: "--font-raleway",
  display: "swap",
  subsets: ["latin"],
});
export const metadata = {
  title: "Sohan's Work",
  description: "My portfolio and thoughts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`} >
        <header className={merriweather.variable}>
          <h1>Title</h1>
          <h2>Header</h2>
        </header>
        {children}
      </body>
    </html>
  );
}
