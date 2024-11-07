import Image from "next/image";


export default function Home() {

  const images:string[]=[
    '/category/1.webp',
    '/category/2.webp',
    '/category/3.webp',
    '/category/4.webp',
    '/category/5.webp',
    '/category/6.webp',
    '/category/7.webp',
  ]
  
  return (
    <main className="px-6">
        {/* <Image src='/paan-corner-banner.webp' width={2000} height={300} alt="w-full h-full paan-corner-banner" className="px-4 "/> */}
        <h1 className="text-xl font-font4">Snacks & Drinks</h1>
        <section className="grid grid-cols-8 gap-5 mt-6">
          {images.map((item,index)=>{
                if(index===0){
                  return <div key={item} className="col-span-2 flex flex-col items-center gap-2 ">
                <Image width={300} height={300} alt="example" src={item}/>
            </div>
                }
                else{
                  return <div key={item} className="flex flex-col items-center gap-2 ">
                <Image width={300} height={300} alt="example" src={item}/>
            </div>
                }
          })}
        </section>
    </main>
  );
}
