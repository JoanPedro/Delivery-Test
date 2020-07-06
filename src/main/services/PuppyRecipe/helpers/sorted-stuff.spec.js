const sorted = require('./sortedStuffs')

describe('Sorted', () => {
  test('Sould return 400 if lenght is > 3', () => {
    const query = {
      i: 'tomatos, onions, garlic, beans'
    }
    const sut = sorted(query)
    expect(sut.statusCode).toBe(400)
  })

  test('Should return sorted if length is <= 3', () => {
    const stuffs = {
      i: 'tomatos,onions,garlic'
    }
    const query = Array.from(stuffs.i.split(',')).sort()
    const sut = sorted(stuffs)
    expect(sut).toEqual(query)
  })
})
