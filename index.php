<?php
/**
 * Template principal - Página inicial da MBG Financeira
 */

get_header(); ?>

<!-- Hero Section -->
<section class="hero-section">
    <div class="hero-background" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/hero-bg-professional.jpg');"></div>
    <div class="hero-overlay"></div>
    <div class="container">
        <div class="hero-content">
            <h1 class="hero-title">
                BEM-VINDO(A) À<br>
                <span class="gradient-text">MBG FINANCEIRA</span>
            </h1>
            <p class="hero-subtitle">
                Crédito Simples e Poupança Segura.<br>
                Soluções financeiras sem burocracia para transformar seus planos em realidade.
            </p>
            <a href="<?php echo mbg_get_whatsapp_url('Gostaria de simular um crédito!'); ?>" 
               class="mbg-button mbg-button-xl" 
               target="_blank" 
               rel="noopener noreferrer">
                Simule seu Crédito Agora
            </a>
        </div>
    </div>
</section>

<!-- Services Section -->
<section class="section section-alt">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Soluções Financeiras ao seu Alcance</h2>
            <p class="section-description">
                Oferecemos produtos financeiros pensados para facilitar sua vida e realizar seus sonhos.
            </p>
        </div>
        
        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                        <line x1="1" y1="10" x2="23" y2="10"/>
                    </svg>
                </div>
                <h3>Crédito Facilitado</h3>
                <p>Acesse o crédito que você precisa com pagamentos semanais flexíveis e taxas justas. Processo rápido e sem complicação.</p>
                <a href="<?php echo home_url('/credito-pessoal'); ?>" class="mbg-button">Saiba Mais</a>
            </div>
            
            <div class="service-card">
                <div class="service-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                </div>
                <h3>Poupança Especial</h3>
                <p>Multiplique seus lucros. Faça seu dinheiro render com total segurança e garantia. Rentabilidade superior à poupança tradicional.</p>
                <a href="<?php echo home_url('/poupanca-especial'); ?>" class="mbg-button">Saiba Mais</a>
            </div>
        </div>
    </div>
</section>

<!-- Features Section -->
<section class="section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Vantagens que só a MBG Oferece</h2>
            <p class="section-description">
                Descubra por que somos a escolha certa para suas necessidades financeiras.
            </p>
        </div>
        
        <div class="features-grid">
            <div class="feature-card">
                <div class="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22,4 12,14.01 9,11.01"/>
                    </svg>
                </div>
                <h3>Sem Burocracia</h3>
                <p>Processo simplificado e ágil. Menos papelada, mais agilidade para você.</p>
            </div>
            
            <div class="feature-card">
                <div class="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                    </svg>
                </div>
                <h3>Pagamento Semanal Flexível</h3>
                <p>Parcelas semanais que se adaptam ao seu orçamento e fluxo de renda.</p>
            </div>
            
            <div class="feature-card">
                <div class="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20,12 20,22 4,22 4,12"/>
                        <rect x="2" y="7" width="20" height="5"/>
                        <line x1="12" y1="22" x2="12" y2="7"/>
                        <path d="m12 7 3-3H9l3 3z"/>
                    </svg>
                </div>
                <h3>Programa de Vantagens Exclusivo</h3>
                <p>Sorteios mensais e benefícios exclusivos para nossos clientes fiéis.</p>
            </div>
            
            <div class="feature-card">
                <div class="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                </div>
                <h3>Segurança e Confiança</h3>
                <p>Operações 100% seguras com total transparência em todas as condições.</p>
            </div>
        </div>
    </div>
</section>

<!-- Testimonials Section -->
<section class="section section-alt">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">A Confiança dos Nossos Clientes</h2>
            <p class="section-description">
                Veja o que nossos clientes dizem sobre os nossos serviços e resultados.
            </p>
        </div>
        
        <div class="testimonials-grid">
            <?php
            $testimonials = mbg_get_testimonials(3);
            if (!empty($testimonials)) :
                foreach ($testimonials as $testimonial) :
                    $client_name = get_post_meta($testimonial->ID, '_client_name', true);
                    $client_location = get_post_meta($testimonial->ID, '_client_location', true);
                    $rating = get_post_meta($testimonial->ID, '_rating', true);
            ?>
                <div class="testimonial-card">
                    <?php echo mbg_display_rating($rating); ?>
                    <p>"<?php echo esc_html($testimonial->post_content); ?>"</p>
                    <div class="testimonial-author">
                        <strong><?php echo esc_html($client_name); ?></strong><br>
                        <small><?php echo esc_html($client_location); ?></small>
                    </div>
                </div>
            <?php 
                endforeach;
            else :
                // Depoimentos padrão se não houver cadastrados
            ?>
                <div class="testimonial-card">
                    <div class="rating">
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                    </div>
                    <p>"A MBG me ajudou em um momento muito difícil. O processo foi rápido e sem burocracia. Recomendo de olhos fechados!"</p>
                    <div class="testimonial-author">
                        <strong>Maria Silva</strong><br>
                        <small>São Paulo, SP</small>
                    </div>
                </div>
                
                <div class="testimonial-card">
                    <div class="rating">
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                    </div>
                    <p>"Excelente atendimento e condições justas. Com a poupança especial consegui multiplicar minha reserva de emergência."</p>
                    <div class="testimonial-author">
                        <strong>João Santos</strong><br>
                        <small>Guarulhos, SP</small>
                    </div>
                </div>
                
                <div class="testimonial-card">
                    <div class="rating">
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                    </div>
                    <p>"Transparência total e pagamentos semanais que cabem no meu orçamento. A MBG realmente pensa no cliente."</p>
                    <div class="testimonial-author">
                        <strong>Ana Costa</strong><br>
                        <small>Osasco, SP</small>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </div>
</section>

<!-- Specialist Consultation Section -->
<section class="section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Fale com um Especialista</h2>
            <p class="section-description">
                Nossa equipe está pronta para te atender e encontrar a melhor solução para suas necessidades.
            </p>
        </div>
        
        <div style="max-width: 600px; margin: 0 auto; text-align: center;">
            <div style="background: hsl(var(--card)); border: 1px solid hsl(var(--border)); border-radius: var(--radius); padding: 32px;">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/specialist-avatar.jpg" 
                     alt="Especialista MBG" 
                     style="width: 100px; height: 100px; border-radius: 50%; margin: 0 auto 16px; display: block;">
                <h3 style="margin-bottom: 8px;">💬 Dúvidas? Fale com um especialista</h3>
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 24px;">
                    Tire suas dúvidas e descubra qual a melhor opção para você.
                </p>
                <a href="<?php echo mbg_get_whatsapp_url('Olá! Gostaria de falar com um especialista sobre os serviços da MBG Financeira.'); ?>" 
                   class="mbg-button" 
                   target="_blank" 
                   rel="noopener noreferrer">
                    Falar Agora
                </a>
            </div>
        </div>
    </div>
</section>

<!-- CTA Final Section -->
<section class="section section-alt">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Pronto para começar?</h2>
            <p class="section-description">
                Fale com um de nossos especialistas e descubra a melhor solução para você. 
                Estamos aqui para transformar seus planos em realidade.
            </p>
            <a href="<?php echo mbg_get_whatsapp_url(); ?>" 
               class="mbg-button mbg-button-xl" 
               target="_blank" 
               rel="noopener noreferrer">
                Fale Conosco pelo WhatsApp
            </a>
        </div>
    </div>
</section>

<?php get_footer(); ?>