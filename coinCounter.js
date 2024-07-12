// coinCounter.js

function coinCounter(amount) {
    // Convert amount to cents
    let cents = Math.round(amount * 100);

    // Coin values in cents
    const coins = { quarters: 25, dimes: 10, nickels: 5, pennies: 1 };

    // Helper function for recursion
    function recursiveCounter(amount, coinCounts) {
        if (amount === 0) {
            return coinCounts;
        }

        for (const coin in coins) {
            if (amount >= coins[coin]) {
                coinCounts[coin]++;
                return recursiveCounter(amount - coins[coin], coinCounts);
            }
        }
    }

    // Initialize the count of each coin to 0
    const coinCounts = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 };
    return recursiveCounter(cents, coinCounts);
}

// Test cases to verify the solution
function runTests() {
    console.log(coinCounter(4.99)); // { quarters: 19, dimes: 2, nickels: 0, pennies: 4 }
    console.log(coinCounter(0));    // { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }
    console.log(coinCounter(1.00)); // { quarters: 4, dimes: 0, nickels: 0, pennies: 0 }
    console.log(coinCounter(0.41)); // { quarters: 1, dimes: 1, nickels: 1, pennies: 1 }
}

// Run the test cases
runTests();
