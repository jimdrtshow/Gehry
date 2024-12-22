"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function CreateService(formData: FormData) {
  await prisma.service.create({
    data: {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      imageUrl: formData.get("image") as string,
    },
  });
  // revalidatePath("/services");
}
