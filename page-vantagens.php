<?php
/**
 * Template Name: Vantagens
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
        'Vantagens Exclusivas MBG',
        'Descubra todos os benefícios de ser cliente MBG e transforme sua vida financeira'
    ); ?>

    <!-- Principais Vantagens -->
    <section class="py-20 bg-background">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up">
                    Por que Escolher a MBG?
                </h2>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
                    Mais de 10 vantagens exclusivas que fazem a diferença na sua jornada financeira
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="animate-scale-in">
                    <?php mbg_feature_card(
                        mbg_get_icon('check-circle'),
                        'Sem Burocracia',
                        'Processo simplificado e ágil. Menos papelada, mais agilidade para você.'
                    ); ?>
                </div>
                <div class="animate-scale-in" style="animation-delay: 0.1s">
                    <?php mbg_feature_card(
                        mbg_get_icon('clock'),
                        'Aprovação Rápida',
                        'Análise em até 24 horas úteis. Não deixe seus planos esperarem.'
                    ); ?>
                </div>
                <div class="animate-scale-in" style="animation-delay: 0.2s">
                    <?php mbg_feature_card(
                        mbg_get_icon('dollar-sign'),
                        'Taxas Competitivas',
                        'As melhores condições do mercado com total transparência.'
                    ); ?>
                </div>
                <div class="animate-scale-in" style="animation-delay: 0.3s">
                    <?php mbg_feature_card(
                        mbg_get_icon('shield'),
                        '100% Seguro',
                        'Todos os dados protegidos com a mais alta tecnologia de segurança.'
                    ); ?>
                </div>
            </div>
        </div>
    </section>

    <!-- Pagamento Semanal -->
    <section class="py-20 bg-secondary/5">
        <div class="container">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="animate-slide-in-left">
                    <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
                        Pagamento Semanal Flexível
                    </h2>
                    <p class="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Nossa maior inovação: parcelas semanais que se adaptam ao seu fluxo de renda. 
                        Ideal para autônomos, freelancers e pequenos empresários que recebem de forma irregular.
                    </p>
                    
                    <div class="space-y-4">
                        <div class="flex items-center gap-3">
                            <div class="w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7"/>
                                </svg>
                            </div>
                            <span class="text-muted-foreground">Parcelas que cabem no seu orçamento</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7"/>
                                </svg>
                            </div>
                            <span class="text-muted-foreground">Flexibilidade total de pagamento</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7"/>
                                </svg>
                            </div>
                            <span class="text-muted-foreground">Ideal para renda variável</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7"/>
                                </svg>
                            </div>
                            <span class="text-muted-foreground">Menor impacto no orçamento mensal</span>
                        </div>
                    </div>
                </div>
                
                <div class="animate-slide-in-right">
                    <div class="bg-card border border-border rounded-lg p-8 shadow-elegant">
                        <h3 class="text-xl font-bold text-primary mb-6 text-center">
                            Exemplo de Pagamento Semanal
                        </h3>
                        <div class="space-y-4">
                            <div class="flex justify-between items-center p-3 bg-primary/5 rounded">
                                <span class="text-muted-foreground">Crédito Solicitado:</span>
                                <span class="font-bold text-primary">R$ 2.000</span>
                            </div>
                            <div class="flex justify-between items-center p-3 bg-primary/5 rounded">
                                <span class="text-muted-foreground">Parcela Semanal:</span>
                                <span class="font-bold text-primary">R$ 125</span>
                            </div>
                            <div class="flex justify-between items-center p-3 bg-primary/5 rounded">
                                <span class="text-muted-foreground">Período:</span>
                                <span class="font-bold text-primary">20 semanas</span>
                            </div>
                            <div class="flex justify-between items-center p-3 bg-gradient-gold rounded text-primary-foreground">
                                <span class="font-semibold">Total a Pagar:</span>
                                <span class="font-bold">R$ 2.500</span>
                            </div>
                        </div>
                        <p class="text-center text-sm text-muted-foreground mt-4">
                            * Valores ilustrativos. Condições podem variar conforme análise de crédito.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Programa de Vantagens -->
    <section class="py-20 bg-background">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up">
                    Programa de Vantagens Exclusivo
                </h2>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
                    Benefícios especiais para clientes fiéis da MBG Financeira
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="text-center animate-scale-in">
                    <div class="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                        <span class="text-3xl">🎁</span>
                    </div>
                    <h3 class="text-xl font-bold text-primary mb-4">Sorteios Mensais</h3>
                    <p class="text-muted-foreground mb-4">
                        Todos os clientes adimplentes participam automaticamente de sorteios mensais com prêmios especiais.
                    </p>
                    <div class="bg-primary/5 rounded-lg p-4">
                        <p class="text-sm text-primary font-semibold">Próximo sorteio: R$ 1.000 em dinheiro</p>
                    </div>
                </div>

                <div class="text-center animate-scale-in" style="animation-delay: 0.2s">
                    <div class="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                        <span class="text-3xl">⭐</span>
                    </div>
                    <h3 class="text-xl font-bold text-primary mb-4">Cashback em Compras</h3>
                    <p class="text-muted-foreground mb-4">
                        Receba cashback em compras selecionadas através de nossa rede de parceiros comerciais.
                    </p>
                    <div class="bg-primary/5 rounded-lg p-4">
                        <p class="text-sm text-primary font-semibold">Até 5% de cashback</p>
                    </div>
                </div>

                <div class="text-center animate-scale-in" style="animation-delay: 0.4s">
                    <div class="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                        <span class="text-3xl">👑</span>
                    </div>
                    <h3 class="text-xl font-bold text-primary mb-4">Clube VIP</h3>
                    <p class="text-muted-foreground mb-4">
                        Clientes com histórico excelente têm acesso a condições especiais e atendimento prioritário.
                    </p>
                    <div class="bg-primary/5 rounded-lg p-4">
                        <p class="text-sm text-primary font-semibold">Taxas preferenciais</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Comparativo -->
    <section class="py-20 bg-secondary/5">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up">
                    MBG vs Concorrência
                </h2>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
                    Veja por que a MBG é a melhor escolha para suas necessidades financeiras
                </p>
            </div>

            <div class="max-w-4xl mx-auto">
                <div class="bg-card border border-border rounded-lg overflow-hidden shadow-elegant animate-fade-in-up">
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead class="bg-primary/10">
                                <tr>
                                    <th class="text-left p-4 font-bold text-primary">Benefícios</th>
                                    <th class="text-center p-4 font-bold text-primary">MBG Financeira</th>
                                    <th class="text-center p-4 font-bold text-muted-foreground">Outros</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-border">
                                    <td class="p-4 text-muted-foreground">Pagamento Semanal</td>
                                    <td class="p-4 text-center text-green-500">✓</td>
                                    <td class="p-4 text-center text-red-500">✗</td>
                                </tr>
                                <tr class="border-b border-border">
                                    <td class="p-4 text-muted-foreground">Aprovação em 24h</td>
                                    <td class="p-4 text-center text-green-500">✓</td>
                                    <td class="p-4 text-center text-yellow-500">Às vezes</td>
                                </tr>
                                <tr class="border-b border-border">
                                    <td class="p-4 text-muted-foreground">Sem Taxa de Abertura</td>
                                    <td class="p-4 text-center text-green-500">✓</td>
                                    <td class="p-4 text-center text-red-500">✗</td>
                                </tr>
                                <tr class="border-b border-border">
                                    <td class="p-4 text-muted-foreground">Atendimento Humanizado</td>
                                    <td class="p-4 text-center text-green-500">✓</td>
                                    <td class="p-4 text-center text-yellow-500">Limitado</td>
                                </tr>
                                <tr class="border-b border-border">
                                    <td class="p-4 text-muted-foreground">Programa de Vantagens</td>
                                    <td class="p-4 text-center text-green-500">✓</td>
                                    <td class="p-4 text-center text-red-500">✗</td>
                                </tr>
                                <tr>
                                    <td class="p-4 text-muted-foreground">Transparência Total</td>
                                    <td class="p-4 text-center text-green-500">✓</td>
                                    <td class="p-4 text-center text-yellow-500">Parcial</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Depoimentos -->
    <section class="py-20 bg-background">
        <div class="container">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6 animate-fade-in-up">
                    Clientes Satisfeitos
                </h2>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
                    Veja o que nossos clientes dizem sobre as vantagens da MBG
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