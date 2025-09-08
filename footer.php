    <footer class="site-footer">
        <div class="container">
            <div class="footer-content">
                <!-- Logo and Company Info -->
                <div class="footer-section">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
                        <?php 
                        $custom_logo_id = get_theme_mod('custom_logo');
                        if ($custom_logo_id) :
                            $logo_url = wp_get_attachment_image_url($custom_logo_id, 'full');
                        ?>
                            <img src="<?php echo esc_url($logo_url); ?>" alt="<?php bloginfo('name'); ?>" style="width: 64px; height: 64px; object-fit: contain;">
                        <?php else : ?>
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/logo.png" alt="MBG Financeira" style="width: 64px; height: 64px; object-fit: contain;">
                        <?php endif; ?>
                        <span style="font-size: 1.25rem; font-weight: bold; color: hsl(var(--primary));">
                            <?php bloginfo('name'); ?>
                        </span>
                    </div>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 16px; max-width: 400px;">
                        Soluções financeiras descomplicadas para transformar seus planos em realidade. 
                        Crédito simples e poupança segura com total transparência.
                    </p>
                    <div style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">
                        <p>MBG Intermediações e Finanças LTDA</p>
                        <p>CNPJ: <?php echo get_theme_mod('mbg_cnpj', '62.051.162/0001-06'); ?></p>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="footer-section">
                    <h4>Links Rápidos</h4>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer-menu',
                        'menu_class' => 'footer-links',
                        'container' => false,
                        'fallback_cb' => 'mbg_footer_fallback_menu'
                    ));
                    ?>
                </div>

                <!-- Contact Info -->
                <div class="footer-section">
                    <h4>Contato</h4>
                    <ul class="footer-links" style="list-style: none;">
                        <li style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: hsl(var(--primary));">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            <a href="<?php echo mbg_get_whatsapp_url(); ?>" target="_blank" rel="noopener noreferrer" style="color: hsl(var(--muted-foreground)); text-decoration: none;">
                                +55 <?php 
                                $whatsapp = get_theme_mod('mbg_whatsapp', '11978419191');
                                echo substr($whatsapp, 2, 2) . ' ' . substr($whatsapp, 4, 5) . '-' . substr($whatsapp, 9);
                                ?>
                            </a>
                        </li>
                        <li style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: hsl(var(--primary));">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            <span style="color: hsl(var(--muted-foreground));"><?php echo get_theme_mod('mbg_address', 'Rua Aparecida, 164 - Canindé/SP'); ?></span>
                        </li>
                        <li style="display: flex; align-items: center; gap: 8px;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: hsl(var(--primary));">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                            <a href="https://instagram.com/<?php echo get_theme_mod('mbg_instagram', 'mbg.financeira'); ?>" target="_blank" rel="noopener noreferrer" style="color: hsl(var(--muted-foreground)); text-decoration: none;">
                                @<?php echo get_theme_mod('mbg_instagram', 'mbg.financeira'); ?>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Widget Area -->
                <?php if (is_active_sidebar('footer-widgets')) : ?>
                <div class="footer-section">
                    <?php dynamic_sidebar('footer-widgets'); ?>
                </div>
                <?php endif; ?>
            </div>

            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> MBG Intermediações e Finanças LTDA. Todos os direitos reservados.</p>
                <p style="margin-top: 8px;">
                    Desenvolvido com 💛 para transformar vidas através de soluções financeiras inteligentes.
                </p>
            </div>
        </div>
    </footer>

    <!-- WhatsApp Float Button -->
    <div id="whatsapp-float" style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;">
        <a href="<?php echo mbg_get_whatsapp_url('Olá! Vim através do site e gostaria de mais informações.'); ?>" 
           target="_blank" 
           rel="noopener noreferrer"
           style="display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; background: #25D366; border-radius: 50%; color: white; text-decoration: none; box-shadow: 0 4px 12px rgba(0,0,0,0.3); transition: transform 0.3s;">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.486"/>
            </svg>
        </a>
    </div>

    <?php wp_footer(); ?>

    <script>
    // Mobile menu toggle
    document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuToggle && mobileMenu) {
            mobileMenuToggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
                this.classList.toggle('active');
            });
        }

        // WhatsApp float animation
        const whatsappFloat = document.getElementById('whatsapp-float');
        if (whatsappFloat) {
            whatsappFloat.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
            });
            
            whatsappFloat.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    });
    </script>

</body>
</html>

<?php
// Footer menu fallback
function mbg_footer_fallback_menu() {
    echo '<ul class="footer-links">';
    echo '<li><a href="' . home_url() . '">Home</a></li>';
    echo '<li><a href="' . home_url('/sobre') . '">Sobre Nós</a></li>';
    echo '<li><a href="' . home_url('/credito-pessoal') . '">Crédito Pessoal</a></li>';
    echo '<li><a href="' . home_url('/poupanca-especial') . '">Poupança Especial</a></li>';
    echo '<li><a href="' . home_url('/vantagens') . '">Vantagens</a></li>';
    echo '<li><a href="' . home_url('/blog') . '">Blog</a></li>';
    echo '</ul>';
}
?>