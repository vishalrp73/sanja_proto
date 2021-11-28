import { handleCleanse } from "./handleCleanse";

/* 
    This version of handleCleanse has been modified for registration numbers
    and user input to remove spaces - the expected outputs reflect that
*/

test('Basic Test Number One: Should return same output', () => {
    expect(handleCleanse('hello world')).toBe('helloworld');
});

test('hello world => hello world', () => {
    expect(handleCleanse('hello world')).toBe('helloworld')
});

test('hello%world => hello world', () => {
    expect(handleCleanse('hello%world')).toBe('helloworld');
});

test('!hello world => hello world', () => {
    expect(handleCleanse('!hello world')).toBe('helloworld');
});

test(';hello?world! => hello world', () => {
    expect(handleCleanse(';hello?world!')).toBe('helloworld');
});

test('hello;world => hello world', () => {
    expect(handleCleanse('hello;world')).toBe('helloworld');
});

test('hello world? => hello world', () => {
    expect(handleCleanse('hello world?')).toBe('helloworld');
});