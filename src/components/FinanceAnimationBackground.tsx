import React, { useEffect, useRef } from 'react';

const FinanceAnimationBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const numberOfSigns = 30; // Densidade da animação

    // Limpa container antes de adicionar novos elementos
    container.innerHTML = '';

    for (let i = 0; i < numberOfSigns; i++) {
      const sign = document.createElement('span');
      sign.classList.add('dollar-sign-particle');
      sign.innerText = '$';

      // Aleatoriedade para criar o efeito de profundidade e naturalidade
      sign.style.left = `${Math.random() * 100}%`; // Posição horizontal aleatória
      sign.style.fontSize = `${Math.random() * 15 + 10}px`; // Tamanho aleatório (entre 10px e 25px)
      sign.style.animationDuration = `${Math.random() * 10 + 8}s`; // Duração aleatória (entre 8s e 18s)
      sign.style.animationDelay = `${Math.random() * 5}s`; // Atraso aleatório
      sign.style.opacity = `${Math.random() * 0.7 + 0.2}`; // Opacidade aleatória para profundidade

      container.appendChild(sign);
    }

    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="finance-animation-background"
    />
  );
};

export default FinanceAnimationBackground;