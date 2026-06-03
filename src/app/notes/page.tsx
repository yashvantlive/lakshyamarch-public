import { redirect } from "next/navigation";

export default function NotesRedirect() {
  redirect("/study-material");
  return null;
}
