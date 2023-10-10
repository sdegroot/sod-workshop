/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from "zod";


const BaseEvent = z.object({
    eventId: z.string(),
    occurredOn: z.date()
})

const ParticipantRegistered = BaseEvent.extend({
    email: z.string().email(),
    name: z.string()
})

const PresentationStarted = BaseEvent.extend({
    presentation: z.string()
})
