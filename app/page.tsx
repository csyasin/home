import Image from "next/image";

export default function Home() {
  return (
    <section className="h-full flex flex-col items-center justify-center py-8 md:py-10">
      <Image alt="home-image" height={1296} src="/home-img.jpg" width={864} />
    </section>
  );
}
