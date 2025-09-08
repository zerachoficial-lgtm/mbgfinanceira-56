<?php
/**
 * Page Banner Component
 */

if (!defined('ABSPATH')) {
    exit;
}

function mbg_page_banner($title, $subtitle = '') {
    ?>
    <section class="page-banner relative py-20 md:py-32 overflow-hidden min-h-[50vh] flex items-center">
        <div class="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75"></div>
        <div class="absolute inset-0 bg-gradient-gold-radial opacity-15"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
        
        <div class="container relative z-10">
            <div class="text-center max-w-4xl mx-auto">
                <h1 class="mb-6 animate-fade-in-up text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                    <?php echo esc_html($title); ?>
                </h1>
                <?php if ($subtitle): ?>
                <p class="text-xl md:text-2xl text-muted-foreground animate-fade-in-up" style="animation-delay: 0.2s">
                    <?php echo esc_html($subtitle); ?>
                </p>
                <?php endif; ?>
            </div>
        </div>
    </section>
    <?php
}
?>