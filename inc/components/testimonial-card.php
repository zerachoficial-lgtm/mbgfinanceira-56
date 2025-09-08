<?php
/**
 * Testimonial Card Component
 */

if (!defined('ABSPATH')) {
    exit;
}

function mbg_testimonial_card($name, $location, $testimonial, $rating = 5, $extra_classes = '') {
    ?>
    <div class="testimonial-card group bg-card border border-border rounded-lg p-8 shadow-elegant hover:shadow-gold-glow transition-all duration-300 animate-hover-lift <?php echo esc_attr($extra_classes); ?>">
        <!-- Rating Stars -->
        <div class="flex items-center gap-1 mb-4">
            <?php for ($i = 1; $i <= 5; $i++): ?>
                <svg class="w-5 h-5 <?php echo $i <= $rating ? 'text-primary' : 'text-muted'; ?>" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
            <?php endfor; ?>
        </div>
        
        <!-- Testimonial Quote -->
        <blockquote class="text-muted-foreground leading-relaxed mb-6 relative">
            <svg class="absolute -top-2 -left-2 w-8 h-8 text-primary/20" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8v8c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4v-4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.209 0 4-1.791 4-4v-8h4v-4h-4zM30 8v8c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4v-4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.209 0 4-1.791 4-4v-8h4v-4h-4z"/>
            </svg>
            "<?php echo esc_html($testimonial); ?>"
        </blockquote>
        
        <!-- Client Info -->
        <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-gradient-gold-radial rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                <?php echo strtoupper(substr($name, 0, 1)); ?>
            </div>
            <div>
                <div class="font-semibold text-primary">
                    <?php echo esc_html($name); ?>
                </div>
                <div class="text-sm text-muted-foreground">
                    <?php echo esc_html($location); ?>
                </div>
            </div>
        </div>
    </div>
    <?php
}

function mbg_get_testimonials_cards($limit = 3) {
    $testimonials = mbg_get_testimonials($limit);
    
    if (empty($testimonials)) {
        // Fallback testimonials se não houver posts
        $default_testimonials = [
            [
                'name' => 'Maria Silva',
                'location' => 'São Paulo, SP',
                'testimonial' => 'A MBG me ajudou em um momento muito difícil. O processo foi rápido e sem burocracia. Recomendo de olhos fechados!',
                'rating' => 5
            ],
            [
                'name' => 'João Santos',
                'location' => 'Guarulhos, SP',
                'testimonial' => 'Excelente atendimento e condições justas. Com a poupança especial consegui multiplicar minha reserva de emergência.',
                'rating' => 5
            ],
            [
                'name' => 'Ana Costa',
                'location' => 'Osasco, SP',
                'testimonial' => 'Transparência total e pagamentos semanais que cabem no meu orçamento. A MBG realmente pensa no cliente.',
                'rating' => 5
            ]
        ];
        
        foreach ($default_testimonials as $testimonial) {
            mbg_testimonial_card(
                $testimonial['name'],
                $testimonial['location'],
                $testimonial['testimonial'],
                $testimonial['rating']
            );
        }
    } else {
        foreach ($testimonials as $testimonial) {
            $name = get_post_meta($testimonial->ID, '_client_name', true) ?: $testimonial->post_title;
            $location = get_post_meta($testimonial->ID, '_client_location', true) ?: 'São Paulo, SP';
            $content = $testimonial->post_content ?: $testimonial->post_excerpt;
            $rating = get_post_meta($testimonial->ID, '_rating', true) ?: 5;
            
            mbg_testimonial_card($name, $location, $content, $rating);
        }
    }
}
?>