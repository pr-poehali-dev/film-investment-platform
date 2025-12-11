import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import MainContent from "@/components/landing/MainContent";
import AuditForm from "@/components/landing/AuditForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const scrollToForm = () => {
    document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <HeroSection scrollToForm={scrollToForm} />
      <MainContent scrollToForm={scrollToForm} />
      <AuditForm />
      <Footer />
    </div>
  );
};

export default Index;
