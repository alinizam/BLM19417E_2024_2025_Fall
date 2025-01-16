import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <main className="p-4">
      <Navbar />
      <div className="mt-8">{children}</div>
    </main>
  );
}
