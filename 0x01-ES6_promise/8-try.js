// Throw error / try catch on a function named divideFunction
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  } else {
    return (numerator / denominator);
  }
}
