const sum = (a, b) =>  a + b;

test('sum two values', () => {
  expect(sum(2,3)).toEqual(5);
  expect(sum(3,4)).toEqual(7);
});
