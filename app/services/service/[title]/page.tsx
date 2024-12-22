import prisma from "@/lib/db";
import Image from "next/image";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;

  const service = await prisma.service.findUnique({
    // je veux récupérer une rangé ou le titre est = à  mon params title
    where: { title },
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
