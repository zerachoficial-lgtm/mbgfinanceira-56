<?php
/**
 * Specialist Consultation Component
 */

if (!defined('ABSPATH')) {
    exit;
}

function mbg_specialist_consultation() {
    ?>
    <section id="simulacao" class="py-20 bg-card/50 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-gold-radial opacity-5"></div>
        
        <div class="container relative z-10">
            <div class="max-w-4xl mx-auto">
                <div class="bg-card border border-border rounded-lg p-8 md:p-12 shadow-elegant animate-fade-in-up">
                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <!-- Left Content -->
                        <div>
                            <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
                                Fale com um Especialista
                            </h2>
                            <p class="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Nossa equipe de especialistas está pronta para encontrar a melhor solução financeira para seu perfil. 
                                Atendimento personalizado e sem compromisso.
                            </p>
                            
                            <!-- Benefits List -->
                            <div class="space-y-4 mb-8">
                                <div class="flex items-center gap-3">
                                    <div class="w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg class="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M5 13l4 4L19 7"/>
                                        </svg>
                                    </div>
                                    <span class="text-muted-foreground">Análise gratuita do seu perfil</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <div class="w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg class="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M5 13l4 4L19 7"/>
                                        </svg>
                                    </div>
                                    <span class="text-muted-foreground">Simulação personalizada</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <div class="w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg class="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M5 13l4 4L19 7"/>
                                        </svg>
                                    </div>
                                    <span class="text-muted-foreground">Atendimento humanizado</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <div class="w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg class="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M5 13l4 4L19 7"/>
                                        </svg>
                                    </div>
                                    <span class="text-muted-foreground">Resposta em até 24h</span>
                                </div>
                            </div>
                            
                            <!-- CTA Button -->
                            <a href="<?php echo mbg_get_whatsapp_url('Olá! Gostaria de falar com um especialista sobre as soluções financeiras da MBG.'); ?>" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               class="inline-flex items-center justify-center px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-gold-glow hover:scale-105 animate-ripple">
                                Falar com Especialista
                                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M5 12h14m-7-7l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                        
                        <!-- Right Image/Illustration -->
                        <div class="relative">
                            <div class="aspect-square bg-gradient-gold-radial rounded-full p-8 animate-gold-glow">
                                <div class="w-full h-full bg-card rounded-full flex items-center justify-center">
                                    <!-- Specialist Avatar -->
                                    <?php
                                    $specialist_image = get_template_directory_uri() . '/src/assets/specialist-avatar.jpg';
                                    if (file_exists(get_template_directory() . '/src/assets/specialist-avatar.jpg')):
                                    ?>
                                        <img src="<?php echo esc_url($specialist_image); ?>" 
                                             alt="Especialista MBG" 
                                             class="w-full h-full object-cover rounded-full">
                                    <?php else: ?>
                                        <div class="text-8xl">👨‍💼</div>
                                    <?php endif; ?>
                                </div>
                            </div>
                            
                            <!-- Floating Elements -->
                            <div class="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-bounce-in" style="animation-delay: 0.5s">
                                <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                                </svg>
                            </div>
                            
                            <div class="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center animate-bounce-in" style="animation-delay: 1s">
                                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php
}
?>