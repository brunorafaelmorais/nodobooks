export default function calcPercentStarRating(numberOfStars: number): number {
  const MAXIMUM_STARTS = 10

  const percentage = (numberOfStars * 100) / MAXIMUM_STARTS

  const finalPercentage = 100 - percentage

  return finalPercentage
}
