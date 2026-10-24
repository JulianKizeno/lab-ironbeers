// Preserve the lab's two operations without the unmaintained Axios-based wrapper.
class PunkAPIWrapper {
  constructor({ fetchImpl = globalThis.fetch } = {}) { this.fetch = fetchImpl }
  async request(path) {
    const response = await this.fetch('https://api.punkapi.com/v2/beers' + path, { signal: AbortSignal.timeout(10000) })
    if (!response.ok) throw new Error('Punk API request failed: ' + response.status)
    return response.json()
  }
  getBeers() { return this.request('') }
  getRandom() { return this.request('/random') }
}
module.exports = PunkAPIWrapper
