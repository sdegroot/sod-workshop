import * as z from 'zod'

const PostMessageCommand = z.object({
    title: z.string().regex(/^[a-zA-Z0-9]+$/),
    body: z.string()
})
type PostMessageCommand = z.infer<typeof PostMessageCommand>

export type PostMessageResult = {
    id: number,
    title: string,
    body: string
}

export function postMessage(message: any): PostMessageResult {
    const result = PostMessageCommand.parse(message)

    return {
        id: 1,
        title: result.title,
        body: result.body
    };
}

