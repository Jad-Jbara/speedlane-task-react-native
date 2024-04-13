import { validateEmail } from './EmailCheckerHelper'

describe('EmailCheckerHelper', () => {
  describe('validateEmail', () => {
    it('should test a valid email', () => {
      const email = 'email@example.com'
      const isEmailValid = validateEmail(email)
      expect(isEmailValid).toBe(true)
    })

    it('should test an invalid email', () => {
      const email = 'email@example'
      const isEmailValid = validateEmail(email)
      expect(isEmailValid).toBe(false)
    })
  })
})
