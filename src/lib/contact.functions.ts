import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactMessageSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(160),
  subject: z.string().trim().min(3).max(140),
  message: z.string().trim().min(10).max(3000),
  website: z.string().max(0),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data) => contactMessageSchema.parse(data))
  .handler(async ({ data }) => {
    const { website: _website, ...message } = data;
    const { deliverContactMessage } = await import("./contact.server");
    return deliverContactMessage(message);
  });