import { 
  Phone, 
  Shield, 
  TrendingUp, 
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  Award
} from "lucide-react";
import { MBGButton } from "./ui/mbg-button";

const SpecialistConsultation = () => {
  const advantages = [
    {
      icon: Users,
      title: "Análise Personalizada",
      description: "Nossos especialistas analisam seu perfil financeiro para oferecer as melhores condições."
    },
    {
      icon: TrendingUp,
      title: "Melhores Taxas",
      description: "Acesso a taxas exclusivas e condições especiais para nossos clientes."
    },
    {
      icon: Shield,
      title: "Atendimento Exclusivo",
      description: "Suporte dedicado durante todo o processo, do início ao final."
    },
    {
      icon: Clock,
      title: "Resposta Rápida",
      description: "Análise e resposta em até 24 horas úteis."
    },
    {
      icon: Award,
      title: "Expertise Comprovada",
      description: "Mais de 10 anos de experiência no mercado financeiro."
    },
    {
      icon: CheckCircle,
      title: "Processo Simplificado",
      description: "Menos burocracia, mais agilidade para você."
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de agendar uma consultoria financeira personalizada com um especialista da MBG. Podem me ajudar com as melhores condições para meu perfil?"
    );
    window.open(`https://wa.me/5511978419191?text=${message}`, '_blank');
  };

  return (
    <section id="consultoria" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-gold-radial opacity-5"></div>
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-6 animate-fade-in-up">
            Consultoria Financeira Personalizada
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-stagger-1">
            Nossos especialistas analisam seu perfil e oferecem as melhores condições 
            do mercado. Atendimento exclusivo e soluções sob medida para você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Advantages */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div 
                  key={advantage.title}
                  className={`bg-card/50 border border-border rounded-lg p-6 animate-scale-in animate-hover-lift animate-stagger-${(index % 4) + 1}`}
                >
                  <div className="w-12 h-12 bg-gradient-gold-radial rounded-full flex items-center justify-center mb-4 animate-float">
                    <advantage.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-elegant animate-slide-in-right">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-gold-radial rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gold">
                <Phone className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Fale com um Especialista
              </h3>
              <p className="text-muted-foreground mb-6">
                Agende sua consultoria gratuita e descubra as melhores opções 
                para seu perfil financeiro.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-sm">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Consultoria 100% gratuita</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Análise completa do seu perfil</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Proposta personalizada</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Condições exclusivas</span>
              </div>
            </div>

            <MBGButton 
              onClick={handleWhatsAppClick}
              size="xl" 
              className="w-full shadow-gold-glow animate-bounce-in animate-hover-glow"
            >
              Falar com Especialista
              <ArrowRight className="ml-2 w-5 h-5" />
            </MBGButton>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Resposta em até 24h úteis • Atendimento de segunda a sexta
            </p>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in-up animate-stagger-1">
            <div className="text-3xl font-bold text-primary mb-2">+10</div>
            <p className="text-muted-foreground">Anos de Experiência</p>
          </div>
          <div className="animate-fade-in-up animate-stagger-2">
            <div className="text-3xl font-bold text-primary mb-2">5.000+</div>
            <p className="text-muted-foreground">Clientes Atendidos</p>
          </div>
          <div className="animate-fade-in-up animate-stagger-3">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <p className="text-muted-foreground">Satisfação dos Clientes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialistConsultation;