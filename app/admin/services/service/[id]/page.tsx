"use client";
import prisma from "@/lib/db";
import Image from "next/image";

// import { useState } from "react";
// import { useEffect } from "react";

export default async function AdminServicePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const service = await prisma.service.findUnique({
    where: { id },
  });

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <h1>{service.title}</h1>
      <ul>
        <li>{service.description}</li>
        <li>
          <Image
            src={service.imageUrl}
            alt={service.title}
            width={500}
            height={500}
            className="object-cover z-10"
          />
        </li>
      </ul>
    </div>
  );
}
