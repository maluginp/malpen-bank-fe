export function splitByChunk<T>(array: T[], size: number): T[][] {
  // Cache array.length
  const length = array.length;
  // Pre-size output array so we don't have to push/resize
  const output = new Array(Math.ceil(length / size));
  // Loop variables
  let seekIndex = 0, outputIndex = 0;
  // Loop over chunks
  while (seekIndex < length) {
    // Use slice() to select a chunk. Note the incrementing operations.
    output[outputIndex++] = array.slice(seekIndex, seekIndex += size);
  }
  // Return our chunks
  return output;
}