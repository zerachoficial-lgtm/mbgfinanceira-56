<?php
/**
 * Template Name: Contato
 */

get_header();

// Include components
require_once get_template_directory() . '/inc/components/page-banner.php';
?>

<main>
    <?php mbg_page_banner(
        'Entre em Contato',
        'Estamos aqui para ajudar você a realizar seus objetivos financeiros'
    ); ?>

    <!-- Contact Information -->
    <section class="py-20 bg-background">
        <div class="container">
            <div class="grid md:grid-cols-2 gap-12">
                <!-- Contact Info -->
                <div class="animate-slide-in-left">
                    <h2 class="text-3xl font-bold text-primary mb-8">
                        Fale Conosco
                    </h2>
                    <p class="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Nossa equipe está pronta para atender você da melhor forma possível. 
                        Entre em contato através dos canais abaixo ou preencha o formulário.
                    </p>

                    <div class="space-y-6">
                        <!-- WhatsApp -->
                        <div class="flex items-center gap-4 p-6 bg-card border border-border rounded-lg shadow-elegant hover:shadow-gold-glow transition-all duration-300">
                            <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.486"/>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-primary mb-1">WhatsApp</h3>
                                <p class="text-muted-foreground mb-2">Atendimento rápido e direto</p>
                                <a href="<?php echo mbg_get_whatsapp_url('Olá! Vim através do site e gostaria de mais informações sobre os serviços da MBG.'); ?>" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   class="text-primary hover:text-primary-light transition-colors font-semibold">
                                    +55 <?php 
                                    $whatsapp = get_theme_mod('mbg_whatsapp', '11978419191');
                                    echo substr($whatsapp, 2, 2) . ' ' . substr($whatsapp, 4, 5) . '-' . substr($whatsapp, 9);
                                    ?>
                                </a>
                            </div>
                        </div>

                        <!-- Instagram -->
                        <div class="flex items-center gap-4 p-6 bg-card border border-border rounded-lg shadow-elegant hover:shadow-gold-glow transition-all duration-300">
                            <div class="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-primary mb-1">Instagram</h3>
                                <p class="text-muted-foreground mb-2">Acompanhe nossas novidades</p>
                                <a href="https://instagram.com/<?php echo get_theme_mod('mbg_instagram', 'mbg.financeira'); ?>" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   class="text-primary hover:text-primary-light transition-colors font-semibold">
                                    @<?php echo get_theme_mod('mbg_instagram', 'mbg.financeira'); ?>
                                </a>
                            </div>
                        </div>

                        <!-- Address -->
                        <div class="flex items-center gap-4 p-6 bg-card border border-border rounded-lg shadow-elegant">
                            <div class="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-primary mb-1">Endereço</h3>
                                <p class="text-muted-foreground mb-2">Nosso escritório</p>
                                <p class="text-muted-foreground">
                                    <?php echo get_theme_mod('mbg_address', 'Rua Aparecida, 164 - Canindé/SP'); ?>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="animate-slide-in-right">
                    <div class="bg-card border border-border rounded-lg p-8 shadow-elegant">
                        <h3 class="text-2xl font-bold text-primary mb-6">
                            Envie uma Mensagem
                        </h3>
                        <p class="text-muted-foreground mb-8">
                            Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
                        </p>

                        <form id="contact-form" class="space-y-6">
                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-primary mb-2">
                                        Nome Completo *
                                    </label>
                                    <input type="text" 
                                           id="name" 
                                           name="name" 
                                           required
                                           class="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                                </div>
                                <div>
                                    <label for="phone" class="block text-sm font-medium text-primary mb-2">
                                        Telefone/WhatsApp *
                                    </label>
                                    <input type="tel" 
                                           id="phone" 
                                           name="phone" 
                                           required
                                           placeholder="(11) 99999-9999"
                                           class="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                                </div>
                            </div>

                            <div>
                                <label for="email" class="block text-sm font-medium text-primary mb-2">
                                    E-mail
                                </label>
                                <input type="email" 
                                       id="email" 
                                       name="email"
                                       class="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                            </div>

                            <div>
                                <label for="service" class="block text-sm font-medium text-primary mb-2">
                                    Serviço de Interesse
                                </label>
                                <select id="service" 
                                        name="service"
                                        class="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                                    <option value="">Selecione um serviço</option>
                                    <option value="credito-pessoal">Crédito Pessoal</option>
                                    <option value="poupanca-especial">Poupança Especial</option>
                                    <option value="consultoria">Consultoria Financeira</option>
                                    <option value="outros">Outros</option>
                                </select>
                            </div>

                            <div>
                                <label for="message" class="block text-sm font-medium text-primary mb-2">
                                    Mensagem *
                                </label>
                                <textarea id="message" 
                                          name="message" 
                                          rows="5" 
                                          required
                                          placeholder="Descreva como podemos ajudar você..."
                                          class="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"></textarea>
                            </div>

                            <div class="flex items-center gap-3">
                                <input type="checkbox" 
                                       id="privacy" 
                                       name="privacy" 
                                       required
                                       class="w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary">
                                <label for="privacy" class="text-sm text-muted-foreground">
                                    Concordo com os <a href="#" class="text-primary hover:text-primary-light transition-colors">termos de privacidade</a> *
                                </label>
                            </div>

                            <button type="submit" 
                                    class="w-full px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-gold-glow hover:scale-105 animate-ripple">
                                Enviar Mensagem
                                <svg class="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M5 12h14m-7-7l7 7-7 7"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-secondary/5">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up">
                    Perguntas Frequentes
                </h2>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
                    Tire suas dúvidas sobre nossos serviços
                </p>
            </div>

            <div class="max-w-4xl mx-auto">
                <div class="space-y-4">
                    <?php
                    $faqs = [
                        [
                            'question' => 'Qual o prazo para aprovação do crédito?',
                            'answer' => 'Nossa análise é feita em até 24 horas úteis. Em casos simples, a aprovação pode sair no mesmo dia.'
                        ],
                        [
                            'question' => 'Como funciona o pagamento semanal?',
                            'answer' => 'O valor total do empréstimo é dividido em parcelas semanais, facilitando o pagamento para quem tem renda irregular ou prefere parcelas menores.'
                        ],
                        [
                            'question' => 'Posso antecipar as parcelas?',
                            'answer' => 'Sim! Você pode antecipar parcelas ou quitar o empréstimo a qualquer momento, com desconto proporcional dos juros.'
                        ],
                        [
                            'question' => 'A poupança especial é segura?',
                            'answer' => 'Absolutamente. Trabalhamos com instituições financeiras regulamentadas e todos os investimentos são devidamente registrados.'
                        ],
                        [
                            'question' => 'Há custo de abertura ou manutenção?',
                            'answer' => 'Não cobramos qualquer custo de abertura, manutenção ou análise. Nossa política é transparência total.'
                        ]
                    ];

                    foreach ($faqs as $index => $faq):
                    ?>
                    <div class="bg-card border border-border rounded-lg animate-fade-in-up" style="animation-delay: <?php echo $index * 0.1; ?>s">
                        <button class="faq-toggle w-full text-left p-6 flex items-center justify-between focus:outline-none" data-target="faq-<?php echo $index; ?>">
                            <span class="font-semibold text-primary"><?php echo esc_html($faq['question']); ?></span>
                            <svg class="w-5 h-5 text-primary transition-transform faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>
                        <div class="faq-content hidden px-6 pb-6">
                            <p class="text-muted-foreground leading-relaxed"><?php echo esc_html($faq['answer']); ?></p>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

</main>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Toggle
    const faqToggles = document.querySelectorAll('.faq-toggle');
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const content = document.getElementById(targetId)?.nextElementSibling || this.nextElementSibling;
            const icon = this.querySelector('.faq-icon');
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Format WhatsApp message
            const message = `Olá! Vim através do site da MBG Financeira.

*Nome:* ${data.name}
*Telefone:* ${data.phone}
*E-mail:* ${data.email || 'Não informado'}
*Serviço:* ${data.service || 'Não especificado'}

*Mensagem:*
${data.message}`;

            const whatsappUrl = `<?php echo mbg_get_whatsapp_url(''); ?>` + encodeURIComponent(message);
            window.open(whatsappUrl, '_blank');
            
            // Reset form
            this.reset();
            alert('Redirecionando para o WhatsApp...');
        });
    }

    // Phone mask
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            e.target.value = value;
        });
    }
});
</script>

<?php get_footer(); ?>