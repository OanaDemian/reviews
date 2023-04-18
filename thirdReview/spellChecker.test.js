const spellChecker = require ('./spellChecker.js');
describe ('MegaSoftWeird - word processor', () => {
  it('prints a sentence', () => {
    const sentence = 'These words are spelt correctly';
    expect(spellChecker(sentence)).toBe('These words are spelt correctly')
  })
})
