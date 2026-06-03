import { redirect } from "next/navigation";
import { getMarketingLoginUrl } from "@/lib/erpApi";

/** Field-team login is hosted on the ERP app. */
export default function MarketingLoginRedirectPage() {
  redirect(getMarketingLoginUrl());
}
