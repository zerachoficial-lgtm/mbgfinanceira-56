import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import FeatureCard from "../components/FeatureCard";
import TestimonialCard from "../components/TestimonialCard";
import { Gift, Users, Trophy, Star, Handshake, Target } from "lucide-react";

const Benefits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageBanner 
        title="Um Universo de Vantagens para Clientes MBG"
        subtitle="Programa exclusivo de benefícios, sorteios e parcerias"
      />

      <main>
        {/* Sorteios */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Sorteios para Clientes Fiéis
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Todo mês realizamos sorteios especiais para nossos clientes ativos. 
                Quanto mais você utiliza nossos serviços, maiores são suas chances de ganhar prêmios incríveis!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <FeatureCard
                icon={Gift}
                title="Prêmios Mensais"
                description="Sorteios todo mês com prêmios em dinheiro, produtos e experiências únicas."
              />
              <FeatureCard
                icon={Star}
                title="Participação Automática"
                description="Clientes ativos participam automaticamente. Não precisa se inscrever!"
              />
              <FeatureCard
                icon={Trophy}
                title="Múltiplas Chances"
                description="Quanto mais produtos MBG você usar, mais chances de ganhar você tem."
              />
            </div>

            {/* Últimos Ganhadores */}
            <div className="bg-secondary/5 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-primary text-center mb-8">
                🏆 Últimos Ganhadores
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <TestimonialCard
                  name="Maria Silva"
                  location="São Paulo - SP"
                  testimonial="Ganhei R$ 2.000 no sorteio de dezembro! Não acreditei quando recebi a ligação. A MBG é realmente especial!"
                  rating={5}
                />
                <TestimonialCard
                  name="João Santos"
                  location="Rio de Janeiro - RJ"
                  testimonial="Um smartphone novo no sorteio! Estava precisando muito. Obrigado MBG pela oportunidade!"
                  rating={5}
                />
                <TestimonialCard
                  name="Ana Costa"
                  location="Belo Horizonte - MG"
                  testimonial="Ganhei uma experiência gastronômica incrível! Foi um presente inesperado que mudou meu mês."
                  rating={5}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Programa de Parceria */}
        <section className="py-20 bg-secondary/5">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Programa de Parceria
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Seja um parceiro MBG e ganhe comissões exclusivas indicando nossos serviços. 
                Ideal para profissionais liberais, empreendedores e influenciadores.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-8">
                <FeatureCard
                  icon={Handshake}
                  title="Comissões Atrativas"
                  description="Ganhe até 5% de comissão em cada cliente indicado que contratar nossos serviços."
                />
                <FeatureCard
                  icon={Target}
                  title="Suporte Completo"
                  description="Material de divulgação, treinamento e suporte especializado para seus clientes."
                />
                <FeatureCard
                  icon={Users}
                  title="Rede de Parceiros"
                  description="Faça parte de uma comunidade exclusiva de parceiros de sucesso."
                />
              </div>

              <div className="bg-card border border-border rounded-lg p-8 shadow-elegant">
                <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
                  Como Funciona
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Cadastre-se</h4>
                      <p className="text-muted-foreground">Preencha nosso formulário de parceria</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Receba Material</h4>
                      <p className="text-muted-foreground">Acesso a materiais e link personalizado</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Indique e Ganhe</h4>
                      <p className="text-muted-foreground">Receba comissões por cada indicação convertida</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Perfil Ideal para Parceiros
                </h3>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div className="bg-card border border-border rounded p-4">
                    <strong>Corretores</strong><br />
                    Imobiliários e de seguros
                  </div>
                  <div className="bg-card border border-border rounded p-4">
                    <strong>Profissionais</strong><br />
                    Contadores e advogados
                  </div>
                  <div className="bg-card border border-border rounded p-4">
                    <strong>Influenciadores</strong><br />
                    Criadores de conteúdo
                  </div>
                  <div className="bg-card border border-border rounded p-4">
                    <strong>Empreendedores</strong><br />
                    Donos de negócio local
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios Adicionais */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Mais Benefícios Exclusivos
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ser cliente MBG vai muito além dos serviços financeiros
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-gold-glow">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Educação Financeira</h3>
                <p className="text-muted-foreground text-sm">Workshops e cursos gratuitos para clientes</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-gold-glow">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Descontos Especiais</h3>
                <p className="text-muted-foreground text-sm">Parcerias com lojas e estabelecimentos</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-gold-glow">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Atendimento VIP</h3>
                <p className="text-muted-foreground text-sm">Linha exclusiva para clientes especiais</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-gold-glow">
                  <span className="text-2xl">🎉</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Eventos Exclusivos</h3>
                <p className="text-muted-foreground text-sm">Convites para eventos e networking</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Benefits;