import Joi from "joi";

const PostMessageCommand = Joi.object({
    title: Joi.string()
        .alphanum()
        .required(),

    body: Joi.string()
        .required(),

})

export type PostMessageResult = {
    id: number,
    title: string,
    body: string
}

export function postMessage(message: any): PostMessageResult {
    const result = PostMessageCommand.validate(message, { abortEarly: false })

    if (result.error) {
        throw result.error
    }

    return {
        id: 1,
        title: result.value.title,
        body: result.value.body
    };
}

