<?php
/**
 * Template para página de erro 404
 */

get_header(); ?>

<div class="container">
    <main class="main-content" style="padding: 80px 0; text-align: center;">
        <div style="max-width: 600px; margin: 0 auto;">
            <div style="background: hsl(var(--card)); border-radius: var(--radius); padding: 64px 32px;">
                <!-- Ícone de erro -->
                <div style="margin-bottom: 32px;">
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: hsl(var(--primary)); margin: 0 auto; display: block;">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="15" y1="9" x2="9" y2="15"/>
                        <line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                </div>
                
                <h1 style="font-size: 3rem; margin-bottom: 16px; color: hsl(var(--primary));">404</h1>
                <h2 style="margin-bottom: 16px; color: hsl(var(--foreground));">Página não encontrada</h2>
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 32px; font-size: 1.125rem;">
                    Ops! A página que você está procurando não existe ou foi movida.
                </p>
                
                <!-- Formulário de busca -->
                <form role="search" method="get" action="<?php echo home_url('/'); ?>" style="margin-bottom: 32px;">
                    <div style="display: flex; gap: 8px; max-width: 400px; margin: 0 auto;">
                        <input type="search" 
                               name="s" 
                               placeholder="Buscar no site..."
                               style="flex: 1; padding: 12px 16px; background: hsl(var(--input)); border: 1px solid hsl(var(--border)); border-radius: 8px; color: hsl(var(--foreground));">
                        <button type="submit" 
                                class="mbg-button"
                                style="padding: 12px 20px;">
                            Buscar
                        </button>
                    </div>
                </form>
                
                <!-- Opções de navegação -->
                <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-bottom: 32px;">
                    <a href="<?php echo home_url(); ?>" class="mbg-button">Página Inicial</a>
                    <a href="<?php echo home_url('/credito-pessoal'); ?>" class="mbg-button" style="background: transparent; color: hsl(var(--primary)); border: 1px solid hsl(var(--primary));">Crédito Pessoal</a>
                    <a href="<?php echo home_url('/poupanca-especial'); ?>" class="mbg-button" style="background: transparent; color: hsl(var(--primary)); border: 1px solid hsl(var(--primary));">Poupança Especial</a>
                </div>
                
                <!-- Links úteis -->
                <div style="border-top: 1px solid hsl(var(--border)); padding-top: 32px;">
                    <h3 style="margin-bottom: 16px; color: hsl(var(--primary));">Links Úteis</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 8px; font-size: 0.875rem;">
                        <a href="<?php echo home_url('/sobre'); ?>" style="color: hsl(var(--muted-foreground)); text-decoration: none; padding: 8px; border-radius: 4px; transition: color 0.3s;">Sobre Nós</a>
                        <a href="<?php echo home_url('/vantagens'); ?>" style="color: hsl(var(--muted-foreground)); text-decoration: none; padding: 8px; border-radius: 4px; transition: color 0.3s;">Vantagens</a>
                        <a href="<?php echo home_url('/blog'); ?>" style="color: hsl(var(--muted-foreground)); text-decoration: none; padding: 8px; border-radius: 4px; transition: color 0.3s;">Blog</a>
                        <a href="<?php echo home_url('/contato'); ?>" style="color: hsl(var(--muted-foreground)); text-decoration: none; padding: 8px; border-radius: 4px; transition: color 0.3s;">Contato</a>
                    </div>
                </div>
                
                <!-- Call to Action -->
                <div style="margin-top: 32px; padding-top: 32px; border-top: 1px solid hsl(var(--border));">
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 16px;">
                        Precisa de ajuda? Fale conosco!
                    </p>
                    <a href="<?php echo mbg_get_whatsapp_url('Olá! Não encontrei a página que procurava no site. Podem me ajudar?'); ?>" 
                       class="mbg-button" 
                       target="_blank" 
                       rel="noopener noreferrer">
                        Falar no WhatsApp
                    </a>
                </div>
            </div>
        </div>
    </main>
</div>

<style>
.main-content a:hover {
    color: hsl(var(--primary)) !important;
}
</style>

<?php get_footer(); ?>