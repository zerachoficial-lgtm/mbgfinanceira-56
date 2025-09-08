<?php
/**
 * Template para páginas individuais
 */

get_header(); ?>

<div class="container">
    <main class="main-content" style="padding: 80px 0;">
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="page-header" style="text-align: center; margin-bottom: 48px;">
                    <h1 class="page-title"><?php the_title(); ?></h1>
                    <?php if (get_the_excerpt()) : ?>
                        <p class="page-excerpt" style="color: hsl(var(--muted-foreground)); font-size: 1.125rem; max-width: 600px; margin: 16px auto 0;">
                            <?php the_excerpt(); ?>
                        </p>
                    <?php endif; ?>
                </header>

                <div class="page-content" style="max-width: 800px; margin: 0 auto;">
                    <?php
                    the_content();

                    wp_link_pages(array(
                        'before' => '<div class="page-links">',
                        'after'  => '</div>',
                    ));
                    ?>
                </div>
            </article>
        <?php endwhile; ?>
    </main>
</div>

<?php get_footer(); ?>