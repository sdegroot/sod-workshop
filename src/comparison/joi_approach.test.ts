import { assert } from 'chai';
import { describe } from 'mocha';
import { postMessage } from './joi_approach';
import { ValidationError } from 'joi'

describe('joi approach', () => {

    it('should throw an error if provided with null ', () => {
        assert.throws(() => {
            postMessage(null)
        }, '"value" must be of type object')
    })

    it('should throw a ValidationError if provided with an empty object', () => {
        try {
            postMessage({})
            assert.fail('Should have thrown an error')
        }
        catch (e: any) {
            if (e instanceof ValidationError) {
                assert.deepEqual(e.details.map((d) => d.message), ["\"title\" is required", "\"body\" is required"])
            } else {
                assert.fail('Should have thrown a ValidationError')
            }
        }
    })

    it('should return a PostMessageResult if provided with a valid message', () => {
        const result = postMessage({ title: 'HelloWorld', body: 'This is a test' })
        assert.deepEqual(result, { id: 1, title: 'HelloWorld', body: 'This is a test' })
    })

})