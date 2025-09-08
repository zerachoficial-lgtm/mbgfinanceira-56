import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { MBGButton } from "@/components/ui/mbg-button";
import { Clock, User, Calendar } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Como Organizar suas Finanças Pessoais em 2024",
    excerpt: "Descubra estratégias práticas para controlar gastos, criar um orçamento eficiente e construir sua reserva de emergência.",
    author: "Equipe MBG",
    date: "15 Jan 2024",
    readTime: "5 min",
    category: "Educação Financeira",
    slug: "como-organizar-financas-pessoais-2024"
  },
  {
    id: "2",
    title: "Poupança vs Investimento: Qual Escolher?",
    excerpt: "Entenda as diferenças entre poupança tradicional e outros investimentos para tomar a melhor decisão para seu perfil.",
    author: "Especialista MBG",
    date: "10 Jan 2024",
    readTime: "7 min",
    category: "Dicas de Investimento",
    slug: "poupanca-vs-investimento-qual-escolher"
  },
  {
    id: "3",
    title: "5 Dicas para Conseguir Crédito Aprovado",
    excerpt: "Aumente suas chances de aprovação seguindo essas dicas essenciais para solicitar crédito pessoal.",
    author: "Consultores MBG",
    date: "8 Jan 2024",
    readTime: "4 min",
    category: "Novidades MBG",
    slug: "5-dicas-credito-aprovado"
  },
  {
    id: "4",
    title: "Planejamento Financeiro para 2024",
    excerpt: "Comece o ano com o pé direito! Aprenda a definir metas financeiras realistas e alcançáveis.",
    author: "Equipe MBG",
    date: "5 Jan 2024",
    readTime: "6 min",
    category: "Educação Financeira",
    slug: "planejamento-financeiro-2024"
  },
  {
    id: "5",
    title: "Como a Poupança Especial MBG Pode Mudar sua Vida",
    excerpt: "Conheça os benefícios exclusivos da nossa poupança especial e veja depoimentos de clientes satisfeitos.",
    author: "Time MBG",
    date: "3 Jan 2024",
    readTime: "5 min",
    category: "Novidades MBG",
    slug: "poupanca-especial-mbg-mudar-vida"
  },
  {
    id: "6",
    title: "Educação Financeira para Iniciantes",
    excerpt: "Primeiros passos no mundo das finanças pessoais. Um guia completo para quem está começando.",
    author: "Especialista MBG",
    date: "1 Jan 2024",
    readTime: "8 min",
    category: "Educação Financeira",
    slug: "educacao-financeira-iniciantes"
  }
];

const categories = ["Todas", "Educação Financeira", "Dicas de Investimento", "Novidades MBG"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageBanner 
        title="Blog MBG Financeira"
        subtitle="Conteúdos exclusivos sobre educação financeira, dicas de investimento e novidades da MBG para você ficar por dentro do mundo financeiro."
      />

      <main className="container mx-auto px-4 py-16">
        {/* Categories Filter */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category, index) => (
            <MBGButton
              key={index}
              variant={index === 0 ? "primary" : "outline"}
              className="mb-2"
            >
              {category}
            </MBGButton>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-card border border-border rounded-lg overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300 group animate-fade-in-up"
            >
              {/* Post Image Placeholder */}
              <div className="h-48 bg-gradient-gold-radial flex items-center justify-center">
                <div className="text-primary text-6xl">📰</div>
              </div>

              <div className="p-6">
                {/* Category Tag */}
                <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
                  {post.category}
                </span>

                {/* Post Title */}
                <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                  {post.title}
                </h2>

                {/* Post Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Post Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <Link to={`/blog/${post.slug}`}>
                  <MBGButton variant="outline" className="w-full">
                    Ler Artigo Completo
                  </MBGButton>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <MBGButton variant="outline" size="lg">
            Carregar Mais Artigos
          </MBGButton>
        </div>

        {/* Newsletter Section */}
        <section className="mt-20 text-center">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-elegant">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Receba Conteúdos Exclusivos
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Inscreva-se em nossa newsletter e receba dicas financeiras, novidades da MBG e conteúdos exclusivos diretamente em seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <MBGButton>
                Inscrever-se
              </MBGButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;