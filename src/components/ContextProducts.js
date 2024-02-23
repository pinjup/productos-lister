import { createContext, useState } from 'react';
import image_1 from '@/images/1.jpeg';
import image_2 from '@/images/2.jpeg';
import image_3 from '@/images/3.jpeg';
import image_4 from '@/images/4.jpeg';
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
import image_21 from '@/images/21.jpeg';
import image_22 from '@/images/22.jpeg';
import image_23 from '@/images/23.jpeg';
import image_24 from '@/images/24.jpeg';
import image_25 from '@/images/25.jpeg';
import image_26 from '@/images/26.jpeg';
import image_27 from '@/images/27.jpeg';
import image_28 from '@/images/28.jpeg';
import image_29 from '@/images/29.jpeg';
import image_30 from '@/images/30.jpeg';
import image_31 from '@/images/31.jpeg';
import image_32 from '@/images/32.jpeg';
import image_33 from '@/images/33.jpeg';
import image_34 from '@/images/34.jpeg';
import image_35 from '@/images/35.jpeg';
import image_36 from '@/images/36.jpeg';
import image_37 from '@/images/37.jpeg';
import image_38 from '@/images/38.jpeg';
import image_39 from '@/images/39.jpeg';
import image_40 from '@/images/40.jpeg';
import image_41 from '@/images/41.jpeg';
import image_42 from '@/images/42.jpeg';
import image_43 from '@/images/43.jpeg';
import image_44 from '@/images/44.jpeg';
import image_45 from '@/images/45.jpeg';
import image_46 from '@/images/46.jpeg';


const ContextProducts = createContext();

function ContextProviderP({ children }) {
    const products = [
        {
            name: 'Bateria Cocina IMUSA 5pz Talen',
            img: image_1,
            payment_time: '40 dias',
            payment_time_price: '5.000',
            price_counted: '160.000',
        },
        {
            name: 'Juego de 2 Sartenes IMUSA',
            img: image_2,
            payment_time: '40 dias',
            payment_time_price: '3.000',
            price_counted: '85.000',
        },
        {
            name: 'Set 2 Calderos Imusa',
            img: image_3,
            payment_time: '40 dias',
            payment_time_price: '5.000',
            price_counted: '140.000',
        },
        {
            name: 'Combo Caldero y sarten',
            img: image_4,
            payment_time: '40 dias',
            payment_time_price: '3.500',
            price_counted: '95.000',
        },
        {
            name: 'Arrocera Kalley 2 libras',
            img: image_6,
            payment_time: '48 dias',
            payment_time_price: '5.000',
            price_counted: '170.000',
        },
        {
            name: 'Freidora de aire Black Decker 4.5l',
            img: image_7,
            payment_time: '60 dias',
            payment_time_price: '9.000',
            price_counted: '410.000',
        },
        {
            name: 'Ventilador 3 en 1 Kalley',
            img: image_8,
            payment_time: '60 dias',
            payment_time_price: '8.000',
            price_counted: '260.000',
        },
        {
            name: 'Ventilador Silence Force Plus 2 en 1',
            img: image_9,
            payment_time: '70 dias',
            payment_time_price: '7.500',
            price_counted: '320.000',
        },
        {
            name: 'Ventilador Samurai de pared blanco',
            img: image_10,
            payment_time: '70 dias',
            payment_time_price: '7.000',
            price_counted: '310.000',
        },
        {
            name: 'Set Cacerolas Imusa',
            img: image_11,
            payment_time: '40 dias',
            payment_time_price: '3.000',
            price_counted: '80.000',
        },
        {
            name: 'Freidora de Aire Imusa 3,2 litros',
            img: image_12,
            payment_time: '60 dias',
            payment_time_price: '8.000',
            price_counted: '380.000',
        },
        {
            name: 'Bateria 7 piezas IMUSA',
            img: image_13,
            payment_time: '60 dias',
            payment_time_price: '8.000',
            price_counted: '380.000',
        },
        {
            name: 'Juego de ollas de 10 piezas Imusa Talent',
            img: image_14,
            payment_time: '70 dias',
            payment_time_price: '8.000',
            price_counted: '460.000',
        },
        {
            name: 'Televisor Kalley 55"',
            img: image_15,
            payment_time: '120 dias',
            payment_time_price: '25.000',
            price_counted: '2.400.000',
        },
        {
            name: 'Waflera giratoria Kalley',
            img: image_16,
            payment_time: '40 dias',
            payment_time_price: '5.000',
            price_counted: '160.000',
        },
        {
            name: 'Smart TV 58" TCL',
            img: image_17,
            payment_time: '120 dias',
            payment_time_price: '26.000',
            price_counted: '2.500.000',
        },
        {
            name: 'Smart TV 4K UHD 43" Kalley',
            img: image_18,
            payment_time: '120 dias',
            payment_time_price: '15.000',
            price_counted: '1.300.000',
        },
        {
            name: 'Smart TV HD 32"',
            img: image_19,
            payment_time: '90 dias',
            payment_time_price: '13.000',
            price_counted: '890.000',
        },
        {
            name: 'Licuadora Optimix Plus',
            img: image_20,
            payment_time: '40 dias',
            payment_time_price: '3.500',
            price_counted: '87.000',
        },
        {
            name: 'Sanduchera Kalley Blanca',
            img: image_21,
            payment_time: '40 dias',
            payment_time_price: '3.000',
            price_counted: '80.000',
        },
        {
            name: 'Set olla 20cm y sarten 20cm',
            img: image_22,
            payment_time: '40 dias',
            payment_time_price: '4.000',
            price_counted: '120.000',
        },
        {
            name: 'Cocineta de 1 puesto Haceb',
            img: image_23,
            payment_time: '35 dias',
            payment_time_price: '4.000',
            price_counted: '110.000',
        },
        {
            name: 'Cocineta de 1 puesto abba',
            img: image_24,
            payment_time: '30 dias',
            payment_time_price: '5.000',
            price_counted: '120.000',
        },
        {
            name: 'Lonchera Eléctrica Kalley',
            img: image_25,
            payment_time: '30 dias',
            payment_time_price: '4.000',
            price_counted: '90.000',
        },
        {
            name: 'Exprimidor de citricos oster',
            img: image_26,
            payment_time: '40 dias',
            payment_time_price: '6.000',
            price_counted: '190.000',
        },
        {
            name: 'Freidora de aire 4 litros imusa',
            img: image_27,
            payment_time: '60 dias',
            payment_time_price: '8.000',
            price_counted: '420.000',
        },
        {
            name: 'Freidora de aire Kalley',
            img: image_28,
            payment_time: '60 dias',
            payment_time_price: '10.000',
            price_counted: '450.000',
        },
        {
            name: 'Vajilla Enigma',
            img: image_29,
            payment_time: '48 dias',
            payment_time_price: '6.000',
            price_counted: '200.000',
        },
        {
            name: 'Sarten imusa',
            img: image_30,
            payment_time: '30 dias',
            payment_time_price: '4.000',
            price_counted: '95.000',
        },
        {
            name: 'Sarten imusa',
            img: image_31,
            payment_time: '30 dias',
            payment_time_price: '4.000',
            price_counted: '92.000',
        },
        {
            name: 'Caldero imusa',
            img: image_32,
            payment_time: '40 dias',
            payment_time_price: '5.000',
            price_counted: '150.000',
        },
        {
            name: 'Caldero imusa',
            img: image_33,
            payment_time: '30 dias',
            payment_time_price: '5.000',
            price_counted: '120.000',
        },
        {
            name: 'Olla imusa',
            img: image_34,
            payment_time: '65 dias',
            payment_time_price: '10.000',
            price_counted: '600.000',
        },
        {
            name: 'Olla Oster',
            img: image_35,
            payment_time: '30 dias',
            payment_time_price: '4.000',
            price_counted: '85.000',
        },
        {
            name: 'Extractor Black & Decker',
            img: image_36,
            payment_time: '45 dias',
            payment_time_price: '8.000',
            price_counted: '300.000',
        },
        {
            name: 'Hervidor agua Kalley',
            img: image_37,
            payment_time: '35 dias',
            payment_time_price: '6.000',
            price_counted: '130.000',
        },
        {
            name: 'Arrocera Kalley',
            img: image_38,
            payment_time: '50 dias',
            payment_time_price: '6.000',
            price_counted: '180.000',
        },
        {
            name: 'Licuadora Black Decker',
            img: image_39,
            payment_time: '50 dias',
            payment_time_price: '5.000',
            // price_counted: '180.000',
        },
        {
            name: 'Cafetera Black Decker',
            img: image_40,
            payment_time: '50 dias',
            payment_time_price: '5.000',
            // price_counted: '180.000',
        },
        {
            name: 'Olla',
            img: image_41,
            payment_time: '40 dias',
            payment_time_price: '5.000',
            // price_counted: '180.000',
        },
        {
            name: 'Hervidor Agua Kalley ',
            img: image_42,
            payment_time: '40 dias',
            payment_time_price: '6.000',
            // price_counted: '180.000',
        },
        {
            name: 'Exprimidor Oster',
            img: image_43,
            payment_time: '40 dias',
            payment_time_price: '6.000',
            // price_counted: '180.000',
        },
        {
            name: 'Sanduchera',
            img: image_44,
            payment_time: '30 dias',
            payment_time_price: '5.000',
            // price_counted: '180.000',
        },
        {
            name: 'Procesador alimentos Oster',
            img: image_45,
            payment_time: '30 dias',
            payment_time_price: '6.000',
            // price_counted: '180.000',
        },
        {
            name: 'Cafetera Kalley',
            img: image_46,
            payment_time: '60 dias',
            payment_time_price: '5.000',
            // price_counted: '180.000',
        },
    ];

    const [modal, setModal] = useState(false);

    const [modalInfo, setModalInfo] = useState();

    return (
        <ContextProducts.Provider
            value={{ modal, setModal, modalInfo, setModalInfo, products }}
        >
            {children}
        </ContextProducts.Provider>
    );
}

export { ContextProviderP, ContextProducts };
