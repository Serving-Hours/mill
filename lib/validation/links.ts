import { z } from "zod";

// helper buat cek tanggal
const isFutureDate = (dateString: string) => {
  const date = new Date(dateString);
  return date > new Date();
};

// todo : better handling for experirsat and expires url cuz therees edge cases when theyre null
export const UpdateLinkSchema = z.object({
  url: z.string().url("Invalid URL"),
  slug: z.string({ message: "Please provide a correct slug" }),
  expiresAt: z
    .string()
    .refine(isFutureDate, { message: "Expiration date cannot be in the past" })
    .nullish(),
  expiresUrl: z.string().url("Invalid expire URL").nullish(),
});
