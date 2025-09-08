<?php
/**
 * Feature Card Component
 */

if (!defined('ABSPATH')) {
    exit;
}

function mbg_feature_card($icon, $title, $description, $extra_classes = '') {
    ?>
    <div class="feature-card group bg-card border border-border rounded-lg p-8 text-center hover:shadow-elegant transition-all duration-300 animate-hover-lift <?php echo esc_attr($extra_classes); ?>">
        <div class="w-16 h-16 bg-gradient-gold-radial rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gold group-hover:scale-110 transition-transform duration-300">
            <?php echo $icon; ?>
        </div>
        <h3 class="text-xl font-semibold text-primary mb-4 group-hover:text-primary-light transition-colors">
            <?php echo esc_html($title); ?>
        </h3>
        <p class="text-muted-foreground leading-relaxed">
            <?php echo esc_html($description); ?>
        </p>
    </div>
    <?php
}

function mbg_get_icon($icon_name, $size = 8) {
    $icons = [
        'calculator' => '<svg class="w-' . $size . ' h-' . $size . ' text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="12" y2="18"/></svg>',
        'check-circle' => '<svg class="w-' . $size . ' h-' . $size . ' text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
        'dollar-sign' => '<svg class="w-' . $size . ' h-' . $size . ' text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
        'clock' => '<svg class="w-' . $size . ' h-' . $size . ' text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>',
        'shield' => '<svg class="w-' . $size . ' h-' . $size . ' text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
        'trending-up' => '<svg class="w-' . $size . ' h-' . $size . ' text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/><polyline points="17,6 23,6 23,12"/></svg>',
        'zap' => '<svg class="w-' . $size . ' h-' . $size . ' text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>',
        'gift' => '<svg class="w-' . $size . ' h-' . $size . ' text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20,12 20,22 4,22 4,12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12,7H7.5a2.5,2.5 0 0,1 0,-5C11,2 12,7 12,7z"/><path d="M12,7h4.5a2.5,2.5 0 0,0 0,-5C13,2 12,7 12,7z"/></svg>',
        'users' => '<svg class="w-' . $size . ' h-' . $size . ' text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>',
        'file-text' => '<svg class="w-' . $size . ' h-' . $size . ' text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2Z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>',
        'map-pin' => '<svg class="w-' . $size . ' h-' . $size . ' text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
        'award' => '<svg class="w-' . $size . ' h-' . $size . ' text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/></svg>'
    ];
    
    return isset($icons[$icon_name]) ? $icons[$icon_name] : '';
}
?>