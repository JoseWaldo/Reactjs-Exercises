import Footer from "../components/footer";
import Header from "../components/header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="min-h-screen py-4 flex flex-col items-center gap-2">
      <Header />
      <section className="flex-1 w-3/4 max-w-5xl bg-base-200 rounded-lg py-4 pb-8">
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
