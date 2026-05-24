/** Base URL for LakshyaMarch ERP (API + auth). No trailing slash. */
export function getErpApiUrl(): string {
  const url = process.env.NEXT_PUBLIC_ERP_API_URL?.trim();
  if (url) return url.replace(/\/$/, "");
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";
  return "https://erp.lakshyamarch.com";
}

export function erpApiPath(path: string): string {
  const base = getErpApiUrl();
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Student / teacher / admin portal sign-in (hosted on ERP). */
export function getPortalLoginUrl(): string {
  return `${getErpApiUrl()}/login`;
}

export function getMarketingLoginUrl(): string {
  return `${getErpApiUrl()}/marketing/login`;
}
