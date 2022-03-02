const Example = require('./example');

test('divides 30 / 5 to equal 6', () => {
    const example = new Example();
    expect(example.divide(30,5)).toBe(6);
});

test('returns a promise "Promise Resolved!"', () => {
    const example = new Example();
    // return example.returnsAPromise().then(response => {
    //     expect(response).toBe('Promise Resolved!');
    // });
    // Or 
    return expect(example.returnsAPromise()).resolves.toBe('Promise Resolved!');
});

test('rejects a promise and returns error: "Whoa there is an error"', () => {
    const example = new Example();
    expect.assertions(1);
    // return example.returnsFailedPromise().catch( e => expect(e).toMatch('Whoa there is an error'));
    // Or
    return expect(example.returnsFailedPromise()).rejects.toMatch('Whoa there is an error');
});
