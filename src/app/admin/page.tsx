import { redirect } from "next/navigation";
import { getPortalLoginUrl } from "@/lib/erpApi";

/** /admin is handled by the ERP app — redirect there. */
export default function AdminRedirectPage() {
  redirect(getPortalLoginUrl());
}
