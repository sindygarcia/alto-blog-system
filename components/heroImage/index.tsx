/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function HeroImage() {
  return (
    <img
      src="/hero_image_2.jpeg"
      alt="Blog Hero Image"
      style={{ position: "relative", height: "750px", width: "100%" }}
    />
  );
}
