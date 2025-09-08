import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  testimonial: string;
  rating: number;
}

const TestimonialCard = ({ name, location, testimonial, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-elegant transition-all duration-300 animate-hover-lift">
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-primary fill-current" />
        ))}
      </div>
      
      <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
        "{testimonial}"
      </blockquote>
      
      <div className="border-t border-border pt-4">
        <div className="font-semibold text-primary">{name}</div>
        <div className="text-sm text-muted-foreground">{location}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;