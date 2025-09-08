<?php
/**
 * Template Name: Blog
 */

get_header();

// Include components
require_once get_template_directory() . '/inc/components/page-banner.php';
?>

<main>
    <?php mbg_page_banner(
        'Blog MBG Financeira',
        'Conteúdos exclusivos sobre educação financeira, dicas de investimento e novidades da MBG para você ficar por dentro do mundo financeiro.'
    ); ?>

    <div class="container mx-auto px-4 py-16">
        <!-- Categories Filter -->
        <div class="flex flex-wrap gap-4 mb-12 justify-center">
            <?php
            $categories = ['Todas', 'Educação Financeira', 'Dicas de Investimento', 'Novidades MBG'];
            foreach ($categories as $index => $category):
            ?>
            <button class="category-filter px-6 py-3 rounded-lg font-semibold transition-all duration-300 <?php echo $index === 0 ? 'bg-gradient-gold text-primary-foreground shadow-gold-glow' : 'bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary'; ?>" 
                    data-category="<?php echo strtolower(str_replace(' ', '-', $category)); ?>">
                <?php echo esc_html($category); ?>
            </button>
            <?php endforeach; ?>
        </div>

        <!-- Blog Posts Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-posts">
            <?php
            // Get blog posts or use default content
            $blog_posts = get_posts([
                'post_type' => 'post',
                'posts_per_page' => 12,
                'post_status' => 'publish'
            ]);

            // Default blog posts if none exist
            if (empty($blog_posts)) {
                $default_posts = [
                    [
                        'id' => '1',
                        'title' => 'Como Organizar suas Finanças Pessoais em 2024',
                        'excerpt' => 'Descubra estratégias práticas para controlar gastos, criar um orçamento eficiente e construir sua reserva de emergência.',
                        'author' => 'Equipe MBG',
                        'date' => '15 Jan 2024',
                        'readTime' => '5 min',
                        'category' => 'Educação Financeira',
                        'slug' => 'como-organizar-financas-pessoais-2024'
                    ],
                    [
                        'id' => '2',
                        'title' => 'Poupança vs Investimento: Qual Escolher?',
                        'excerpt' => 'Entenda as diferenças entre poupança tradicional e outros investimentos para tomar a melhor decisão para seu perfil.',
                        'author' => 'Especialista MBG',
                        'date' => '10 Jan 2024',
                        'readTime' => '7 min',
                        'category' => 'Dicas de Investimento',
                        'slug' => 'poupanca-vs-investimento-qual-escolher'
                    ],
                    [
                        'id' => '3',
                        'title' => '5 Dicas para Conseguir Crédito Aprovado',
                        'excerpt' => 'Aumente suas chances de aprovação seguindo essas dicas essenciais para solicitar crédito pessoal.',
                        'author' => 'Consultores MBG',
                        'date' => '8 Jan 2024',
                        'readTime' => '4 min',
                        'category' => 'Novidades MBG',
                        'slug' => '5-dicas-credito-aprovado'
                    ],
                    [
                        'id' => '4',
                        'title' => 'Planejamento Financeiro para 2024',
                        'excerpt' => 'Comece o ano com o pé direito! Aprenda a definir metas financeiras realistas e alcançáveis.',
                        'author' => 'Equipe MBG',
                        'date' => '5 Jan 2024',
                        'readTime' => '6 min',
                        'category' => 'Educação Financeira',
                        'slug' => 'planejamento-financeiro-2024'
                    ],
                    [
                        'id' => '5',
                        'title' => 'Como a Poupança Especial MBG Pode Mudar sua Vida',
                        'excerpt' => 'Conheça os benefícios exclusivos da nossa poupança especial e veja depoimentos de clientes satisfeitos.',
                        'author' => 'Time MBG',
                        'date' => '3 Jan 2024',
                        'readTime' => '5 min',
                        'category' => 'Novidades MBG',
                        'slug' => 'poupanca-especial-mbg-mudar-vida'
                    ],
                    [
                        'id' => '6',
                        'title' => 'Educação Financeira para Iniciantes',
                        'excerpt' => 'Primeiros passos no mundo das finanças pessoais. Um guia completo para quem está começando.',
                        'author' => 'Especialista MBG',
                        'date' => '1 Jan 2024',
                        'readTime' => '8 min',
                        'category' => 'Educação Financeira',
                        'slug' => 'educacao-financeira-iniciantes'
                    ]
                ];

                foreach ($default_posts as $post):
            ?>
            <article class="blog-post bg-card border border-border rounded-lg overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300 group animate-fade-in-up" 
                     data-category="<?php echo strtolower(str_replace(' ', '-', $post['category'])); ?>">
                <!-- Post Image Placeholder -->
                <div class="h-48 bg-gradient-gold-radial flex items-center justify-center">
                    <div class="text-primary text-6xl">📰</div>
                </div>

                <div class="p-6">
                    <!-- Category Tag -->
                    <span class="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
                        <?php echo esc_html($post['category']); ?>
                    </span>

                    <!-- Post Title -->
                    <h2 class="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                        <?php echo esc_html($post['title']); ?>
                    </h2>

                    <!-- Post Excerpt -->
                    <p class="text-muted-foreground text-sm leading-relaxed mb-4">
                        <?php echo esc_html($post['excerpt']); ?>
                    </p>

                    <!-- Post Meta -->
                    <div class="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex items-center space-x-1">
                                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                </svg>
                                <span><?php echo esc_html($post['author']); ?></span>
                            </div>
                            <div class="flex items-center space-x-1">
                                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                    <line x1="16" y1="2" x2="16" y2="6"/>
                                    <line x1="8" y1="2" x2="8" y2="6"/>
                                    <line x1="3" y1="10" x2="21" y2="10"/>
                                </svg>
                                <span><?php echo esc_html($post['date']); ?></span>
                            </div>
                            <div class="flex items-center space-x-1">
                                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12,6 12,12 16,14"/>
                                </svg>
                                <span><?php echo esc_html($post['readTime']); ?></span>
                            </div>
                        </div>
                    </div>

                    <!-- Read More Button -->
                    <a href="<?php echo home_url('/blog/' . $post['slug']); ?>" 
                       class="inline-flex items-center justify-center w-full px-6 py-3 bg-card border border-border text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary/5 hover:border-primary hover:shadow-elegant">
                        Ler Artigo Completo
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M5 12h14m-7-7l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            </article>
            <?php 
                endforeach;
            } else {
                // Display actual WordPress posts
                foreach ($blog_posts as $post):
                    setup_postdata($post);
            ?>
            <article class="blog-post bg-card border border-border rounded-lg overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300 group animate-fade-in-up">
                <?php if (has_post_thumbnail()): ?>
                <div class="h-48 overflow-hidden">
                    <?php the_post_thumbnail('medium', ['class' => 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300']); ?>
                </div>
                <?php else: ?>
                <div class="h-48 bg-gradient-gold-radial flex items-center justify-center">
                    <div class="text-primary text-6xl">📰</div>
                </div>
                <?php endif; ?>

                <div class="p-6">
                    <!-- Category -->
                    <?php
                    $categories = get_the_category();
                    if (!empty($categories)):
                    ?>
                    <span class="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
                        <?php echo esc_html($categories[0]->name); ?>
                    </span>
                    <?php endif; ?>

                    <!-- Title -->
                    <h2 class="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h2>

                    <!-- Excerpt -->
                    <p class="text-muted-foreground text-sm leading-relaxed mb-4">
                        <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
                    </p>

                    <!-- Meta -->
                    <div class="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div class="flex items-center space-x-4">
                            <span><?php echo get_the_author(); ?></span>
                            <span><?php echo get_the_date('j M Y'); ?></span>
                        </div>
                    </div>

                    <!-- Read More -->
                    <a href="<?php the_permalink(); ?>" 
                       class="inline-flex items-center justify-center w-full px-6 py-3 bg-card border border-border text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary/5 hover:border-primary hover:shadow-elegant">
                        Ler Artigo Completo
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M5 12h14m-7-7l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            </article>
            <?php 
                endforeach;
                wp_reset_postdata();
            }
            ?>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12">
            <button class="px-8 py-4 bg-card border border-border text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary/5 hover:border-primary hover:shadow-elegant">
                Carregar Mais Artigos
            </button>
        </div>

        <!-- Newsletter Section -->
        <section class="mt-20 text-center">
            <div class="bg-card border border-border rounded-lg p-8 md:p-12 shadow-elegant">
                <h2 class="text-3xl font-bold text-primary mb-4">
                    Receba Conteúdos Exclusivos
                </h2>
                <p class="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Inscreva-se em nossa newsletter e receba dicas financeiras, novidades da MBG e conteúdos exclusivos diretamente em seu e-mail.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input type="email" 
                           id="newsletter-email"
                           placeholder="Seu melhor e-mail"
                           class="flex-1 px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                    <button onclick="subscribeNewsletter()" 
                            class="px-6 py-3 bg-gradient-gold text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-gold-glow hover:scale-105">
                        Inscrever-se
                    </button>
                </div>
            </div>
        </section>
    </div>

</main>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Category Filter
    const categoryFilters = document.querySelectorAll('.category-filter');
    const blogPosts = document.querySelectorAll('.blog-post');

    categoryFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const selectedCategory = this.dataset.category;

            // Update active filter
            categoryFilters.forEach(f => {
                f.classList.remove('bg-gradient-gold', 'text-primary-foreground', 'shadow-gold-glow');
                f.classList.add('bg-card', 'border', 'border-border', 'text-muted-foreground');
            });
            
            this.classList.remove('bg-card', 'border', 'border-border', 'text-muted-foreground');
            this.classList.add('bg-gradient-gold', 'text-primary-foreground', 'shadow-gold-glow');

            // Filter posts
            blogPosts.forEach(post => {
                if (selectedCategory === 'todas' || post.dataset.category === selectedCategory) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });
});

function subscribeNewsletter() {
    const email = document.getElementById('newsletter-email').value;
    if (!email || !email.includes('@')) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    const message = `Olá! Gostaria de me inscrever na newsletter da MBG Financeira.

*E-mail:* ${email}

Obrigado!`;

    const whatsappUrl = `<?php echo mbg_get_whatsapp_url(''); ?>` + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
    
    document.getElementById('newsletter-email').value = '';
    alert('Redirecionando para o WhatsApp para confirmar sua inscrição...');
}
</script>

<?php get_footer(); ?>