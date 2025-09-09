<?php
/**
 * Template Name: Crédito Pessoal
 */

get_header();

// Include components
require_once get_template_directory() . '/inc/components/page-banner.php';
require_once get_template_directory() . '/inc/components/feature-card.php';
require_once get_template_directory() . '/inc/components/specialist-consultation.php';
?>

<main>
    <?php mbg_page_banner(
        'Crédito Pessoal Rápido e sem Burocracia',
        'O impulso que você precisa, com as condições que você merece'
    ); ?>

    <!-- Como Funciona -->
    <section class="py-20 bg-background">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up">
                    Como Funciona
                </h2>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
                    Processo simples e transparente em apenas 3 etapas
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="animate-scale-in">
                    <?php mbg_feature_card(
                        mbg_get_icon('calculator'),
                        '1. Simulação Online',
                        'Faça sua simulação rapidamente e descubra as melhores condições para seu perfil.'
                    ); ?>
                </div>
                <div class="animate-scale-in" style="animation-delay: 0.2s">
                    <?php mbg_feature_card(
                        mbg_get_icon('check-circle'),
                        '2. Análise Rápida',
                        'Nossa equipe analisa seu perfil em até 24 horas úteis com total segurança.'
                    ); ?>
                </div>
                <div class="animate-scale-in" style="animation-delay: 0.4s">
                    <?php mbg_feature_card(
                        mbg_get_icon('dollar-sign'),
                        '3. Dinheiro na Conta',
                        'Aprovado? O valor é depositado diretamente em sua conta de forma rápida e segura.'
                    ); ?>
                </div>
            </div>
        </div>
    </section>

    <!-- Condições -->
    <section class="py-20 bg-secondary/5">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up">
                    Nossas Condições
                </h2>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
                    Transparência total e condições justas para você
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-card border border-border rounded-lg p-8 shadow-elegant text-center hover:shadow-gold-glow transition-all duration-300 animate-scale-in">
                    <div class="w-16 h-16 bg-gradient-gold-radial rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gold">
                        <?php echo mbg_get_icon('dollar-sign'); ?>
                    </div>
                    <h3 class="text-xl font-semibold text-primary mb-4">Condições Justas</h3>
                    <p class="text-lg font-semibold text-primary mb-2">Valores</p>
                    <p class="text-muted-foreground">Transparentes</p>
                </div>

                <div class="bg-card border border-border rounded-lg p-8 shadow-elegant text-center hover:shadow-gold-glow transition-all duration-300 animate-scale-in" style="animation-delay: 0.2s">
                    <div class="w-16 h-16 bg-gradient-gold-radial rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gold">
                        <?php echo mbg_get_icon('clock'); ?>
                    </div>
                    <h3 class="text-xl font-semibold text-primary mb-4">Pagamento Flexível</h3>
                    <p class="text-lg font-semibold text-primary mb-2">Pagamentos</p>
                    <p class="text-muted-foreground">Semanais</p>
                </div>

                <div class="bg-card border border-border rounded-lg p-8 shadow-elegant text-center hover:shadow-gold-glow transition-all duration-300 animate-scale-in" style="animation-delay: 0.4s">
                    <div class="w-16 h-16 bg-gradient-gold-radial rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gold">
                        <?php echo mbg_get_icon('calculator'); ?>
                    </div>
                    <h3 class="text-xl font-semibold text-primary mb-4">Valores</h3>
                    <p class="text-lg font-semibold text-primary mb-2">R$ 1.000</p>
                    <p class="text-muted-foreground">até R$ 5.000</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Pré-Requisitos -->
    <section class="py-20 bg-background">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up">
                    Pré-Requisitos
                </h2>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
                    Documentação necessária para solicitar seu crédito
                </p>
            </div>

            <div class="max-w-4xl mx-auto">
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-card border border-border rounded-lg p-6 shadow-elegant animate-scale-in">
                        <div class="flex items-center mb-4">
                            <?php echo mbg_get_icon('file-text'); ?>
                            <h3 class="text-lg font-semibold text-primary ml-3">Análise SPC/Serasa</h3>
                        </div>
                        <p class="text-muted-foreground">
                            Autorização para consulta do seu histórico creditício
                        </p>
                    </div>

                    <div class="bg-card border border-border rounded-lg p-6 shadow-elegant animate-scale-in" style="animation-delay: 0.2s">
                        <div class="flex items-center mb-4">
                            <?php echo mbg_get_icon('map-pin'); ?>
                            <h3 class="text-lg font-semibold text-primary ml-3">Comprovação de Ponto Fixo</h3>
                        </div>
                        <p class="text-muted-foreground">
                            Comprovante de residência ou estabelecimento comercial
                        </p>
                    </div>

                    <div class="bg-card border border-border rounded-lg p-6 shadow-elegant animate-scale-in" style="animation-delay: 0.4s">
                        <div class="flex items-center mb-4">
                            <?php echo mbg_get_icon('users'); ?>
                            <h3 class="text-lg font-semibold text-primary ml-3">Contatos de Referência</h3>
                        </div>
                        <p class="text-muted-foreground">
                            Dois contatos pessoais para referência comercial
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Specialist Consultation -->
    <?php mbg_specialist_consultation(); ?>

</main>

<?php get_footer(); ?>