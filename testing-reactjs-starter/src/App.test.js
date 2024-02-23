// test/example.test.js

// Import the function or module you want to test
function add(a, b) {
   return a + b;
}

// Write a test using Jest's test function
test('adds 1 + 2 to equal 3', () => {
   // Arrange
   const a = 1;
   const b = 2;

   // Act
   const result = add(a, b);

   // Assert
   expect(result).toBe(3);
});
