export default function NumberToCurrency(number: number): string | null {
  if (isNaN(number)) return null;

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
}
