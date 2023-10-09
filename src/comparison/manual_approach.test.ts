import { assert } from 'chai';
import { describe } from 'mocha';
import { ValidationError, postMessage } from './manual_approach';

describe('oldskool manual approach', () => {

    it('should throw an error if provided with null ', () => {
        assert.throws(() => {
            postMessage(null)
        }, 'Message is null or not an object')
    })

    it('should throw a ValidationError if provided with an empty object', () => {
        try {
            postMessage({})
            assert.fail('Should have thrown an error')
        }
        catch (e: any) {
            assert.instanceOf(e, ValidationError)

            assert.deepEqual(e.errors, [
                { field: 'title', error: 'Title is required' },
                { field: 'title', error: 'Title must be alphanumeric' },
                { field: 'body', error: 'Body is required' },
            ])
        }
    })

    it('should return a PostMessageResult if provided with a valid message', () => {
        const result = postMessage({ title: 'HelloWorld', body: 'This is a test' })
        assert.deepEqual(result, { id: 1, title: 'HelloWorld', body: 'This is a test' })
    })

})