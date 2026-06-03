import { redirect } from "next/navigation";
import { getPortalLoginUrl } from "@/lib/erpApi";

/** Portal sign-in is hosted on the ERP app, not the marketing site. */
export default function LoginRedirectPage() {
  redirect(getPortalLoginUrl());
}
