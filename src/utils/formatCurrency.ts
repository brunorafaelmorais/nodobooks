export default function formatCurrency(
  money: number,
  numberFormat = 'en-US',
  currency = 'USD'
): string {
  const formatedValue = new Intl.NumberFormat(numberFormat, {
    style: 'currency',
    currency
  }).format(money)

  return formatedValue
}
