import { Calendar, Users, ThumbsUp, TrendingUp } from "lucide-react";
import { useCountUp, formatLargeNumber } from "@/hooks/useCountUp";

const StatsSection = () => {
  const experienceCount = useCountUp({ 
    end: 10, 
    duration: 2000, 
    prefix: "+", 
    suffix: "" 
  });
  
  const clientsCount = useCountUp({ 
    end: 5000, 
    duration: 2500, 
    formatter: (value) => `${formatLargeNumber(value)}+`
  });
  
  const satisfactionCount = useCountUp({ 
    end: 98, 
    duration: 2000, 
    suffix: "%" 
  });
  
  const creditCount = useCountUp({ 
    end: 50000000, 
    duration: 3000, 
    formatter: (value) => `+${formatLargeNumber(value)}`
  });

  const stats = [
    {
      ...experienceCount,
      icon: Calendar,
      label: "Anos de Experiência",
      color: "text-primary"
    },
    {
      ...clientsCount, 
      icon: Users,
      label: "Clientes Atendidos",
      color: "text-primary"
    },
    {
      ...satisfactionCount,
      icon: ThumbsUp, 
      label: "Satisfação dos Clientes",
      color: "text-primary"
    },
    {
      ...creditCount,
      icon: TrendingUp,
      label: "Crédito Liberado",
      color: "text-primary"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div 
            key={index}
            ref={index === 0 ? stat.ref : undefined}
            className={`animate-fade-in-up hover:scale-105 transition-transform duration-300`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10 mb-2">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsSection;