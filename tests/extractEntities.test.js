const extractEntities = require('../src/extractEntities');

test('extracts entities from search term', async () => {
  const result = await extractEntities("McDonald's in London");
  expect(result).toContainEqual({ city: { id: 1, name: "London" }, brand: { id: 1, name: "McDonald's" } });
});
