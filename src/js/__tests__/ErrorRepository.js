import ErrorRepository from "../class/ErrorRepository";

test('Exist error', () => {
  const repo = new ErrorRepository();
  expect(repo.translate(1)).toBe('Long name');
  expect(repo.translate(2)).toBe('Limit soldiers');
  expect(repo.translate(3)).toBe('Safe shield is broken');
});

test('Unknown error', () => {
  const repo = new ErrorRepository();
  expect(repo.translate(4)).toBe('Unknown error');
});
