// pages/api/services/[id].ts

import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";


export async function GET() {
    try {

        const services = await prisma.service.findMany();

        return NextResponse.json(services);

    } catch (error) {

        console.error("Error fetching services:", error);

        return NextResponse.json({ message: "Failed to fetch services" }, { status: 500 });
    }
}


