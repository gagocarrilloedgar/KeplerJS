const { expect } = require('@jest/globals')
const { deg2rad } = require('../src/Core/deg2rad')

describe('Convert rad to degrees ', () => {
  test('pi degrees should equal 180 ', () => {
    const x = 180
    expect(deg2rad(x)).toBe(Math.PI)
  })

  test('2*pi rad should equal 360 deg ', () => {
    const x = 360
    expect(deg2rad(x)).toBe(2 * Math.PI)
  })

  test('0 rad should equal 0 deg', () => {
    const x = 0
    expect(deg2rad(x)).toBe(0)
  })
})
