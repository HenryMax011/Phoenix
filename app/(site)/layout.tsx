import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactChatFloat } from "@/components/ContactChat";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ContactChatFloat />
    </div>
  );
}
