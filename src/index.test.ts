import { assert } from 'chai';
import { describe } from 'mocha';
import { hello } from "."

describe('test', () => {

    it('should say world', () => {
        assert.equal(hello(), 'world')
    })
    
})