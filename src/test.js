export default function test(evaluate, equals, message) {
  if (evaluate === equals) {
    console.log(`Passed: ${message}`);
  } else {
    console.log(`Failed: ${message}`);
  }
}
