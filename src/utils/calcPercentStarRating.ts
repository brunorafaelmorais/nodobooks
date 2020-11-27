export default function calcPercentStarRating(stars: number): number {
  const percent = (stars * 100) / 10

  const finalPercent = 100 - percent

  return finalPercent
}
