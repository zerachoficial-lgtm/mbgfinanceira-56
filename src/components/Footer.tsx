import { Instagram, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY_INFO } from "@/lib/constants";
import { generateWhatsAppUrl, getWhatsAppMessage } from "@/lib/whatsapp";
const Footer = () => {
  return <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/lovable-uploads/7741cee7-e182-4ffd-ba9e-01ba194d50e6.png" alt="Logo MBG Financeira" className="w-16 h-16 object-contain" />
              <span className="text-xl font-bold text-primary">
            </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Soluções financeiras descomplicadas para transformar seus planos em realidade. 
              Crédito simples e poupança segura com total transparência.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>{COMPANY_INFO.name}</p>
              <p>CNPJ: {COMPANY_INFO.cnpj}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Home</Link></li>
              <li><Link to="/sobre" className="hover:text-primary transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Sobre Nós</Link></li>
              <li><Link to="/credito-pessoal" className="hover:text-primary transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Crédito Pessoal</Link></li>
              <li><Link to="/poupanca-especial" className="hover:text-primary transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Poupança Especial</Link></li>
              <li><Link to="/vantagens" className="hover:text-primary transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Vantagens</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-primary font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href={generateWhatsAppUrl(getWhatsAppMessage('contact'))} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Instagram className="w-4 h-4 text-primary" />
                <a href={`https://instagram.com/${COMPANY_INFO.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {COMPANY_INFO.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 {COMPANY_INFO.name}. Todos os direitos reservados.</p>
          <p className="mt-2">
            Desenvolvido com 💛 para transformar vidas através de soluções financeiras inteligentes.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;