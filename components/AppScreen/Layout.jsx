import Navbar from "./Navbar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Topbar />
    </>
  );
}
