import Image from 'next/image';
import { useRouter } from 'next/router';
import image_1 from '@/images/1.jpeg';
import image_2 from '@/images/2.jpeg';
import image_3 from '@/images/3.jpeg';
import image_4 from '@/images/4.jpeg';
// import image_5 from '@/images/5.jpeg';
import image_6 from '@/images/6.jpeg';
import image_7 from '@/images/7.jpeg';
import image_8 from '@/images/8.jpeg';
import image_9 from '@/images/9.jpeg';
import image_10 from '@/images/10.jpeg';
import image_11 from '@/images/11.jpeg';
import image_12 from '@/images/12.jpg';
import image_13 from '@/images/13.jpeg';
import image_14 from '@/images/14.jpeg';
import image_15 from '@/images/15.jpeg';
import image_16 from '@/images/16.jpeg';
import image_17 from '@/images/17.jpeg';
import image_18 from '@/images/18.jpeg';
import image_19 from '@/images/19.jpeg';
import image_20 from '@/images/20.jpeg';


export default function Home() {
    const products = [
        {
            name: 'Bateria Cocina IMUSA 5pz Talen',
            img: image_1,
            payment_time: "40 dias",
            payment_time_price: "5.000",
            price_counted: "160.000" 
        },
        {
            name: 'Juego de 2 Sartenes IMUSA',
            img: image_2,
            payment_time: "40 dias",
            payment_time_price: "3.000",
            price_counted: "85.000" 
        },
        {
            name: 'Set 2 Calderos',
            img: image_3,
            payment_time: "40 dias",
            payment_time_price: "4.500",
            price_counted: "130.000" 
        },
        {
            name: 'Combo Caldero y sarten',
            img: image_4,
            payment_time: "40 dias",
            payment_time_price: "3.500",
            price_counted: "95.000" 
        },
        {
            name: 'Arrocera Kalley 2 libras',
            img: image_6,
            payment_time: "48 dias",
            payment_time_price: "5.000",
            price_counted: "160.000" 
        },
        {
            name: 'Freidora de aire Black Decker 4.5l',
            img: image_7,
            payment_time: "60 dias",
            payment_time_price: "9.000",
            price_counted: "410.000" 
        },
        {
            name: 'Ventilador 3 en 1 Kalley',
            img: image_8,
            payment_time: "60 dias",
            payment_time_price: "8.000",
            price_counted: "260.000" 
        },
        {
            name: 'Ventilador Silence Force Plus 2 en 1',
            img: image_9,
            payment_time: "70 dias",
            payment_time_price: "7.500",
            price_counted: "320.000" 
        },
        {
            name: 'Ventilador Samurai de pared blanco',
            img: image_10,
            payment_time: "70 dias",
            payment_time_price: "7.000",
            price_counted: "310.000" 
        },
        {
            name: 'Set Cacerolas Imusa',
            img: image_11,
            payment_time: "40 dias",
            payment_time_price: "3.000",
            price_counted: "80.000" 
        },
        {
            name: 'Freidora de Aire Imusa 3,2 litros',
            img: image_12,
            payment_time: "60 dias",
            payment_time_price: "8.000",
            price_counted: "380.000" 
        },
        {
            name: 'Bateria 7 piezas IMUSA',
            img: image_13,
            payment_time: "60 dias",
            payment_time_price: "7.000",
            price_counted: "360.000" 
        },
        {
            name: 'Juego de ollas de 10 piezas Imusa Talent',
            img: image_14,
            payment_time: "70 dias",
            payment_time_price: "8.000",
            price_counted: "460.000" 
        },
        {
            name: 'Televisor Kalley 55"',
            img: image_15,
            payment_time: "120 dias",
            payment_time_price: "25.000",
            price_counted: "2.400.000" 
        },
        {
            name: 'Waflera giratoria Kalley',
            img: image_16,
            payment_time: "40 dias",
            payment_time_price: "5.000",
            price_counted: "160.000" 
        },
        {
            name: 'Smart TV 58" TCL',
            img: image_17,
            payment_time: "120 dias",
            payment_time_price: "26.000",
            price_counted: "2.500.000" 
        },
        {
            name: 'Smart TV 4K UHD 43" Kalley',
            img: image_18,
            payment_time: "120 dias",
            payment_time_price: "15.000",
            price_counted: "1.300.000" 
        },
        {
            name: 'Smart TV HD 32"',
            img: image_19,
            payment_time: "90 dias",
            payment_time_price: "13.000",
            price_counted: "890.000" 
        },
        {
            name: 'Licuadora Optimix Plus',
            img: image_20,
            payment_time: "40 dias",
            payment_time_price: "3.500",
            price_counted: "87.000" 
        },
    ];

    const link_whatsapp = 'https://api.whatsapp.com/send?phone=+573008518082&text=Hola%20quiero%20saber%20mas%20informacion%20sobre%20uno%20de%20tus%20productos'

    const router = useRouter()



    return (
        <main
            className={`flex min-h-screen flex-col gap-10 items-center text-center py-8 px-5 font-mono`}
        >
            <h1 className="text-4xl font-bold">Productos Lister</h1>

            <div id="container-products" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div key={product.name} onClick={() => router.push(link_whatsapp)} className='flex flex-col gap-5 items-start rounded-lg cursor-pointer border border-black p-4 bg-[#e5e6e8]'>

                        {/* <h2 className='self-center'>{product.name}</h2> */}

                        <Image
                            src={product.img}
                            width={270}
                            height={165}
                            alt={product.name}
                            className=' w-72 h-60'
                        />

                        <div className='flex flex-col gap-2 pl-2 w-full'>
                            
                            <div className='flex justify-between p-1 bg-green-200'>
                                <span>{product.payment_time}:</span>
                                <span>${product.payment_time_price}</span>
                            </div>

                            <div className='flex justify-between p-1'>
                                <span>Contado:</span>
                                <span>${product.price_counted}</span>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
