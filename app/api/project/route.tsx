
import { db } from "@/config/db";
import { projectTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const {projectId, userInput, device}= await req.json()
    const user = await currentUser()

    const result = await db.insert(projectTable).values({
        projectId,
        userId: user?.primaryEmailAddress?.emailAddress as string,
        device,
        userInput
    }).returning()

    return NextResponse.json(result[0])
}