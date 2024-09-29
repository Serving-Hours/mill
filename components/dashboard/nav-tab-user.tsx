import NavTab from "./nav-tab";
import { getUser } from "@/lib/actions/get-user";

/**
 * TODO: Would be nice to generalize this
 * so that we don't have to create a wrapper every time
 */
// Server Component Wrapper
export default async function NavTabWrapper() {
  const user = await getUser();
  return <NavTab user={user} />;
}