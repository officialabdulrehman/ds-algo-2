export default function two_crystal_balls(breaks: boolean[]): number {
  const hopWidth = Math.floor(Math.sqrt(breaks.length))
  let i = hopWidth

  for (; i < breaks.length; i += hopWidth) {
    if (breaks[i]) {
      break
    }
  }

  i -= hopWidth

  for (let j = 0; j < hopWidth && breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i
    }
  }

  return -1

}