import validEmail from '@/util/valid-email'

describe('util/valid-email', () => {
  it('rejects blank email addresses', () => {
    expect(validEmail(undefined)).toBeFalsy()
    expect(validEmail('')).toBeFalsy()
    expect(validEmail('   ')).toBeFalsy()
    expect(validEmail('\n')).toBeFalsy()
    expect(validEmail('\r\n')).toBeFalsy()
    expect(validEmail('\t')).toBeFalsy()
  })

  it('rejects invalid email addresses', () => {
    expect(validEmail('plainaddress')).toBeFalsy()
    expect(validEmail('#@%^%#$@#$@#.com')).toBeFalsy()
    expect(validEmail('@example.com')).toBeFalsy()
    expect(validEmail('Joe Smith <email@example.com>')).toBeFalsy()
    expect(validEmail('email.example.com')).toBeFalsy()
    expect(validEmail('email@example@example.com')).toBeFalsy()
    expect(validEmail('.email@example.com')).toBeFalsy()
    expect(validEmail('email.@example.com')).toBeFalsy()
    expect(validEmail('email..email@example.com')).toBeFalsy()
    expect(validEmail('email@example.com (Joe Smith)')).toBeFalsy()
    expect(validEmail('email@example')).toBeFalsy()
    expect(validEmail('email@111.222.333.44444')).toBeFalsy()
    expect(validEmail('email@example..com')).toBeFalsy()
    expect(validEmail('Abc..123@example.com')).toBeFalsy()
    expect(validEmail('”(),:;<>[\]@example.com')).toBeFalsy()
    expect(validEmail('this\ is"really"not\allowed@example.com')).toBeFalsy()
  })

  it('accepts basic email addresses', () => {
    expect(validEmail('email@example.com')).toBeTruthy()
    expect(validEmail('firstname.lastname@example.com')).toBeTruthy()
    expect(validEmail('email@subdomain.example.com')).toBeTruthy()
    expect(validEmail('firstname+lastname@example.com')).toBeTruthy()
    expect(validEmail('"email"@example.com')).toBeTruthy()
    expect(validEmail('1234567890@example.com')).toBeTruthy()
    expect(validEmail('email@example-one.com')).toBeTruthy()
    expect(validEmail('_______@example.com')).toBeTruthy()
    expect(validEmail('email@example.name')).toBeTruthy()
    expect(validEmail('email@example.museum')).toBeTruthy()
    expect(validEmail('email@example.co.jp')).toBeTruthy()
    expect(validEmail('firstname-lastname@example.com')).toBeTruthy()
  })
})