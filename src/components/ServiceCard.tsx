import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { MBGButton } from "./ui/mbg-button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  buttonText: string;
}

const ServiceCard = ({ icon: Icon, title, description, href, buttonText }: ServiceCardProps) => {
  return (
    <div className="group bg-card border border-border rounded-lg p-8 shadow-elegant animate-hover-lift transition-all duration-300">
      <div className="mb-6">
        <div className="w-16 h-16 bg-gradient-gold-radial rounded-full flex items-center justify-center mb-4 transition-all duration-300 animate-icon-glow">
          <Icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
      
      <MBGButton asChild variant="outline" className="w-full animate-hover-glow animate-ripple">
        <Link to={href}>{buttonText}</Link>
      </MBGButton>
    </div>
  );
};

export default ServiceCard;