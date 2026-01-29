const defaultBinaryFolder = '/usr/bin'
const binaryNames = ['legendary', 'gogdl', 'nile', 'comet'] as const
type binaryPathMap = Record<(typeof binaryNames)[number], string>

export const defaultBinaryPaths: binaryPathMap = binaryNames.reduce(
  (accumulator, currentValue) => {
    accumulator[currentValue] = `${defaultBinaryFolder}/${currentValue}`
    return accumulator
  },
  {} as binaryPathMap
)
