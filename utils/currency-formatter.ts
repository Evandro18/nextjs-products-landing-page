export const toBRLCurrency = (value: number) => {
  return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', unitDisplay: 'short' }).format(value);
}