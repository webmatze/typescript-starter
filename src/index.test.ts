import hello from './index'

test('greets world', () => {
    expect(hello('World')).toBe("Hello World")
})