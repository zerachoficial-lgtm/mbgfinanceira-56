import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import { MBGButton } from "../components/ui/mbg-button";
import { Phone, MapPin, Instagram, Mail, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [webhookUrl, setWebhookUrl] = useState<string>(localStorage.getItem("zapier_webhook") || "");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSending(true);

      const payload = {
        timestamp: new Date().toISOString(),
        triggered_from: window.location.origin + window.location.pathname,
        target_email: "contato@mbgfinanceira.com.br",
        data: { ...formData }
      };

      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "no-cors",
          body: JSON.stringify(payload)
        });
        toast.success("Solicitação enviada ao Zapier. Verifique o histórico do seu Zap.");
      } else {
        const subject = encodeURIComponent(`[Contato MBG] ${formData.subject || "Nova mensagem"}`);
        const body = encodeURIComponent(
          `Nome: ${formData.name}\nE-mail: ${formData.email}\nAssunto: ${formData.subject}\n\nMensagem:\n${formData.message}\n\nEnviado em: ${new Date().toLocaleString()}`
        );
        window.location.href = `mailto:contato@mbgfinanceira.com.br?subject=${subject}&body=${body}`;
        toast.success("Abrindo seu aplicativo de e-mail...");
      }

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast.error("Falha ao enviar. Tente novamente.");
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWebhookChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWebhookUrl(e.target.value);
    localStorage.setItem("zapier_webhook", e.target.value);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageBanner 
        title="Fale Conosco"
        subtitle="Estamos aqui para ajudar você a alcançar seus objetivos financeiros"
      />

      <main>
        {/* Informações de Contato */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Informações */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    Entre em Contato
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Nossa equipe de especialistas está pronta para atender você e encontrar a melhor solução financeira para suas necessidades.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                    <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">WhatsApp</h3>
                      <a 
                        href="https://wa.me/5511978419191" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +55 11 97841-9191
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Resposta rápida e atendimento personalizado
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                    <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Endereço</h3>
                      <p className="text-muted-foreground">
                        Rua Aparecida, 164 - Canindé/SP<br />
                        CEP: 03031-000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                    <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Instagram</h3>
                      <a 
                        href="https://instagram.com/mbg.financeira" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        @mbg.financeira
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Dicas financeiras e novidades
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                    <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Horário de Funcionamento</h3>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <p>Segunda a Sexta: 8h às 18h</p>
                        <p>Sábado: 8h às 12h</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulário */}
              <div className="bg-card border border-border rounded-lg p-8 shadow-elegant">
                <div className="flex items-center space-x-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold text-primary">Envie uma Mensagem</h3>
                </div>

                {/* Integração Zapier (opcional) */}
                <div className="mb-6 p-4 bg-secondary/10 border border-border rounded-md">
                  <label htmlFor="zapierWebhook" className="block text-sm font-medium text-primary mb-2">Zapier Webhook (opcional)</label>
                  <input
                    id="zapierWebhook"
                    type="url"
                    value={webhookUrl}
                    onChange={handleWebhookChange}
                    placeholder="Cole aqui sua URL de webhook do Zapier"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <p className="text-xs text-muted-foreground mt-2">Se preenchido, enviaremos os dados do formulário para o seu Zap. Caso contrário, abriremos seu e-mail para contato@mbgfinanceira.com.br.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                      Assunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="credito">Crédito Pessoal</option>
                      <option value="poupanca">Poupança Especial</option>
                      <option value="vantagens">Programa de Vantagens</option>
                      <option value="parceria">Programa de Parceria</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                      placeholder="Descreva como podemos ajudar você..."
                    />
                  </div>

                  <MBGButton type="submit" className="w-full" disabled={isSending}>
                    {isSending ? "Enviando..." : "Enviar Mensagem"}
                  </MBGButton>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Mapa */}
        <section className="py-20 bg-secondary/5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Nossa Localização
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Venha nos visitar pessoalmente em nossa sede no coração de São Paulo
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0742982894567!2d-46.62634842468985!3d-23.526580778779494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f2b2b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sRua%20Aparecida%2C%20164%20-%20Canind%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1635780000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização MBG Financeira"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;