<?php
/**
 * Template para páginas de arquivo (categorias, tags, etc.)
 */

get_header(); ?>

<div class="container">
    <main class="main-content" style="padding: 80px 0;">
        <header class="archive-header" style="text-align: center; margin-bottom: 64px;">
            <h1 class="archive-title">
                <?php
                if (is_category()) {
                    single_cat_title();
                } elseif (is_tag()) {
                    single_tag_title();
                } elseif (is_author()) {
                    echo 'Artigos por ' . get_the_author();
                } elseif (is_year()) {
                    echo 'Artigos de ' . get_the_date('Y');
                } elseif (is_month()) {
                    echo 'Artigos de ' . get_the_date('F Y');
                } else {
                    echo 'Arquivo';
                }
                ?>
            </h1>
            
            <?php if (is_category() && category_description()) : ?>
                <div class="archive-description" style="color: hsl(var(--muted-foreground)); max-width: 600px; margin: 16px auto 0;">
                    <?php echo category_description(); ?>
                </div>
            <?php endif; ?>
        </header>

        <?php if (have_posts()) : ?>
            <div class="posts-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 32px; max-width: 1200px; margin: 0 auto;">
                <?php while (have_posts()) : the_post(); ?>
                    <article class="post-card" style="background: hsl(var(--card)); border: 1px solid hsl(var(--border)); border-radius: var(--radius); overflow: hidden; transition: var(--transition-smooth);">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="post-thumbnail">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('medium', array('style' => 'width: 100%; height: 200px; object-fit: cover;')); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <div style="padding: 24px;">
                            <div style="margin-bottom: 12px;">
                                <?php
                                $categories = get_the_category();
                                if (!empty($categories)) {
                                    echo '<span style="background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 500;">' . esc_html($categories[0]->name) . '</span>';
                                }
                                ?>
                            </div>
                            
                            <h3 style="margin-bottom: 12px; font-size: 1.25rem;">
                                <a href="<?php the_permalink(); ?>" style="color: hsl(var(--foreground)); text-decoration: none;">
                                    <?php the_title(); ?>
                                </a>
                            </h3>
                            
                            <p style="color: hsl(var(--muted-foreground)); margin-bottom: 16px; font-size: 0.875rem; line-height: 1.6;">
                                <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
                            </p>
                            
                            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; color: hsl(var(--muted-foreground));">
                                <span>Por <?php the_author(); ?></span>
                                <span><?php echo get_the_date(); ?></span>
                            </div>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>

            <!-- Paginação -->
            <div style="margin-top: 64px; text-align: center;">
                <?php
                the_posts_pagination(array(
                    'mid_size' => 2,
                    'prev_text' => '← Anterior',
                    'next_text' => 'Próximo →',
                ));
                ?>
            </div>

        <?php else : ?>
            <div style="text-align: center; max-width: 600px; margin: 0 auto;">
                <h2>Nenhum conteúdo encontrado</h2>
                <p style="color: hsl(var(--muted-foreground)); margin: 16px 0 32px;">
                    Não encontramos nenhum conteúdo para esta busca. Tente navegar por outras categorias ou volte à página inicial.
                </p>
                <a href="<?php echo home_url(); ?>" class="mbg-button">Voltar ao Início</a>
            </div>
        <?php endif; ?>
    </main>
</div>

<?php get_footer(); ?>