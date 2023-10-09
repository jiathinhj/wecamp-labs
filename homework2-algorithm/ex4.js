//Final Prices With a Special Discount in a Shop
const finalPrices = (prices) => {
  const discount = prices.map((e, i) => {
    for (let j = i + 1; j < prices.length; j++) {
      if (e >= prices[j]) return prices[j];
    }
    return 0;
  });
  return prices.map((e, i) => e - discount[i]);
};
