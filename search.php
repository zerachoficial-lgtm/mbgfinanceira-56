<?php
/**
 * Template para resultados de busca
 */

get_header(); ?>

<div class="container">
    <main class="main-content" style="padding: 80px 0;">
        <header class="search-header" style="text-align: center; margin-bottom: 64px;">
            <h1>Resultados da Busca</h1>
            <p style="color: hsl(var(--muted-foreground)); margin-top: 16px;">
                <?php printf('Você buscou por: <strong>"%s"</strong>', get_search_query()); ?>
            </p>
            <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem; margin-top: 8px;">
                <?php printf('Encontramos %d resultado(s)', $wp_query->found_posts); ?>
            </p>
        </header>

        <?php if (have_posts()) : ?>
            <div class="search-results" style="max-width: 800px; margin: 0 auto;">
                <?php while (have_posts()) : the_post(); ?>
                    <article class="search-result" style="background: hsl(var(--card)); border: 1px solid hsl(var(--border)); border-radius: var(--radius); padding: 24px; margin-bottom: 24px;">
                        <div style="display: flex; gap: 16px;">
                            <?php if (has_post_thumbnail()) : ?>
                                <div style="flex-shrink: 0;">
                                    <a href="<?php the_permalink(); ?>">
                                        <?php the_post_thumbnail('thumbnail', array('style' => 'width: 80px; height: 80px; object-fit: cover; border-radius: 8px;')); ?>
                                    </a>
                                </div>
                            <?php endif; ?>
                            
                            <div style="flex: 1;">
                                <div style="margin-bottom: 8px;">
                                    <?php
                                    $post_type = get_post_type();
                                    $post_type_labels = array(
                                        'post' => 'Artigo',
                                        'page' => 'Página',
                                        'testimonials' => 'Depoimento',
                                        'services' => 'Serviço'
                                    );
                                    $label = isset($post_type_labels[$post_type]) ? $post_type_labels[$post_type] : ucfirst($post_type);
                                    ?>
                                    <span style="background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 500;">
                                        <?php echo $label; ?>
                                    </span>
                                </div>
                                
                                <h3 style="margin-bottom: 8px; font-size: 1.125rem;">
                                    <a href="<?php the_permalink(); ?>" style="color: hsl(var(--foreground)); text-decoration: none;">
                                        <?php the_title(); ?>
                                    </a>
                                </h3>
                                
                                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 12px; font-size: 0.875rem; line-height: 1.6;">
                                    <?php echo wp_trim_words(get_the_excerpt(), 25); ?>
                                </p>
                                
                                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; color: hsl(var(--muted-foreground));">
                                    <span>Por <?php the_author(); ?></span>
                                    <span><?php echo get_the_date(); ?></span>
                                </div>
                            </div>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>

            <!-- Paginação -->
            <div style="margin-top: 48px; text-align: center;">
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
                <div style="background: hsl(var(--card)); border-radius: var(--radius); padding: 48px;">
                    <h2>Nenhum resultado encontrado</h2>
                    <p style="color: hsl(var(--muted-foreground)); margin: 16px 0 32px;">
                        Não encontramos nenhum conteúdo que corresponda à sua busca. Tente usar palavras-chave diferentes ou mais gerais.
                    </p>
                    
                    <!-- Formulário de busca -->
                    <form role="search" method="get" action="<?php echo home_url('/'); ?>" style="margin-bottom: 32px;">
                        <div style="display: flex; gap: 8px; max-width: 400px; margin: 0 auto;">
                            <input type="search" 
                                   name="s" 
                                   value="<?php echo get_search_query(); ?>" 
                                   placeholder="Digite sua busca..."
                                   style="flex: 1; padding: 12px 16px; background: hsl(var(--input)); border: 1px solid hsl(var(--border)); border-radius: 8px; color: hsl(var(--foreground));">
                            <button type="submit" 
                                    class="mbg-button"
                                    style="padding: 12px 20px;">
                                Buscar
                            </button>
                        </div>
                    </form>
                    
                    <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                        <a href="<?php echo home_url(); ?>" class="mbg-button">Página Inicial</a>
                        <a href="<?php echo home_url('/blog'); ?>" class="mbg-button" style="background: transparent; color: hsl(var(--primary)); border: 1px solid hsl(var(--primary));">Ver Blog</a>
                    </div>
                </div>
            </div>
        <?php endif; ?>
    </main>
</div>

<?php get_footer(); ?>