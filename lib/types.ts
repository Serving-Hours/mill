import { SelectLink } from "@/app/db/schema";

export type User = {
  id: string;
} & {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

export type Link = SelectLink;