const ori = String.prototype.padStart;
function padStart(str, len, rep) {
  return ori.call(str, len, rep);
}

String.prototype.padStart = null;
require('./padStart');


test('padStart', () => {
  expect('1234'.padStart(6, '0'))
    .toBe('001234');

  expect('1234'.padStart(3, '0'))
    .toBe('1234');

  expect(padStart('1234', 3, '0'))
      .toBe('1234');

  expect('12345'.padStart(8, '01'))
    .toBe('01012345');
});
