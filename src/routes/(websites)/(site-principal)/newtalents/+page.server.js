import { redirect } from "@sveltejs/kit";
export async function load() {
  throw redirect(301, "/blog/programa-new-talents");
}
