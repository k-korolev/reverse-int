module.exports = function reverse(n) {
  let x = n;
  if (n < 0) {
    x = x * -1; // convert to positive dec
  }
  x = x.toString() //convert dec to string
  x = x.split('') // convert string to array
  x = x.reverse(); // reverse the array
  x = x.join(''); // convert array to string
  x = Number(x); // convert string to dec
  return x;
}