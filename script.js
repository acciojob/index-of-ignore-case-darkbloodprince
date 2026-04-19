function indexOfIgnoreCase(s1, s2) {
  // Handle null inputs
  if (s1 == null || s2 == null) return -1;

  // Convert both strings to lowercase
  const str = s1.toLowerCase();
  const sub = s2.toLowerCase();

  // Edge case: empty substring
  if (sub === "") return 0;

  // Use built-in indexOf
  return str.indexOf(sub);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));