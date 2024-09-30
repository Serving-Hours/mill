import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth/config";

export const getUser = async () => {
  const session = await getServerSession(authConfig);

  if (!session?.user) return null;

  return session.user!;
};