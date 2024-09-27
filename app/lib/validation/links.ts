import { z } from "zod";

export const CreateLinkSchema = z.object({
  url: z.string().url("Invalid URL"),
  slug: z.string({ message: "Please provide a slug" })
});