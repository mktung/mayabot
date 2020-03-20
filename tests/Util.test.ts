import {testFunc} from '../modules/Util';

describe('make sure my bootstrap isnt broken', () => {
    test('test returns 1', () => {
        expect(testFunc()).toEqual(1);
    });
});