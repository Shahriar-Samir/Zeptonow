import Image from "next/image";


export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center ">
        <Image src='/paan-corner-banner.webp' width={2000} height={300} alt="paan-corner-banner" className="p-2 pt-0"/>
    </section>
  );
}
