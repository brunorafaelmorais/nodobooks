export default function calcPercentStarRating(numberOfStars: number): number {
  const MAXIMUM_STARS = 10

  const percentage = (numberOfStars * 100) / MAXIMUM_STARS

  const finalPercentage = 100 - percentage

  return finalPercentage
}
