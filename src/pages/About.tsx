import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import FeatureCard from "../components/FeatureCard";
import { Shield, Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageBanner 
        title="Nossa História, Seu Futuro Financeiro"
        subtitle="Conheça a MBG Financeira e nossa missão de transformar vidas através de soluções financeiras acessíveis"
      />

      <main>
        {/* Seção Missão */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                MBG: Nascemos para Descomplicar
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                A MBG Financeira nasceu com o propósito de democratizar o acesso aos serviços financeiros no Brasil. 
                Acreditamos que todos merecem oportunidades justas e transparentes para realizar seus sonhos e superar 
                desafios financeiros. Nossa missão é oferecer crédito acessível e poupança segura, sempre com a 
                confiança e o respeito que nossos clientes merecem.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={Shield}
                title="Confiança"
                description="Transparência total em todas as nossas operações e relacionamentos com clientes."
              />
              <FeatureCard
                icon={Users}
                title="Acessibilidade"
                description="Soluções financeiras pensadas para atender todos os perfis de brasileiros."
              />
              <FeatureCard
                icon={Target}
                title="Simplicidade"
                description="Processos descomplicados e atendimento humanizado para facilitar sua vida."
              />
              <FeatureCard
                icon={Heart}
                title="Compromisso"
                description="Dedicação genuína em ajudar nossos clientes a alcançarem seus objetivos."
              />
            </div>
          </div>
        </section>

        {/* Seção Presença Física */}
        <section className="py-20 bg-secondary/5">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Nossa Casa é sua Casa
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visite-nos em nossa sede e conheça pessoalmente nossa equipe de especialistas financeiros.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="p-6 bg-card border border-border rounded-lg shadow-elegant">
                  <h3 className="text-xl font-semibold text-primary mb-4">Endereço</h3>
                  <p className="text-muted-foreground mb-4">
                    Rua Aparecida, 164 - Canindé/SP<br />
                    CEP: 03031-000
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Horário de Funcionamento:</strong></p>
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-elegant">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0742982894567!2d-46.62634842468985!3d-23.526580778779494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f2b2b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sRua%20Aparecida%2C%20164%20-%20Canind%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1635780000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização MBG Financeira"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;