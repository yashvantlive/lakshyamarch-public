import { NextResponse } from "next/server";
import { getNormalizedFeed } from "@/lib/socialService";
import type { Platform, NormalizedSocialPost } from "@/lib/socialService";

export type { Platform, NormalizedSocialPost };

// FAANG Practice: Incremental Static Regeneration (ISR) configuration
export const revalidate = 3600;
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const platformFilter = searchParams.get("platform") as Platform | null;

    const data = await getNormalizedFeed(platformFilter || undefined);

    return NextResponse.json({
      success: true,
      cached: true,
      data,
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
      }
    });

  } catch (error) {
    console.error("[SOCIAL_API_ERROR]", error);
    return NextResponse.json(
      { success: false, data: [], error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
