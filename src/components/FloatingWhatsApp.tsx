import { X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { generateWhatsAppUrl, getWhatsAppMessage } from "@/lib/whatsapp";
import specialistAvatar from "@/assets/specialist-avatar.jpg";

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    const whatsappUrl = generateWhatsAppUrl(getWhatsAppMessage('default'));
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      {/* Mensagem Flutuante */}
      <div className="absolute bottom-20 right-2 animate-fade-in delay-1000">
        <div className="bg-gradient-gold text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap">
          💰 Precisa de Crédito?
        </div>
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gold"></div>
      </div>
      {/* Tooltip */}
      <div
        className={cn(
          "absolute bottom-16 right-0 bg-background border border-border rounded-lg px-3 py-2 shadow-lg transition-all duration-300 whitespace-nowrap",
          showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        )}
      >
        <div className="text-sm font-medium text-foreground">
          Fale com Nosso Especialista
        </div>
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
      </div>

      {/* Main Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => {
          setIsHovered(true);
          setShowTooltip(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowTooltip(false);
        }}
        className={cn(
          "relative w-14 h-14 md:w-16 md:h-16 rounded-full",
          "bg-gradient-gold shadow-gold-glow",
          "flex items-center justify-center",
          "transition-all duration-300 ease-out",
          "hover:scale-110 hover:shadow-gold-glow-intense",
          "active:scale-95",
          "animate-bounce-subtle",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          "group"
        )}
        aria-label="Conversar no WhatsApp"
      >
        {/* Ripple Effect */}
        <div
          className={cn(
            "absolute inset-0 rounded-full bg-white/20 transition-transform duration-300",
            isHovered ? "scale-150 opacity-0" : "scale-100 opacity-100"
          )}
        ></div>

        {/* Specialist Avatar */}
        <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border-2 border-white/20">
          <img 
            src={specialistAvatar}
            alt="Especialista MBG Financeira"
            className={cn(
              "w-full h-full object-cover transition-all duration-300",
              isHovered && "scale-110"
            )}
          />
        </div>

        {/* Pulse Animation Ring */}
        <div className="absolute inset-0 rounded-full animate-ping bg-gradient-gold opacity-30"></div>
      </button>

      {/* Badge de Notificação (opcional) */}
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full flex items-center justify-center animate-pulse">
        <span className="text-xs font-bold text-white">!</span>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;