import "./globals.css";
import { Martian_Mono } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./component/Navbar";

export const metadata = {
  title: "HRIS Biometrics",
  description: "HRIS with Biometrics Web Application",
};
const font = Martian_Mono ({ subsets: ["latin"], weight: ["200","400","500","600", "700"] });

const RootLayout = ({ children }) => {

  return (
    <html lang="en">
      <body className={`${font.className}`}>
      <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
