"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Clients() {
  const logos = [
    // put authorized logo files under /public/logos
    "/logos/client1.png", "/logos/client2.png", "/logos/client3.png", "/logos/client4.png"
  ];
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white text-3xl font-bold text-center mb-10">Trusted By</h2>
        <Swiper slidesPerView={3} loop autoplay={{ delay: 2200 } as any}>
          {logos.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} alt="Client logo" className="h-16 mx-auto grayscale hover:grayscale-0 transition" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
