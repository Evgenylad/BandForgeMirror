// Used in Login and Signup components
export const emailValidation = (email) => {
  const regExp = /^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i
  if (regExp.test(email)) return true
  return false
}
