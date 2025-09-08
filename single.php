<?php
/**
 * Template para posts individuais
 */

get_header(); ?>

<div class="container">
    <main class="main-content" style="padding: 80px 0;">
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="post-header" style="text-align: center; margin-bottom: 48px;">
                    <div style="margin-bottom: 16px;">
                        <?php
                        $categories = get_the_category();
                        if (!empty($categories)) {
                            echo '<span style="background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); padding: 4px 12px; border-radius: 20px; font-size: 0.875rem; font-weight: 500;">' . esc_html($categories[0]->name) . '</span>';
                        }
                        ?>
                    </div>
                    
                    <h1 class="post-title"><?php the_title(); ?></h1>
                    
                    <div class="post-meta" style="color: hsl(var(--muted-foreground)); font-size: 0.875rem; margin-top: 16px;">
                        <span>Por <?php the_author(); ?></span>
                        <span style="margin: 0 8px;">•</span>
                        <span><?php echo get_the_date(); ?></span>
                        <span style="margin: 0 8px;">•</span>
                        <span><?php echo mbg_estimated_reading_time(); ?> min de leitura</span>
                    </div>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <div class="post-thumbnail" style="margin-bottom: 48px; text-align: center;">
                        <?php the_post_thumbnail('large', array('style' => 'max-width: 100%; height: auto; border-radius: var(--radius);')); ?>
                    </div>
                <?php endif; ?>

                <div class="post-content" style="max-width: 800px; margin: 0 auto;">
                    <?php
                    the_content();

                    wp_link_pages(array(
                        'before' => '<div class="page-links">',
                        'after'  => '</div>',
                    ));
                    ?>
                </div>

                <footer class="post-footer" style="max-width: 800px; margin: 48px auto 0; padding-top: 32px; border-top: 1px solid hsl(var(--border));">
                    <div class="post-tags">
                        <?php
                        $tags = get_the_tags();
                        if ($tags) {
                            echo '<div style="margin-bottom: 24px;">';
                            echo '<strong style="color: hsl(var(--primary));">Tags: </strong>';
                            foreach ($tags as $tag) {
                                echo '<span style="background: hsl(var(--card)); border: 1px solid hsl(var(--border)); padding: 4px 8px; border-radius: 4px; margin-right: 8px; font-size: 0.875rem;">' . esc_html($tag->name) . '</span>';
                            }
                            echo '</div>';
                        }
                        ?>
                    </div>

                    <div class="post-navigation">
                        <?php
                        $prev_post = get_previous_post();
                        $next_post = get_next_post();
                        
                        if ($prev_post || $next_post) :
                        ?>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                                <?php if ($prev_post) : ?>
                                    <div>
                                        <small style="color: hsl(var(--muted-foreground));">Artigo Anterior</small>
                                        <h4><a href="<?php echo get_permalink($prev_post->ID); ?>" style="color: hsl(var(--primary)); text-decoration: none;"><?php echo get_the_title($prev_post->ID); ?></a></h4>
                                    </div>
                                <?php endif; ?>
                                
                                <?php if ($next_post) : ?>
                                    <div style="text-align: right;">
                                        <small style="color: hsl(var(--muted-foreground));">Próximo Artigo</small>
                                        <h4><a href="<?php echo get_permalink($next_post->ID); ?>" style="color: hsl(var(--primary)); text-decoration: none;"><?php echo get_the_title($next_post->ID); ?></a></h4>
                                    </div>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>
                    </div>
                </footer>
            </article>

            <!-- Call to Action -->
            <section style="background: hsl(var(--card)); border-radius: var(--radius); padding: 48px; margin: 64px auto 0; max-width: 800px; text-align: center;">
                <h3 style="margin-bottom: 16px;">Gostou do conteúdo?</h3>
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 32px;">
                    Entre em contato conosco e descubra como a MBG Financeira pode ajudar você.
                </p>
                <a href="<?php echo mbg_get_whatsapp_url('Olá! Li o artigo "' . get_the_title() . '" e gostaria de mais informações.'); ?>" 
                   class="mbg-button" 
                   target="_blank" 
                   rel="noopener noreferrer">
                    Fale Conosco
                </a>
            </section>
        <?php endwhile; ?>
    </main>
</div>

<?php get_footer(); ?>

<?php
// Função para calcular tempo de leitura estimado
function mbg_estimated_reading_time() {
    $content = get_post_field('post_content', get_the_ID());
    $word_count = str_word_count(strip_tags($content));
    $reading_time = ceil($word_count / 200); // Assumindo 200 palavras por minuto
    return $reading_time;
}
?>