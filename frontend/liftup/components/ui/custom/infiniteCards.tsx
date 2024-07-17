
"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../infinite-moving-cards";

export default function InfiniteCards() {
  return (
    <div className="h-[40rem] min-w-max rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    image_url: "/images/gym.jpg",
    feature: "Gym Membership Management",
  },
  {
    image_url: "/images/gym.jpg",
    feature: "Gym Payment Tracking",
  },
  {
    image_url: "/images/gym.jpg",
    feature: "Gym Attendance Tracking",
  },
  {
    image_url: "/images/gym.jpg",
    feature: "Stay updated with Gym News",
  },
  {
    image_url: "/images/gym.jpg",
    feature: "Check in and check out with ease",
  },
  
];
