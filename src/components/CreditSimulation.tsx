import { useState } from "react";
import { Calculator, DollarSign, Calendar, Phone } from "lucide-react";
import { MBGButton } from "./ui/mbg-button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const CreditSimulation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });

  const [simulationResult, setSimulationResult] = useState<{
    weeklyPayment: number;
    totalAmount: number;
    weeks: number;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Auto-calculate when amount changes
    if (name === "amount" && value) {
      const amount = parseFloat(value.replace(/[^\d]/g, ""));
      if (amount >= 1000 && amount <= 5000) {
        const monthlyRate = 0.015; // 1.5% ao mês
        const weeks = 24; // 6 meses
        const totalWithInterest = amount * (1 + (monthlyRate * 6));
        const weeklyPayment = totalWithInterest / weeks;
        
        setSimulationResult({
          weeklyPayment,
          totalAmount: totalWithInterest,
          weeks
        });
      } else {
        setSimulationResult(null);
      }
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatCurrencyInput = (value: string) => {
    const number = value.replace(/[^\d]/g, "");
    const formatted = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(Number(number));
    return formatted;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    const whatsappMessage = `Olá! Gostaria de solicitar um crédito de ${formData.amount}. Meus dados: Nome: ${formData.name}, Email: ${formData.email}, Telefone: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/5511978419191?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="simulacao" className="py-20 bg-card">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="mb-4 animate-fade-in-up">Simule seu Crédito Agora</h2>
            <p className="text-lg text-muted-foreground animate-fade-in-up">
              Descubra em segundos quanto você pode pegar emprestado e como ficam seus pagamentos semanais.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-2">
                <span className="text-sm text-primary font-medium">💬 Dúvidas? Fale com um especialista</span>
              </div>
              <MBGButton 
                variant="outline" 
                size="sm"
                onClick={() => {
                  const whatsappUrl = "https://wa.me/5511978419191?text=Olá! Gostaria de falar com um especialista sobre crédito pessoal.";
                  window.open(whatsappUrl, '_blank');
                }}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="w-4 h-4 mr-2" />
                Falar Agora
              </MBGButton>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Formulário */}
            <div className="bg-background rounded-lg p-8 shadow-elegant border border-border animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-primary font-medium">Nome Completo</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2 bg-input border-border focus:border-primary"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-primary font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 bg-input border-border focus:border-primary"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-primary font-medium">WhatsApp</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-2 bg-input border-border focus:border-primary"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <Label htmlFor="amount" className="text-primary font-medium">Valor Desejado</Label>
                  <Input
                    id="amount"
                    name="amount"
                    type="text"
                    required
                    value={formData.amount}
                    onChange={(e) => {
                      const formatted = formatCurrencyInput(e.target.value);
                      setFormData(prev => ({ ...prev, amount: formatted }));
                      handleInputChange({
                        ...e,
                        target: { ...e.target, value: formatted }
                      });
                    }}
                    className="mt-2 bg-input border-border focus:border-primary"
                    placeholder="R$ 1.000"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Valores de R$ 1.000 até R$ 5.000
                  </p>
                </div>

                <MBGButton type="submit" className="w-full" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Continuar pelo WhatsApp
                </MBGButton>
              </form>
            </div>

            {/* Resultado da Simulação */}
            <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-gradient-gold-radial p-1 rounded-lg">
                <div className="bg-background rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                    <DollarSign className="w-6 h-6 mr-2" />
                    Sua Simulação
                  </h3>
                  
                  {simulationResult ? (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-card rounded-lg border border-border">
                        <span className="text-muted-foreground">Valor do Empréstimo:</span>
                        <span className="font-bold text-primary">{formData.amount}</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-card rounded-lg border border-border">
                        <span className="text-muted-foreground">Pagamento Semanal:</span>
                        <span className="font-bold text-primary text-lg">
                          {formatCurrency(simulationResult.weeklyPayment)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-card rounded-lg border border-border">
                        <span className="text-muted-foreground">Total de Semanas:</span>
                        <span className="font-bold text-primary">{simulationResult.weeks}</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-card rounded-lg border border-border">
                        <span className="text-muted-foreground">Valor Total:</span>
                        <span className="font-bold text-primary">
                          {formatCurrency(simulationResult.totalAmount)}
                        </span>
                      </div>
                      
                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
                        <div className="flex items-center mb-2">
                          <Calendar className="w-5 h-5 text-primary mr-2" />
                          <span className="font-semibold text-primary">Pagamentos Semanais Flexíveis</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Valores que cabem no seu orçamento, sem complicação. 
                          Processo transparente, sem pegadinhas.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calculator className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground">
                        Preencha o valor desejado para ver sua simulação
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Vantagens */}
              <div className="bg-card rounded-lg p-6 border border-border">
                <h4 className="font-semibold text-primary mb-4">Por que escolher a MBG?</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Aprovação em até 24 horas
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Sem consulta ao SPC/Serasa
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Pagamentos semanais flexíveis
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Atendimento humanizado
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditSimulation;