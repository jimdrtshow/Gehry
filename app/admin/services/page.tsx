"use client";
import Link from "next/link";
import Image from "next/image";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDeleteSweep } from "react-icons/md";
import Hero_section from "@/components/Hero_section";
import { useEffect } from "react";
import { useState } from "react";
import { type } from "os";

type Services = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

export default function AdminServices() {
  const [services, setServices] = useState<Services[]>([]);

  // GET DATA
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL}api/services`)
      .then((response) => response.json())
      .then((json: Services[]) => setServices(json))
      .catch((error) => console.error("Failed to fetch services", error));
  }, []);

  // DELETE USER
  // http://localhost:3000/admin/services/service/cm4y80vzd00019314kllq383e
  const deleteService = async (id: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/services/service/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete the service");
      }

      // Mettez à jour l'état local (Front-end) après suppression réussie
      setServices((values) => values.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting service:", error);
      // Gérez les erreurs ici (par exemple, afficher un message à l'utilisateur)
    }
  };

  return (
    <section className="w-screen h-auto flex items-center justify-center">
      <div className="w-11/12 h-5/6 ">
        <Hero_section
          children1={"Admin services."}
          children2={"Create. Read. Update. Delete Service"}
          children3={
            "On this page you can create, modify, read and delete services. "
          }
          children4={
            "You can add as many services as you like, but for the sake of aesthetics and user experience, I recommend six. What's more, if you want to optimize your SEO, don't neglect your service description."
          }
        />

        <div className="w-full h-auto pt-10 flex flex-wrap justify-around gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-[50vh] md:h-[30vh] lg:h-[50vh] relative"
            >
              {/* UPDATE & DELETE BUTTON */}
              <div className="absolute w-3/12 h-1/6 bg-my_color_9 left-0 top-0 z-20 flex items-center justify-center ">
                {/* UPDATE */}
                <Link href={`/admin/services/service/${service.id}`}>
                  <IoSettingsOutline className="text-xl hover:text-2xl text-my_color_1" />
                </Link>
              </div>
              <div className="absolute w-3/12 h-1/6 bg-my_color_1 right-0 top-0 z-20 flex items-center justify-center">
                {/* DELETE */}
                <button
                  onClick={() => {
                    deleteService(service.id);
                  }}
                >
                  <MdDeleteSweep className="text-2xl hover:text-3xl text-red-500" />
                </button>
              </div>

              <div className="absolute w-full h-1/6 bg-my_color_1 bottom-0 z-20 flex items-center justify-end text-my_color_9">
                <p className="text-[1rem] tracking-widest border-b border-my_color_8">
                  {service.title}
                </p>
              </div>
              <Image
                src={service.imageUrl}
                alt={service.title}
                fill
                className="object-cover z-10"
              />
            </div>
          ))}
        </div>
        <div className="w-full h-[20vh] flex justify-end items-center">
          <Link href="/admin/services/addService">
            <p className="text-[1rem]">add services</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
