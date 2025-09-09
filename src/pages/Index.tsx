import { 
  CreditCard, 
  PiggyBank, 
  Shield, 
  Clock, 
  Gift, 
  Users,
  CheckCircle,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import SpecialistConsultation from "@/components/SpecialistConsultation";
import Hero3DFinancial from "@/components/Hero3DFinancial";
import { MBGButton } from "@/components/ui/mbg-button";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import heroBackground from "@/assets/hero-bg-professional.jpg";

const Index = () => {
  const { ref: featuresRef, visibleItems: visibleFeatures } = useStaggeredAnimation(4, 150);
  const { ref: testimonialsRef, visibleItems: visibleTestimonials } = useStaggeredAnimation(3, 200);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 overflow-hidden min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75"></div>
        <div className="absolute inset-0 bg-gradient-gold-radial opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
        <Hero3DFinancial className="z-1" />
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 animate-fade-in-up">
              BEM-VINDO(A) À<br />
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                MBG FINANCEIRA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Crédito Simples e Poupança Segura.<br />
              Soluções financeiras sem burocracia para transformar seus planos em realidade.
            </p>
            <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <MBGButton asChild size="xl" className="shadow-gold-glow">
                <a href="https://wa.me/5511978419191?text=Olá! Gostaria de simular um crédito. Poderia me ajudar?" target="_blank" rel="noopener noreferrer">
                  Simule seu Crédito Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </MBGButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4 animate-fade-in-up">Soluções Financeiras ao seu Alcance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              Oferecemos produtos financeiros pensados para facilitar sua vida e realizar seus sonhos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="animate-slide-in-left">
              <ServiceCard
                icon={CreditCard}
                title="Crédito Facilitado"
                description="Acesse o crédito que você precisa com pagamentos semanais flexíveis e condições justas. Processo rápido e sem complicação."
                href="/credito-pessoal"
                buttonText="Saiba Mais"
              />
            </div>
            <div className="animate-slide-in-right">
              <ServiceCard
                icon={PiggyBank}
                title="Poupança Especial"
                description="Multiplique seus lucros. Faça seu dinheiro render com total segurança e garantia. Rentabilidade superior à poupança tradicional."
                href="/poupanca-especial"
                buttonText="Saiba Mais"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="diferenciais" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4 animate-fade-in-up">Vantagens que só a MBG Oferece</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              Descubra por que somos a escolha certa para suas necessidades financeiras.
            </p>
          </div>
          
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`${visibleFeatures.includes(0) ? 'animate-scale-in animate-hover-lift' : 'opacity-0'}`}>
              <FeatureCard
                icon={CheckCircle}
                title="Sem Burocracia"
                description="Processo simplificado e ágil. Menos papelada, mais agilidade para você."
              />
            </div>
            <div className={`${visibleFeatures.includes(1) ? 'animate-scale-in animate-hover-lift' : 'opacity-0'}`}>
              <FeatureCard
                icon={Clock}
                title="Pagamento Semanal Flexível"
                description="Parcelas semanais que se adaptam ao seu orçamento e fluxo de renda."
              />
            </div>
            <div className={`${visibleFeatures.includes(2) ? 'animate-scale-in animate-hover-lift' : 'opacity-0'}`}>
              <FeatureCard
                icon={Gift}
                title="Programa de Vantagens Exclusivo"
                description="Sorteios mensais e benefícios exclusivos para nossos clientes fiéis."
              />
            </div>
            <div className={`${visibleFeatures.includes(3) ? 'animate-scale-in animate-hover-lift' : 'opacity-0'}`}>
              <FeatureCard
                icon={Shield}
                title="Segurança e Confiança"
                description="Operações 100% seguras com total transparência em todas as condições."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4 animate-fade-in-up">A Confiança dos Nossos Clientes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              Veja o que nossos clientes dizem sobre os nossos serviços e resultados.
            </p>
          </div>
          
          <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${visibleTestimonials.includes(0) ? 'animate-fade-in-up animate-hover-lift' : 'opacity-0'}`}>
              <TestimonialCard
                name="Maria Silva"
                location="São Paulo, SP"
                testimonial="A MBG me ajudou em um momento muito difícil. O processo foi rápido e sem burocracia. Recomendo de olhos fechados!"
                rating={5}
              />
            </div>
            <div className={`${visibleTestimonials.includes(1) ? 'animate-fade-in-up animate-hover-lift' : 'opacity-0'}`}>
              <TestimonialCard
                name="João Santos"
                location="Guarulhos, SP"
                testimonial="Excelente atendimento e condições justas. Com a poupança especial consegui multiplicar minha reserva de emergência."
                rating={5}
              />
            </div>
            <div className={`${visibleTestimonials.includes(2) ? 'animate-fade-in-up animate-hover-lift' : 'opacity-0'}`}>
              <TestimonialCard
                name="Ana Costa"
                location="Osasco, SP"
                testimonial="Transparência total e pagamentos semanais que cabem no meu orçamento. A MBG realmente pensa no cliente."
                rating={5}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialist Consultation Section */}
      <SpecialistConsultation />

      {/* CTA Final Section */}
      <section id="cta-final" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-gold-radial opacity-10"></div>
        <div className="container relative z-10 text-center">
          <h2 className="mb-6 animate-fade-in-up">Pronto para começar?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Fale com um de nossos especialistas e descubra a melhor solução para você. 
            Estamos aqui para transformar seus planos em realidade.
          </p>
          <div className="animate-fade-in-up">
            <MBGButton asChild size="xl" className="shadow-gold-glow">
              <a href="https://wa.me/5511978419191" target="_blank" rel="noopener noreferrer">
                Fale Conosco pelo WhatsApp
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </MBGButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
