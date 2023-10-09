
export type PostMessageCommand = {
    title: string,
    body: string
}

export type PostMessageResult = {
    id: number,
    title: string,
    body: string
}

export function postMessage(message: any): PostMessageResult {

    const errors: FieldError[] = []

    if (message == null || typeof message !== 'object') {
        throw new Error('Message is null or not an object')
    }

    if (!message.title) {
        errors.push(new FieldError('title', 'Title is required'))
    }

    if (message.title?.match(/^[a-z0-9]+$/i) == null) {
        errors.push(new FieldError('title', 'Title must be alphanumeric'))
    }

    if (!message.body) {
        errors.push(new FieldError('body', 'Body is required'))
    }

    // etc...

    if (errors.length != 0) {
        throw new ValidationError(errors);
    }

    return {
        id: 1,
        title: message.title,
        body: message.body
    };
}

export class ValidationError extends Error {
    constructor(public readonly errors: FieldError[]) {
        super('Validation error');
     }
}

export class FieldError {
    constructor(public readonly field: string, public readonly error: string) { }
}