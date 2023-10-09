import { assert } from 'chai';
import { describe } from 'mocha';
import { postMessage } from './zod_approach';
import { ZodError } from 'zod';

describe('zod approach', () => {

    it('should throw an error if provided with null ', () => {
        try {
            postMessage(null)
            assert.fail('Should have thrown an error')
        } catch (e: any) {
            if (e instanceof ZodError) {
                assert.deepEqual(e.errors.map((e) => e.message), ['Expected object, received null'])
            } else {
                assert.fail('Should have thrown a ZodError')
            }
        }
    })

    it('should throw a ValidationError if provided with an empty object', () => {
        try {
            postMessage({})
            assert.fail('Should have thrown an error')
        } catch (e: any) {
            if (e instanceof ZodError) {
                assert.deepEqual(e.errors.map((e) => e.message), ['Required', 'Required'])
            } else {
                assert.fail('Should have thrown a ZodError')
            }
        }
    })

    it('should return a PostMessageResult if provided with a valid message', () => {
        const result = postMessage({ title: 'HelloWorld', body: 'This is a test' })
        assert.deepEqual(result, { id: 1, title: 'HelloWorld', body: 'This is a test' })
    })

})