// Stock Buy and Sell

// Best time to buy and sell stock

// We are given an array Arr[] of length n. It represents the price of a stock on ‘n’ days. The following guidelines need to be followed:

// We can buy and sell a stock only once.
// We can buy and sell the stock on any day but to sell the stock, we need to first buy it on the same or any previous day.
// We need to tell the maximum profit one can get by buying and selling this stock.


const maxProfit = (arr) => { 
    let minimumPrice = arr[0];
    let maxProfit = 0;
    for (let i = 1; i < arr.length; i++) {
        const currProfit = arr[i] - minimumPrice;
        maxProfit = Math.max(maxProfit, currProfit);
        minimumPrice = Math.min(minimumPrice, arr[i]);
    }
    return maxProfit;
};

const arr = [7,2,5,6,9];
console.log("MaxProfit", maxProfit(arr));