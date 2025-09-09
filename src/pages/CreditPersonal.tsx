import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import FeatureCard from "../components/FeatureCard";
import ServiceCard from "../components/ServiceCard";
import SpecialistConsultation from "../components/SpecialistConsultation";
import { Calculator, CheckCircle, DollarSign, Clock, FileText, Users, MapPin } from "lucide-react";

const CreditPersonal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageBanner 
        title="Crédito Pessoal Rápido e sem Burocracia"
        subtitle="O impulso que você precisa, com as condições que você merece"
      />

      <main>
        {/* Como Funciona */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Como Funciona
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Processo simples e transparente em apenas 3 etapas
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={Calculator}
                title="1. Simulação Online"
                description="Faça sua simulação rapidamente e descubra as melhores condições para seu perfil."
              />
              <FeatureCard
                icon={CheckCircle}
                title="2. Análise Rápida"
                description="Nossa equipe analisa seu perfil em até 24 horas úteis com total segurança."
              />
              <FeatureCard
                icon={DollarSign}
                title="3. Dinheiro na Conta"
                description="Aprovado? O valor é depositado diretamente em sua conta de forma rápida e segura."
              />
            </div>
          </div>
        </section>

        {/* Condições */}
        <section className="py-20 bg-secondary/5">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Nossas Condições
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transparência total e condições justas para você
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-lg p-8 shadow-elegant text-center hover:shadow-gold-glow transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-gold-radial rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gold">
                  <DollarSign className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Condições Justas</h3>
                <p className="text-lg font-semibold text-primary mb-2">Valores</p>
                <p className="text-muted-foreground">Transparentes</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 shadow-elegant text-center hover:shadow-gold-glow transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-gold-radial rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gold">
                  <Clock className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Pagamento Flexível</h3>
                <p className="text-lg font-semibold text-primary mb-2">Pagamentos</p>
                <p className="text-muted-foreground">Semanais</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 shadow-elegant text-center hover:shadow-gold-glow transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-gold-radial rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gold">
                  <Calculator className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Valores</h3>
                <p className="text-lg font-semibold text-primary mb-2">R$ 1.000</p>
                <p className="text-muted-foreground">até R$ 5.000</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pré-Requisitos */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Pré-Requisitos
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Documentação necessária para solicitar seu crédito
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card border border-border rounded-lg p-6 shadow-elegant">
                  <div className="flex items-center mb-4">
                    <FileText className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-lg font-semibold text-primary">Análise SPC/Serasa</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Autorização para consulta do seu histórico creditício
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 shadow-elegant">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-lg font-semibold text-primary">Comprovação de Ponto Fixo</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Comprovante de residência ou estabelecimento comercial
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 shadow-elegant">
                  <div className="flex items-center mb-4">
                    <Users className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-lg font-semibold text-primary">Contatos de Referência</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Dois contatos pessoais para referência comercial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialist Consultation Section */}
        <SpecialistConsultation />
      </main>

      <Footer />
    </div>
  );
};

export default CreditPersonal;