import { assert } from 'chai';
import { describe } from 'mocha';
import { validateEmail } from './challenge';
import { expectZodErrors } from '../../lib/assert';

describe('challenge 0', () => {

    it('should accept a valid email address', () => {
        assert.equal(validateEmail('hello@world.ts'), 'hello@world.ts');
    })

    it('should not allow an invalid email address', () => {
        expectZodErrors(() => validateEmail('hello@world'), [
            {
                "validation": "email",
                "code": "invalid_string",
                "message": "Invalid email",
                "path": []
            }
        ]);
    })

})