<?php
/**
 * Service Card Component
 */

if (!defined('ABSPATH')) {
    exit;
}

function mbg_service_card($icon, $title, $description, $href = '#', $button_text = 'Saiba Mais', $extra_classes = '') {
    ?>
    <div class="service-card group bg-card border border-border rounded-lg p-8 shadow-elegant hover:shadow-gold-glow transition-all duration-300 animate-hover-lift <?php echo esc_attr($extra_classes); ?>">
        <div class="w-20 h-20 bg-gradient-gold-radial rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <?php echo $icon; ?>
        </div>
        
        <h3 class="text-2xl font-bold text-primary mb-4 group-hover:text-primary-light transition-colors">
            <?php echo esc_html($title); ?>
        </h3>
        
        <p class="text-muted-foreground leading-relaxed mb-6">
            <?php echo esc_html($description); ?>
        </p>
        
        <a href="<?php echo esc_url($href); ?>" 
           class="inline-flex items-center justify-center px-6 py-3 bg-gradient-gold text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-gold-glow hover:scale-105 animate-ripple">
            <?php echo esc_html($button_text); ?>
            <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 12h14m-7-7l7 7-7 7"/>
            </svg>
        </a>
    </div>
    <?php
}
?>