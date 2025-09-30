"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Clients() {
  const logos = [
    "/logos/client1.png",
    "/logos/client2.png",
    "/logos/client3.png",
    "/logos/client4.png",
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Clients</h2>
        <Swiper slidesPerView={3} loop autoplay={{ delay: 2000 } as any}>
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={logo}
                alt={`Client ${idx}`}
                className="h-16 mx-auto grayscale hover:grayscale-0 transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
