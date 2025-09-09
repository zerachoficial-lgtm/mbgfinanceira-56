import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MBGButton } from "@/components/ui/mbg-button";
import { Clock, User, Calendar, ArrowLeft, Share2 } from "lucide-react";

// Sample blog post content - in a real app, this would come from a CMS or API
const blogPosts = {
  "como-organizar-financas-pessoais-2024": {
    title: "Como Organizar suas Finanças Pessoais em 2024",
    author: "Equipe MBG",
    date: "15 Jan 2024",
    readTime: "5 min",
    category: "Educação Financeira",
    content: `
      <p>Organizar as finanças pessoais é fundamental para conquistar estabilidade financeira e realizar seus sonhos. Neste artigo, compartilhamos estratégias práticas para você começar 2024 com o pé direito.</p>
      
      <h2>1. Faça um Diagnóstico Completo</h2>
      <p>Antes de tomar qualquer decisão, é essencial entender sua situação atual. Liste todas suas receitas e despesas, identificando onde está gastando mais dinheiro.</p>
      
      <h2>2. Crie um Orçamento Realista</h2>
      <p>Use a regra 50-30-20: 50% para necessidades básicas, 30% para desejos e 20% para poupança e investimentos.</p>
      
      <h2>3. Construa sua Reserva de Emergência</h2>
      <p>Tenha pelo menos 6 meses de despesas guardados para imprevistos. A Poupança Especial MBG é uma excelente opção para isso.</p>
      
      <h2>4. Elimine as Dívidas de Alto Custo</h2>
      <p>Priorize quitar cartões de crédito e financiamentos com juros altos. Se necessário, considere um crédito pessoal com juros menores.</p>
      
      <h2>Conclusão</h2>
      <p>Organizar as finanças é um processo contínuo. Com disciplina e as estratégias certas, você pode alcançar seus objetivos financeiros.</p>
    `
  },
  "poupanca-vs-investimento-qual-escolher": {
    title: "Poupança vs Investimento: Qual Escolher?",
    author: "Especialista MBG",
    date: "10 Jan 2024",
    readTime: "7 min",
    category: "Dicas de Investimento",
    content: `
      <p>Uma das dúvidas mais comuns entre brasileiros é: devo deixar meu dinheiro na poupança ou investir em outras opções? Vamos esclarecer essa questão.</p>
      
      <h2>Poupança Tradicional</h2>
      <p>A poupança tradicional oferece liquidez diária e segurança, mas com rendimentos baixos que muitas vezes não superam a inflação.</p>
      
      <h2>Poupança Especial MBG</h2>
      <p>Nossa Poupança Especial oferece rendimentos superiores mantendo a segurança. É ideal para sua reserva de emergência.</p>
      
      <h2>Outras Opções de Investimento</h2>
      <p>CDBs, Tesouro Direto e fundos de investimento podem oferecer rentabilidade maior, mas com diferentes níveis de risco.</p>
      
      <h2>Nossa Recomendação</h2>
      <p>Diversifique: use a Poupança Especial MBG para emergências e explore outras opções para objetivos de longo prazo.</p>
    `
  },
  "5-dicas-credito-aprovado": {
    title: "5 Dicas para Conseguir Crédito Aprovado",
    author: "Especialista MBG",
    date: "08 Jan 2024",
    readTime: "6 min",
    category: "Crédito",
    content: `
      <p>Conseguir aprovação para crédito pode ser desafiador, mas com as estratégias certas, você aumenta significativamente suas chances. Confira nossas dicas profissionais.</p>
      
      <h2>1. Mantenha seu CPF Limpo</h2>
      <p>Antes de solicitar qualquer crédito, verifique se seu nome está limpo nos órgãos de proteção. Quite pendências e negocie dívidas em atraso.</p>
      
      <h2>2. Comprove sua Renda</h2>
      <p>Tenha em mãos documentos que comprovem sua renda: holerites, extratos bancários, declaração de imposto de renda e comprovantes de renda extra.</p>
      
      <h2>3. Tenha um Relacionamento Bancário</h2>
      <p>Mantenha conta corrente ativa e movimentada. Bancos avaliam positivamente clientes com histórico de relacionamento.</p>
      
      <h2>4. Não Solicite Crédito em Vários Lugares</h2>
      <p>Evite fazer muitas consultas ao CPF em pouco tempo. Isso pode ser interpretado como desespero por crédito.</p>
      
      <h2>5. Escolha o Produto Certo</h2>
      <p>Cada modalidade de crédito tem critérios diferentes. O crédito pessoal MBG oferece condições mais flexíveis para diversos perfis.</p>
      
      <h2>Conclusão</h2>
      <p>Com planejamento e documentação adequada, suas chances de aprovação aumentam consideravelmente. A MBG está aqui para ajudar!</p>
    `
  },
  "juros-compostos-seu-aliado-financeiro": {
    title: "Juros Compostos: Seu Maior Aliado Financeiro",
    author: "Analista MBG",
    date: "05 Jan 2024",
    readTime: "8 min",
    category: "Educação Financeira",
    content: `
      <p>Os juros compostos são considerados a oitava maravilha do mundo por Albert Einstein. Entenda como essa força pode trabalhar a seu favor na construção de patrimônio.</p>
      
      <h2>O que são Juros Compostos?</h2>
      <p>Juros compostos são os juros calculados sobre o valor inicial mais os juros acumulados de períodos anteriores. É como uma bola de neve financeira.</p>
      
      <h2>A Mágica do Tempo</h2>
      <p>Quanto mais tempo você deixa seu dinheiro rendendo com juros compostos, maior será o impacto. Começar cedo é fundamental.</p>
      
      <h2>Exemplo Prático</h2>
      <p>R$ 1.000 investidos a 1% ao mês por 12 meses: com juros simples = R$ 1.120. Com juros compostos = R$ 1.127. A diferença cresce exponencialmente com o tempo.</p>
      
      <h2>Como Aproveitar na Poupança Especial MBG</h2>
      <p>Nossa Poupança Especial utiliza juros compostos com rendimento superior à poupança tradicional, maximizando seus ganhos.</p>
      
      <h2>Dica de Ouro</h2>
      <p>Faça aportes regulares e não retire os rendimentos. Deixe que os juros compostos trabalhem por você ao longo dos anos.</p>
      
      <h2>Conclusão</h2>
      <p>Os juros compostos podem ser seus melhores amigos ou seus piores inimigos, dependendo se você está investindo ou devendo. Escolha o lado certo!</p>
    `
  },
  "emergencia-financeira-como-se-preparar": {
    title: "Emergência Financeira: Como se Preparar",
    author: "Consultora MBG",
    date: "03 Jan 2024",
    readTime: "6 min",
    category: "Planejamento",
    content: `
      <p>Emergências financeiras podem acontecer a qualquer momento. Desemprego, problemas de saúde, reparos urgentes - estar preparado é essencial para sua tranquilidade.</p>
      
      <h2>O que é uma Emergência Financeira?</h2>
      <p>São gastos inesperados e urgentes que não estavam no seu orçamento: perda de emprego, problemas de saúde, consertos emergenciais, etc.</p>
      
      <h2>Quanto Guardar?</h2>
      <p>O ideal é ter de 3 a 6 meses de gastos fixos guardados. Para autônomos e freelancers, recomendamos de 6 a 12 meses.</p>
      
      <h2>Onde Guardar o Dinheiro?</h2>
      <p>A reserva de emergência deve estar em aplicações seguras e de fácil acesso. A Poupança Especial MBG é ideal para isso.</p>
      
      <h2>Como Construir sua Reserva</h2>
      <p>Comece pequeno: guarde 10% da sua renda todo mês. Se possível, destine toda renda extra (13º, férias, bônus) para a reserva.</p>
      
      <h2>Quando Usar a Reserva</h2>
      <p>Use apenas para emergências reais. Viagem ou compra de eletrodoméstico não são emergências - são desejos que devem ter orçamento próprio.</p>
      
      <h2>Reponha Rapidamente</h2>
      <p>Se precisar usar sua reserva, a prioridade número 1 deve ser repô-la o mais rápido possível.</p>
      
      <h2>Conclusão</h2>
      <p>Uma reserva de emergência bem estruturada é a base de qualquer planejamento financeiro sólido. Comece hoje mesmo!</p>
    `
  },
  "credito-pessoal-quando-vale-a-pena": {
    title: "Crédito Pessoal: Quando Vale a Pena?",
    author: "Especialista MBG",
    date: "01 Jan 2024",
    readTime: "7 min",
    category: "Crédito",
    content: `
      <p>O crédito pessoal pode ser um grande aliado ou um problema financeiro, dependendo de como é utilizado. Saiba quando vale a pena contratar essa modalidade.</p>
      
      <h2>O que é Crédito Pessoal?</h2>
      <p>É um empréstimo sem garantia específica, onde você recebe o dinheiro e paga em parcelas fixas. Os juros são mais altos que modalidades com garantia.</p>
      
      <h2>Quando Vale a Pena Contratar</h2>
      <p><strong>1. Quitar dívidas mais caras:</strong> Use para quitar cartão de crédito ou cheque especial com juros maiores.</p>
      <p><strong>2. Emergências reais:</strong> Problemas de saúde ou reparos urgentes quando não há reserva de emergência.</p>
      <p><strong>3. Oportunidades de renda:</strong> Investir em capacitação profissional ou equipamentos para trabalho.</p>
      
      <h2>Quando NÃO Vale a Pena</h2>
      <p><strong>1. Financiar consumo:</strong> Viagens, eletrodomésticos, roupas - essas compras devem ser planejadas.</p>
      <p><strong>2. Sem capacidade de pagamento:</strong> Se as parcelas comprometerem mais de 30% da renda.</p>
      <p><strong>3. Por impulso:</strong> Decisões financeiras importantes não devem ser tomadas por impulso.</p>
      
      <h2>Vantagens do Crédito MBG</h2>
      <p>Oferecemos condições mais justas, processo simplificado e atendimento humanizado para ajudar você a alcançar seus objetivos.</p>
      
      <h2>Dicas Importantes</h2>
      <p>Sempre compare condições, leia todo o contrato, verifique se cabe no orçamento e tenha um plano para quitar antecipadamente.</p>
      
      <h2>Conclusão</h2>
      <p>O crédito pessoal é uma ferramenta financeira. Como toda ferramenta, pode construir ou destruir, dependendo de como é usada.</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Artigo não encontrado</h1>
          <p className="text-muted-foreground mb-8">O artigo que você procura não existe ou foi removido.</p>
          <Link to="/blog">
            <MBGButton>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </MBGButton>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-foreground">{post.title}</span>
        </nav>

        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <Link to="/blog">
                <MBGButton variant="outline" className="mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar ao Blog
                </MBGButton>
              </Link>
            </div>

            <span className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <MBGButton variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </MBGButton>
            </div>
          </header>

          {/* Featured Image */}
          <div className="h-64 md:h-96 bg-gradient-gold-radial rounded-lg flex items-center justify-center mb-12">
            <div className="text-primary text-8xl">📰</div>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              color: 'hsl(var(--foreground))',
            }}
          />

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Gostou do conteúdo?
              </h3>
              <p className="text-muted-foreground mb-6">
                Conheça nossos serviços financeiros e veja como podemos ajudar você a alcançar seus objetivos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/credito-pessoal">
                  <MBGButton>
                    Crédito Pessoal
                  </MBGButton>
                </Link>
                <Link to="/poupanca-especial">
                  <MBGButton variant="outline">
                    Poupança Especial
                  </MBGButton>
                </Link>
              </div>
            </div>
          </footer>
        </article>

        {/* Related Articles */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Artigos Relacionados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample related articles */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-elegant hover:shadow-gold transition-all duration-300">
              <h3 className="text-lg font-bold text-primary mb-2">5 Dicas para Conseguir Crédito Aprovado</h3>
              <p className="text-muted-foreground text-sm mb-4">Aumente suas chances de aprovação seguindo essas dicas essenciais...</p>
              <Link to="/blog/5-dicas-credito-aprovado">
                <MBGButton variant="outline" size="sm">
                  Ler mais
                </MBGButton>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;