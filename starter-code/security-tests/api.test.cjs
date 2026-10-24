const test = require('node:test');
const assert = require('node:assert/strict');
const API = require('../services/punk-api');
test('beer operations retain URL and JSON shape and bound request duration', async () => {
  const urls = [];
  const api = new API({ fetchImpl: async (url, options) => { urls.push(url); assert.ok(options.signal instanceof AbortSignal); return { ok: true, json: async () => [{ id: 1 }] }; } });
  assert.deepEqual(await api.getBeers(), [{ id: 1 }]); assert.deepEqual(await api.getRandom(), [{ id: 1 }]);
  assert.deepEqual(urls, ['https://api.punkapi.com/v2/beers', 'https://api.punkapi.com/v2/beers/random']);
});
test('upstream failures reject instead of treating an error response as beer data', async () => {
  const api = new API({ fetchImpl: async () => ({ ok: false, status: 503 }) });
  await assert.rejects(api.getBeers(), /503/);
});
