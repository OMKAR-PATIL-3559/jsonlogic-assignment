// Task A - String Logic
function checkStrings(var1, var2) {
  
  // Check if var2 is part of var1
  if (var1.includes(var2)) {
    return var1;
  }
  
  // Check if var1 is part of var2
  else if (var2.includes(var1)) {
    return var2;
  }
  
  // If none of the above conditions match
  else {
    return "neither variable is a part of other";
  }
}

// Test cases for Task A
console.log("Task A Results:");
console.log(checkStrings("sat@google.com", "google.com"));
console.log(checkStrings("hello", "hello world"));
console.log(checkStrings("abc", "xyz"));
