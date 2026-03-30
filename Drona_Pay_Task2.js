// Task B - Score Logic
function getScore(transactionamount, transactioncount) {
  
  // Case 1: both less than threshold
  if (transactionamount < 1000 && transactioncount < 5) {
    return 0;
  }
  
  // Case 2: medium range
  else if (
    transactionamount >= 1000 &&
    transactionamount < 10000 &&
    transactioncount >= 5 &&
    transactioncount < 10
  ) {
    return 50;
  }
  
  // Case 3: high values
  else {
    return 100;
  }
}

// Test cases for Task B
console.log("\nTask B Results:");
console.log(getScore(500, 3));      // 0
console.log(getScore(5000, 7));     // 50
console.log(getScore(20000, 15));   // 100