import { TranslateWithFallbackPipe } from './translate-with-fallback-pipe';

describe('TranslateWithFallbackPipe', () => {
  it('create an instance', () => {
    const pipe = new TranslateWithFallbackPipe();
    expect(pipe).toBeTruthy();
  });
});
