import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import { useContext } from 'react';
import { ContextProducts } from '@/components/ContextProducts';
import Link from 'next/link';

export default function Home() {

    const link_whatsapp =
        'https://api.whatsapp.com/send?phone=573008518082&text=Hola%20quiero%20mas%20informacion%20sobre';

    const router = useRouter();

    const ContextP = useContext(ContextProducts)

    const infoLink = `${link_whatsapp}%20${ContextP?.modalInfo?.name?.split(" ")?.join("%20")}`

    const descriptionProduct = (product) => {
        ContextP.setModal(false)
        ContextP.setModalInfo(product)
        ContextP.setModal(true)
    }

    return (
        <div className='relative'>
            <Header />
            <div
                className={`flex min-h-screen flex-col gap-10 items-center text-center py-8 px-5`}
            >
                <div
                    id="container-products"
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                    {ContextP?.products.map((product) => (
                        <div
                            key={product.name}
                            onClick={() => descriptionProduct(product)}
                            className="flex flex-col gap-5 items-start rounded-lg cursor-pointer border border-black p-4 bg-cerulean-blue-100"
                        >
                            {/* <h2 className='self-center'>{product.name}</h2> */}

                            <Image
                                src={product.img}
                                width={270}
                                height={165}
                                alt={product.name}
                                className=" w-72 h-60"
                            />

                            <div className="flex flex-col gap-2 pl-2 w-full">
                                <div className="flex justify-between p-1 bg-green-200">
                                    <span>{product.payment_time}:</span>
                                    <span>${product.payment_time_price}</span>
                                </div>

                                <div className="flex justify-between p-1">
                                    <span>Contado:</span>
                                    <span>${product.price_counted}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            { ContextP?.modal && (
                <div id="modal-products" className="fixed top-20 w-full flex justify-center p-3 ">

                    <div className='w-full h-auto max-w-[430px] p-3 py-5 relative flex flex-col gap-3 items-center justify-center rounded-lg bg-white border border-black'>

                        <svg onClick={() => ContextP.setModal(false)} className="absolute top-2 right-2 w-7 h-8 cursor-pointer text-gray-800 hover:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
                        </svg>

                        <div className=' mt-5 flex flex-col items-center gap-2'>
                            <span className=''>{ContextP?.modalInfo?.name}</span>

                            <Image
                                    src={ContextP?.modalInfo?.img}
                                    width={270}
                                    height={165}
                                    alt={ContextP?.modalInfo?.name}
                                    className=" w-72 h-60"
                            />
                        </div>

                        <div className='w-full flex flex-col gap-3 items-center'>
                            <div className="flex flex-col gap-2 pl-2 w-full">
                                <span>Formas de pago:</span>

                                <div className='p-2 bg-cerulean-blue-100'>
                                    <div className="flex justify-between p-1 bg-green-200">
                                        <span>{ContextP?.modalInfo?.payment_time}:</span>
                                        <span>${ContextP?.modalInfo?.payment_time_price}</span>
                                    </div>

                                    <div className="flex justify-between p-1">
                                        <span>Contado:</span>
                                        <span>${ContextP?.modalInfo?.price_counted}</span>
                                    </div>
                                </div>

                            </div>

                            <Link href={infoLink} className='ml-2 p-2 rounded-full self-start text-white bg-cerulean-blue-400' >Consultar</Link>
                        </div>

                    </div>

                </div>
                )}
        </div>
    );
}
