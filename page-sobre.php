<?php
/**
 * Template Name: Sobre Nós
 */

get_header();

// Include components
require_once get_template_directory() . '/inc/components/page-banner.php';
require_once get_template_directory() . '/inc/components/feature-card.php';
require_once get_template_directory() . '/inc/components/testimonial-card.php';
require_once get_template_directory() . '/inc/components/specialist-consultation.php';
?>

<main>
    <?php mbg_page_banner(
        'Sobre a MBG Financeira',
        'Conheça nossa história, valores e compromisso com soluções financeiras que realmente funcionam'
    ); ?>

    <!-- Nossa História -->
    <section class="py-20 bg-background">
        <div class="container">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up">
                        Nossa História
                    </h2>
                    <p class="text-lg text-muted-foreground animate-fade-in-up">
                        Fundada com o propósito de democratizar o acesso ao crédito e oferecer soluções de poupança seguras
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="animate-slide-in-left">
                        <h3 class="text-2xl font-bold text-primary mb-6">
                            Transformando Vidas Através das Finanças
                        </h3>
                        <p class="text-muted-foreground mb-6 leading-relaxed">
                            A MBG Financeira nasceu da necessidade de oferecer soluções financeiras realmente acessíveis 
                            e transparentes para pessoas que precisam de crédito ou querem fazer seu dinheiro render mais.
                        </p>
                        <p class="text-muted-foreground mb-6 leading-relaxed">
                            Com anos de experiência no mercado financeiro, nossa equipe entende as dificuldades enfrentadas 
                            por quem busca crédito justo ou quer investir com segurança. Por isso, desenvolvemos produtos 
                            pensados especialmente para atender essas necessidades.
                        </p>
                        <p class="text-muted-foreground leading-relaxed">
                            Nosso compromisso é com a transparência total, atendimento humanizado e condições que realmente 
                            cabem no seu orçamento. Não acreditamos em letras miúdas ou surpresas desagradáveis.
                        </p>
                    </div>
                    
                    <div class="animate-slide-in-right">
                        <div class="bg-card border border-border rounded-lg p-8 shadow-elegant">
                            <div class="grid grid-cols-2 gap-6 text-center">
                                <div>
                                    <div class="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
                                    <div class="text-sm text-muted-foreground">Clientes Atendidos</div>
                                </div>
                                <div>
                                    <div class="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
                                    <div class="text-sm text-muted-foreground">Satisfação</div>
                                </div>
                                <div>
                                    <div class="text-3xl md:text-4xl font-bold text-primary mb-2">R$ 5M+</div>
                                    <div class="text-sm text-muted-foreground">Crédito Liberado</div>
                                </div>
                                <div>
                                    <div class="text-3xl md:text-4xl font-bold text-primary mb-2">24h</div>
                                    <div class="text-sm text-muted-foreground">Tempo Médio</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Nossos Valores -->
    <section class="py-20 bg-secondary/5">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up">
                    Nossos Valores
                </h2>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
                    Os princípios que norteiam todas as nossas ações e decisões
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="animate-scale-in">
                    <?php mbg_feature_card(
                        mbg_get_icon('shield'),
                        'Transparência',
                        'Todas as condições são apresentadas de forma clara, sem taxas ocultas ou surpresas. Você sabe exatamente o que está contratando.'
                    ); ?>
                </div>
                <div class="animate-scale-in" style="animation-delay: 0.2s">
                    <?php mbg_feature_card(
                        mbg_get_icon('users'),
                        'Atendimento Humanizado',
                        'Cada cliente é único e merece atenção personalizada. Nossa equipe está sempre pronta para ajudar de forma genuína.'
                    ); ?>
                </div>
                <div class="animate-scale-in" style="animation-delay: 0.4s">
                    <?php mbg_feature_card(
                        mbg_get_icon('check-circle'),
                        'Agilidade',
                        'Processos simplificados e tecnologia moderna para que você tenha a resposta que precisa no menor tempo possível.'
                    ); ?>
                </div>
            </div>
        </div>
    </section>

    <!-- Nossa Equipe -->
    <section class="py-20 bg-background">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up">
                    Nossa Equipe
                </h2>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
                    Profissionais experientes e comprometidos com seu sucesso financeiro
                </p>
            </div>

            <div class="max-w-4xl mx-auto text-center">
                <div class="bg-card border border-border rounded-lg p-8 md:p-12 shadow-elegant animate-fade-in-up">
                    <p class="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Nossa equipe é formada por especialistas em crédito, investimentos e atendimento ao cliente, 
                        todos unidos pela missão de oferecer as melhores soluções financeiras do mercado.
                    </p>
                    <p class="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Com formação em economia, administração e finanças, nossos consultores estão sempre atualizados 
                        com as melhores práticas do mercado para oferecer orientação precisa e confiável.
                    </p>
                    <div class="flex flex-wrap justify-center gap-4">
                        <div class="px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold">
                            Análise de Crédito
                        </div>
                        <div class="px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold">
                            Consultoria Financeira
                        </div>
                        <div class="px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold">
                            Atendimento Especializado
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Depoimentos -->
    <section class="py-20 bg-secondary/5">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up">
                    O que Nossos Clientes Dizem
                </h2>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
                    Histórias reais de pessoas que transformaram suas vidas financeiras conosco
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <?php mbg_get_testimonials_cards(3); ?>
            </div>
        </div>
    </section>

    <!-- Specialist Consultation -->
    <?php mbg_specialist_consultation(); ?>

</main>

<?php get_footer(); ?>