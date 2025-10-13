import { NextResponse } from "next/server";
import { getUserProStatus } from "@/lib/userStatus";

export async function GET() {
  try {
    const { isAuthenticated, isProUser, userId } = await getUserProStatus();

    return NextResponse.json({
      isAuthenticated,
      isProUser,
      userId: isAuthenticated ? userId : null
    });

  } catch (error: unknown) {
    console.error("Error checking user pro status:", error);
    return NextResponse.json(
      {
        error: "Failed to check pro status",
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
