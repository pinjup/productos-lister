import Image from 'next/image';
import image_1 from "@/images/1.jpeg"
import image_2 from "@/images/2.jpeg"
import image_3 from "@/images/3.jpeg"
import image_4 from "@/images/4.jpeg"
import image_5 from "@/images/5.jpeg"
import image_6 from "@/images/6.jpeg"
import image_7 from "@/images/7.jpeg"
import image_8 from "@/images/8.jpeg"
import image_9 from "@/images/9.jpeg"
import image_10 from "@/images/10.jpeg"
import image_11 from "@/images/11.jpeg"

export default function Home() {

    const products = [
        {
            name: "Bateria Cocina IMUSA 5pz Talen",
            img: image_1,
            
        }
    ]

    return (
        <main
            className={`flex min-h-screen flex-col items-center p-24 font-mono`}
        >
            <h1 className="text-3xl">Productos Lister</h1>

            <Image
                src={image_1}
                width={500}
                height={500}
                alt="Picture of the author"
            />
        </main>
    );
}
