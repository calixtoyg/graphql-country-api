const { compare } = require('bcrypt');
const { encrypt } = require('../../src/lib/bcrypt');
describe('Bcrypt tests', () => {
  it('should encrypt password', async () => {
    const plainPasswordHash = "$2b$10$FDWgKlRhN8FpVX3N9WaPIe1b67S9n9qCMRNKttedPglS94GHxBcHi"
    const hash = await encrypt('hola')
    expect(hash.length).toBe(plainPasswordHash.length)
    expect(hash.slice(0,7)).toBe("$2b$10$")
  });

  it('should compare password to hash successfully', async() => {
    const plainPasswordHash = "$2b$10$FDWgKlRhN8FpVX3N9WaPIe1b67S9n9qCMRNKttedPglS94GHxBcHi"
    expect(await compare("hola", plainPasswordHash)).toBe(true)
  });

  it('should compare wrong password to hash falsely ', async() => {
    const plainPasswordHash = "$2b$10$FDWgKlRhN8FpVX3N9WaPIe1b67S9n9qCMRNKttedPglS94GHxBcHi"
    expect(await compare("hAola", plainPasswordHash)).toBe(false)
  });
})
