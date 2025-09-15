import { COMPANY_INFO, WHATSAPP_MESSAGES } from './constants';

export const generateWhatsAppUrl = (message?: string): string => {
  const defaultMessage = message || WHATSAPP_MESSAGES.default;
  const encodedMessage = encodeURIComponent(defaultMessage);
  return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodedMessage}`;
};

export const getWhatsAppMessage = (type: keyof typeof WHATSAPP_MESSAGES): string => {
  return WHATSAPP_MESSAGES[type] || WHATSAPP_MESSAGES.default;
};