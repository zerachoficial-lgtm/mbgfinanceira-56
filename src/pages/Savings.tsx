import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import FeatureCard from "../components/FeatureCard";
import { MBGButton } from "../components/ui/mbg-button";
import { TrendingUp, Shield, Zap, DollarSign, Calculator, Award } from "lucide-react";

const Savings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageBanner 
        title="Multiplique seus Lucros com a Poupança Especial MBG"
        subtitle="Segurança, rentabilidade e a garantia que seu dinheiro merece"
      />

      <main>
        {/* Benefícios */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Por que Escolher a Poupança MBG?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Diferenciais únicos que fazem da nossa poupança a melhor opção para seu futuro
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={TrendingUp}
                title="Rendimento Superior"
                description="Rentabilidade acima da poupança tradicional com total transparência nos ganhos."
              />
              <FeatureCard
                icon={Shield}
                title="Segurança Garantida"
                description="Seus investimentos protegidos com total segurança e respaldo institucional."
              />
              <FeatureCard
                icon={Zap}
                title="Acessibilidade Total"
                description="Acesse seus recursos quando precisar com flexibilidade e praticidade."
              />
            </div>
          </div>
        </section>

        {/* Exemplo Prático */}
        <section className="py-20 bg-secondary/5">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Veja seu Dinheiro Crescer
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simulação baseada em um investimento inicial de R$ 20.000
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-8 shadow-elegant">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                      <DollarSign className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">Investimento Inicial</h3>
                    <p className="text-3xl font-bold text-primary">R$ 20.000</p>
                  </div>

                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                      <Calculator className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">Após 12 Meses</h3>
                    <p className="text-3xl font-bold text-primary">R$ 23.600</p>
                    <p className="text-sm text-muted-foreground">+R$ 3.600 de rendimento</p>
                  </div>

                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">Após 24 Meses</h3>
                    <p className="text-3xl font-bold text-primary">R$ 27.848</p>
                    <p className="text-sm text-muted-foreground">+R$ 7.848 de rendimento</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-center text-sm text-muted-foreground">
                    <strong>Simulação baseada em rentabilidade de 1,5% ao mês.</strong><br />
                    Os valores são meramente ilustrativos. Rentabilidade passada não garante resultados futuros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais Adicionais */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Mais Vantagens Exclusivas
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">App Exclusivo</h3>
                <p className="text-muted-foreground text-sm">Acompanhe seus rendimentos em tempo real</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Metas Personalizadas</h3>
                <p className="text-muted-foreground text-sm">Defina objetivos e acompanhe seu progresso</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Relatórios Detalhados</h3>
                <p className="text-muted-foreground text-sm">Análises completas do seu patrimônio</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Consultoria Gratuita</h3>
                <p className="text-muted-foreground text-sm">Assessoria financeira personalizada</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-secondary/5">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Abra sua Conta Poupança Hoje Mesmo
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Não perca mais tempo deixando seu dinheiro parado. Comece a multiplicar seus lucros agora mesmo com a segurança que você merece.
              </p>
              <MBGButton asChild size="lg">
                <a href="/contato">Fale com um Especialista</a>
              </MBGButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Savings;