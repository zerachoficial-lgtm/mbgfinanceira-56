<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="MBG Financeira - Soluções financeiras sem burocracia. Crédito simples e poupança segura para transformar seus planos em realidade.">
    <meta name="keywords" content="crédito pessoal, empréstimo, poupança, financeira, São Paulo, pagamento semanal">
    <meta name="author" content="MBG Financeira">
    
    <!-- Open Graph -->
    <meta property="og:title" content="<?php wp_title('|', true, 'right'); ?>">
    <meta property="og:description" content="Soluções financeiras sem burocracia. Crédito simples e poupança segura.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo home_url(); ?>">
    <meta property="og:site_name" content="MBG Financeira">
    
    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        "name": "MBG Financeira",
        "description": "Soluções financeiras sem burocracia para crédito pessoal e poupança",
        "url": "<?php echo home_url(); ?>",
        "telephone": "+55<?php echo get_theme_mod('mbg_whatsapp', '11978419191'); ?>",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "<?php echo get_theme_mod('mbg_address', 'Rua Aparecida, 164'); ?>",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "addressCountry": "BR"
        },
        "sameAs": [
            "https://instagram.com/<?php echo get_theme_mod('mbg_instagram', 'mbg.financeira'); ?>"
        ]
    }
    </script>
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container">
        <div class="header-content">
            <!-- Logo -->
            <a href="<?php echo home_url(); ?>" class="logo">
                <?php 
                $custom_logo_id = get_theme_mod('custom_logo');
                if ($custom_logo_id) :
                    $logo_url = wp_get_attachment_image_url($custom_logo_id, 'full');
                ?>
                    <img src="<?php echo esc_url($logo_url); ?>" alt="<?php bloginfo('name'); ?>">
                <?php else : ?>
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/logo.png" alt="MBG Financeira">
                <?php endif; ?>
                <span class="logo-text"><?php bloginfo('name'); ?></span>
            </a>

            <!-- Desktop Navigation -->
            <nav class="main-navigation">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'header-menu',
                    'menu_class' => 'nav-menu',
                    'container' => false,
                    'fallback_cb' => 'mbg_fallback_menu'
                ));
                ?>
            </nav>

            <!-- CTA Button -->
            <div class="md-block">
                <a href="<?php echo mbg_get_whatsapp_url(); ?>" 
                   class="mbg-button" 
                   target="_blank" 
                   rel="noopener noreferrer">
                    Fale Conosco
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <button class="mobile-menu-toggle md:hidden" id="mobile-menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div class="mobile-menu hidden" id="mobile-menu">
            <nav class="mobile-navigation">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'header-menu',
                    'menu_class' => 'mobile-nav-menu',
                    'container' => false,
                    'fallback_cb' => 'mbg_fallback_menu'
                ));
                ?>
                <div class="mobile-cta">
                    <a href="<?php echo mbg_get_whatsapp_url(); ?>" 
                       class="mbg-button" 
                       target="_blank" 
                       rel="noopener noreferrer">
                        Fale Conosco
                    </a>
                </div>
            </nav>
        </div>
    </div>
</header>

<?php
// Menu fallback se não houver menu definido
function mbg_fallback_menu() {
    echo '<ul class="nav-menu">';
    echo '<li><a href="' . home_url() . '">Home</a></li>';
    echo '<li><a href="' . home_url('/sobre') . '">Sobre Nós</a></li>';
    echo '<li><a href="' . home_url('/credito-pessoal') . '">Crédito Pessoal</a></li>';
    echo '<li><a href="' . home_url('/poupanca-especial') . '">Poupança Especial</a></li>';
    echo '<li><a href="' . home_url('/vantagens') . '">Vantagens</a></li>';
    echo '<li><a href="' . home_url('/blog') . '">Blog</a></li>';
    echo '<li><a href="' . home_url('/contato') . '">Contato</a></li>';
    echo '</ul>';
}
?>