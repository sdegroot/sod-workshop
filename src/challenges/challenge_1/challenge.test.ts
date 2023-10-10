import { describe } from 'mocha';
import { signUp } from './challenge';
import { expectZodErrors } from '../../lib/assert';

describe('challenge 1', () => {
    function getValidForm() {
        return {
            firstName: 'Alex',
            lastName: 'Nicolas',
            email: 'alex.nicolas@msn.com',
            password: 'a-valid-password',
            age: 18,
        };
    }

    it('should accept a valid sign up form', () => {
        signUp(getValidForm());
    })

    it('should not allow registration under 18', () => {
        expectZodErrors(() => signUp({
            ...getValidForm(),
            age: 17
        }), [
            {
                "type": "number",
                "inclusive": true,
                "exact": false,
                "code": "too_small",
                "minimum": 18,
                "message": "Number must be greater than or equal to 18",
                "path": ['age']
            }
        ]);
    })

    it('should only allow valid field types', () => {
        expectZodErrors(() => signUp({
            firstName: [],
            lastName: 1.2,
            email: {},
            password: 1,
            age: 'string',
        }), [
            {
                "code": "invalid_type",
                "expected": "string",
                "received": "array",
                "path": [
                    "firstName"
                ],
                "message": "Expected string, received array"
            },
            {
                "code": "invalid_type",
                "expected": "string",
                "received": "number",
                "path": [
                    "lastName"
                ],
                "message": "Expected string, received number"
            },
            {
                "code": "invalid_type",
                "expected": "string",
                "received": "object",
                "path": [
                    "email"
                ],
                "message": "Expected string, received object"
            },
            {
                "code": "invalid_type",
                "expected": "string",
                "received": "number",
                "path": [
                    "password"
                ],
                "message": "Expected string, received number"
            },
            {
                "code": "invalid_type",
                "expected": "number",
                "received": "string",
                "path": [
                    "age"
                ],
                "message": "Expected number, received string"
            }
        ]);
    })

    it('should require all fields', () => {
        expectZodErrors(() => signUp({
        }), [
            {
                "code": "invalid_type",
                "expected": "string",
                "message": "Required",
                "path": [
                    "firstName"
                ],
                "received": "undefined",
            },
            {
                "code": "invalid_type",
                "expected": "string",
                "message": "Required",
                "path": [
                    "lastName",
                ],
                "received": "undefined",
            },
            {
                "code": "invalid_type",
                "expected": "string",
                "message": "Required",
                "path": [
                    "email",
                ],
                "received": "undefined",
            },
            {
                "code": "invalid_type",
                "expected": "string",
                "message": "Required",
                "path": [
                    "password",
                ],
                "received": "undefined",
            },
            {
                "code": "invalid_type",
                "expected": "number",
                "message": "Required",
                "path": [
                    "age",
                ],
                "received": "undefined"
            }
        ]);
    })

})