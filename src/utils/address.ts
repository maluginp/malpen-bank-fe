export function makeShortAddress(address: string, start = 4, end = 8): string {
  return address.substring(0, start) + "...."+address.substring(address.length-end)
}