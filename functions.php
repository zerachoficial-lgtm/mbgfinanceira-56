<?php
/**
 * MBG Financeira Theme Functions
 */

// Impedir acesso direto
if (!defined('ABSPATH')) {
    exit;
}

// Configuração do tema
function mbg_theme_setup() {
    // Suporte a título dinâmico
    add_theme_support('title-tag');
    
    // Suporte a imagens destacadas
    add_theme_support('post-thumbnails');
    
    // Suporte a menus
    add_theme_support('menus');
    
    // Suporte ao editor de blocos
    add_theme_support('wp-block-styles');
    add_theme_support('responsive-embeds');
    
    // Registrar menus
    register_nav_menus(array(
        'header-menu' => 'Menu Principal',
        'footer-menu' => 'Menu do Rodapé'
    ));
    
    // Tamanhos de imagem personalizados
    add_image_size('hero-image', 1920, 1080, true);
    add_image_size('service-image', 400, 300, true);
    add_image_size('testimonial-avatar', 80, 80, true);
}
add_action('after_setup_theme', 'mbg_theme_setup');

// Enfileirar estilos e scripts
function mbg_enqueue_assets() {
    // CSS principal
    wp_enqueue_style('mbg-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Google Fonts
    wp_enqueue_style('mbg-fonts', 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap', array(), null);
    
    // Scripts
    wp_enqueue_script('mbg-main', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', true);
    
    // Localizar script para AJAX
    wp_localize_script('mbg-main', 'mbg_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('mbg_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'mbg_enqueue_assets');

// Registrar áreas de widgets
function mbg_widgets_init() {
    register_sidebar(array(
        'name' => 'Sidebar Principal',
        'id' => 'main-sidebar',
        'description' => 'Aparece na lateral das páginas',
        'before_widget' => '<div class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    
    register_sidebar(array(
        'name' => 'Footer',
        'id' => 'footer-widgets',
        'description' => 'Área de widgets do rodapé',
        'before_widget' => '<div class="footer-widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="footer-widget-title">',
        'after_title' => '</h4>',
    ));
}
add_action('widgets_init', 'mbg_widgets_init');

// Customizer
function mbg_customize_register($wp_customize) {
    // Seção de informações da empresa
    $wp_customize->add_section('mbg_company_info', array(
        'title' => 'Informações da Empresa',
        'priority' => 30,
    ));
    
    // WhatsApp
    $wp_customize->add_setting('mbg_whatsapp', array(
        'default' => '5511978419191',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('mbg_whatsapp', array(
        'label' => 'Número do WhatsApp',
        'section' => 'mbg_company_info',
        'type' => 'text',
    ));
    
    // Endereço
    $wp_customize->add_setting('mbg_address', array(
        'default' => 'Rua Aparecida, 164 - Canindé/SP',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('mbg_address', array(
        'label' => 'Endereço',
        'section' => 'mbg_company_info',
        'type' => 'text',
    ));
    
    // Instagram
    $wp_customize->add_setting('mbg_instagram', array(
        'default' => 'mbg.financeira',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('mbg_instagram', array(
        'label' => 'Instagram (sem @)',
        'section' => 'mbg_company_info',
        'type' => 'text',
    ));
    
    // CNPJ
    $wp_customize->add_setting('mbg_cnpj', array(
        'default' => '62.051.162/0001-06',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('mbg_cnpj', array(
        'label' => 'CNPJ',
        'section' => 'mbg_company_info',
        'type' => 'text',
    ));
}
add_action('customize_register', 'mbg_customize_register');

// Função para obter URL do WhatsApp
function mbg_get_whatsapp_url($text = 'Olá! Gostaria de saber mais sobre os serviços da MBG Financeira.') {
    $whatsapp = get_theme_mod('mbg_whatsapp', '5511978419191');
    return 'https://wa.me/' . $whatsapp . '?text=' . urlencode($text);
}

// Shortcode para botão do WhatsApp
function mbg_whatsapp_button_shortcode($atts) {
    $atts = shortcode_atts(array(
        'text' => 'Fale Conosco',
        'message' => 'Olá! Gostaria de saber mais sobre os serviços da MBG Financeira.',
        'class' => 'mbg-button'
    ), $atts);
    
    $url = mbg_get_whatsapp_url($atts['message']);
    
    return '<a href="' . esc_url($url) . '" target="_blank" rel="noopener noreferrer" class="' . esc_attr($atts['class']) . '">' . esc_html($atts['text']) . '</a>';
}
add_shortcode('mbg_whatsapp', 'mbg_whatsapp_button_shortcode');

// Post Types Customizados
function mbg_register_post_types() {
    // Depoimentos
    register_post_type('testimonials', array(
        'labels' => array(
            'name' => 'Depoimentos',
            'singular_name' => 'Depoimento',
            'add_new' => 'Adicionar Novo',
            'add_new_item' => 'Adicionar Novo Depoimento',
            'edit_item' => 'Editar Depoimento',
            'new_item' => 'Novo Depoimento',
            'view_item' => 'Ver Depoimento',
            'search_items' => 'Buscar Depoimentos',
            'not_found' => 'Nenhum depoimento encontrado',
            'not_found_in_trash' => 'Nenhum depoimento na lixeira'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-testimonial',
        'rewrite' => array('slug' => 'depoimentos'),
    ));
    
    // Serviços
    register_post_type('services', array(
        'labels' => array(
            'name' => 'Serviços',
            'singular_name' => 'Serviço',
            'add_new' => 'Adicionar Novo',
            'add_new_item' => 'Adicionar Novo Serviço',
            'edit_item' => 'Editar Serviço',
            'new_item' => 'Novo Serviço',
            'view_item' => 'Ver Serviço',
            'search_items' => 'Buscar Serviços',
            'not_found' => 'Nenhum serviço encontrado',
            'not_found_in_trash' => 'Nenhum serviço na lixeira'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-portfolio',
        'rewrite' => array('slug' => 'servicos'),
    ));
}
add_action('init', 'mbg_register_post_types');

// Meta boxes para depoimentos
function mbg_add_testimonial_meta_boxes() {
    add_meta_box(
        'testimonial-details',
        'Detalhes do Depoimento',
        'mbg_testimonial_meta_box_callback',
        'testimonials',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'mbg_add_testimonial_meta_boxes');

function mbg_testimonial_meta_box_callback($post) {
    wp_nonce_field('mbg_testimonial_nonce', 'mbg_testimonial_nonce_field');
    
    $client_name = get_post_meta($post->ID, '_client_name', true);
    $client_location = get_post_meta($post->ID, '_client_location', true);
    $rating = get_post_meta($post->ID, '_rating', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="client_name">Nome do Cliente:</label></th>';
    echo '<td><input type="text" id="client_name" name="client_name" value="' . esc_attr($client_name) . '" class="regular-text" /></td></tr>';
    echo '<tr><th><label for="client_location">Localização:</label></th>';
    echo '<td><input type="text" id="client_location" name="client_location" value="' . esc_attr($client_location) . '" class="regular-text" /></td></tr>';
    echo '<tr><th><label for="rating">Avaliação (1-5):</label></th>';
    echo '<td><select id="rating" name="rating">';
    for ($i = 1; $i <= 5; $i++) {
        echo '<option value="' . $i . '"' . selected($rating, $i, false) . '>' . $i . ' estrela' . ($i > 1 ? 's' : '') . '</option>';
    }
    echo '</select></td></tr>';
    echo '</table>';
}

function mbg_save_testimonial_meta($post_id) {
    if (!isset($_POST['mbg_testimonial_nonce_field']) || !wp_verify_nonce($_POST['mbg_testimonial_nonce_field'], 'mbg_testimonial_nonce')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    if (isset($_POST['client_name'])) {
        update_post_meta($post_id, '_client_name', sanitize_text_field($_POST['client_name']));
    }
    
    if (isset($_POST['client_location'])) {
        update_post_meta($post_id, '_client_location', sanitize_text_field($_POST['client_location']));
    }
    
    if (isset($_POST['rating'])) {
        update_post_meta($post_id, '_rating', intval($_POST['rating']));
    }
}
add_action('save_post', 'mbg_save_testimonial_meta');

// Função para exibir depoimentos
function mbg_get_testimonials($limit = 3) {
    $testimonials = get_posts(array(
        'post_type' => 'testimonials',
        'posts_per_page' => $limit,
        'post_status' => 'publish',
        'orderby' => 'date',
        'order' => 'DESC'
    ));
    
    return $testimonials;
}

// Função para exibir avaliação em estrelas
function mbg_display_rating($rating) {
    $output = '<div class="rating">';
    for ($i = 1; $i <= 5; $i++) {
        if ($i <= $rating) {
            $output .= '<span class="star filled">★</span>';
        } else {
            $output .= '<span class="star">☆</span>';
        }
    }
    $output .= '</div>';
    return $output;
}

// Remover versão do WordPress
remove_action('wp_head', 'wp_generator');

// Segurança adicional
function mbg_remove_wp_version() {
    return '';
}
add_filter('the_generator', 'mbg_remove_wp_version');

// Otimização de velocidade
function mbg_remove_unused_assets() {
    // Remover emoji scripts
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('admin_print_styles', 'print_emoji_styles');
    
    // Remover jQuery Migrate
    function mbg_remove_jquery_migrate($scripts) {
        if (!is_admin() && isset($scripts->registered['jquery'])) {
            $script = $scripts->registered['jquery'];
            if ($script->deps) {
                $script->deps = array_diff($script->deps, array('jquery-migrate'));
            }
        }
    }
    add_action('wp_default_scripts', 'mbg_remove_jquery_migrate');
}
add_action('init', 'mbg_remove_unused_assets');