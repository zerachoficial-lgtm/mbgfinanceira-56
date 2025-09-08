<?php
/**
 * Template Name: Poupança Especial
 */

get_header();

// Include components
require_once get_template_directory() . '/inc/components/page-banner.php';
require_once get_template_directory() . '/inc/components/feature-card.php';
?>

<main>
    <?php mbg_page_banner(
        'Multiplique seus Lucros com a Poupança Especial MBG',
        'Segurança, rentabilidade e a garantia que seu dinheiro merece'
    ); ?>

    <!-- Benefícios -->
    <section class="py-20 bg-background">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up">
                    Por que Escolher a Poupança MBG?
                </h2>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
                    Diferenciais únicos que fazem da nossa poupança a melhor opção para seu futuro
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="animate-scale-in">
                    <?php mbg_feature_card(
                        mbg_get_icon('trending-up'),
                        'Rendimento Superior',
                        'Rentabilidade acima da poupança tradicional com total transparência nos ganhos.'
                    ); ?>
                </div>
                <div class="animate-scale-in" style="animation-delay: 0.2s">
                    <?php mbg_feature_card(
                        mbg_get_icon('shield'),
                        'Segurança Garantida',
                        'Seus investimentos protegidos com total segurança e respaldo institucional.'
                    ); ?>
                </div>
                <div class="animate-scale-in" style="animation-delay: 0.4s">
                    <?php mbg_feature_card(
                        mbg_get_icon('zap'),
                        'Acessibilidade Total',
                        'Acesse seus recursos quando precisar com flexibilidade e praticidade.'
                    ); ?>
                </div>
            </div>
        </div>
    </section>

    <!-- Exemplo Prático -->
    <section class="py-20 bg-secondary/5">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up">
                    Veja seu Dinheiro Crescer
                </h2>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
                    Simulação baseada em um investimento inicial de R$ 20.000
                </p>
            </div>

            <div class="max-w-4xl mx-auto">
                <div class="bg-card border border-border rounded-lg p-8 shadow-elegant animate-fade-in-up">
                    <div class="grid md:grid-cols-3 gap-8 text-center">
                        <div class="space-y-4">
                            <div class="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                                <?php echo mbg_get_icon('dollar-sign'); ?>
                            </div>
                            <h3 class="text-xl font-semibold text-primary">Investimento Inicial</h3>
                            <p class="text-3xl font-bold text-primary">R$ 20.000</p>
                        </div>

                        <div class="space-y-4">
                            <div class="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                                <?php echo mbg_get_icon('calculator'); ?>
                            </div>
                            <h3 class="text-xl font-semibold text-primary">Após 12 Meses</h3>
                            <p class="text-3xl font-bold text-primary">R$ 23.600</p>
                            <p class="text-sm text-muted-foreground">+R$ 3.600 de rendimento</p>
                        </div>

                        <div class="space-y-4">
                            <div class="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                                <?php echo mbg_get_icon('award'); ?>
                            </div>
                            <h3 class="text-xl font-semibold text-primary">Após 24 Meses</h3>
                            <p class="text-3xl font-bold text-primary">R$ 27.848</p>
                            <p class="text-sm text-muted-foreground">+R$ 7.848 de rendimento</p>
                        </div>
                    </div>

                    <div class="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <p class="text-center text-sm text-muted-foreground">
                            <strong>Simulação baseada em rentabilidade de 1,5% ao mês.</strong><br>
                            Os valores são meramente ilustrativos. Rentabilidade passada não garante resultados futuros.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Diferenciais Adicionais -->
    <section class="py-20 bg-background">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up">
                    Mais Vantagens Exclusivas
                </h2>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="text-center animate-scale-in">
                    <div class="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-2xl">📱</span>
                    </div>
                    <h3 class="text-lg font-semibold text-primary mb-2">App Exclusivo</h3>
                    <p class="text-muted-foreground text-sm">Acompanhe seus rendimentos em tempo real</p>
                </div>

                <div class="text-center animate-scale-in" style="animation-delay: 0.2s">
                    <div class="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-2xl">🎯</span>
                    </div>
                    <h3 class="text-lg font-semibold text-primary mb-2">Metas Personalizadas</h3>
                    <p class="text-muted-foreground text-sm">Defina objetivos e acompanhe seu progresso</p>
                </div>

                <div class="text-center animate-scale-in" style="animation-delay: 0.4s">
                    <div class="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-2xl">📊</span>
                    </div>
                    <h3 class="text-lg font-semibold text-primary mb-2">Relatórios Detalhados</h3>
                    <p class="text-muted-foreground text-sm">Análises completas do seu patrimônio</p>
                </div>

                <div class="text-center animate-scale-in" style="animation-delay: 0.6s">
                    <div class="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-2xl">👨‍💼</span>
                    </div>
                    <h3 class="text-lg font-semibold text-primary mb-2">Consultoria Gratuita</h3>
                    <p class="text-muted-foreground text-sm">Assessoria financeira personalizada</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Final -->
    <section class="py-20 bg-secondary/5">
        <div class="container">
            <div class="text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up">
                    Abra sua Conta Poupança Hoje Mesmo
                </h2>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up">
                    Não perca mais tempo deixando seu dinheiro parado. Comece a multiplicar seus lucros agora mesmo com a segurança que você merece.
                </p>
                <div class="animate-fade-in-up">
                    <a href="<?php echo home_url('/contato'); ?>" 
                       class="inline-flex items-center justify-center px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-gold-glow hover:scale-105 animate-ripple">
                        Fale com um Especialista
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M5 12h14m-7-7l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>