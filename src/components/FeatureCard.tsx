import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="text-center group">
      <div className="mx-auto w-20 h-20 bg-gradient-gold-radial rounded-full flex items-center justify-center mb-6 transition-all duration-300 animate-icon-glow">
        <Icon className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110" />
      </div>
      <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;