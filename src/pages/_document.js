import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                    {/* Primary Meta Tags */}
                    <title>Electrodomésticos Lister</title>
                    <meta name="title" content="Electrodomésticos Lister" />
                    <meta
                        name="description"
                        content="Toda la comodidad a tu alcance: Explora nuestra amplia selección de electrodomésticos de alta calidad, diseñados para hacer tu vida más fácil. Descubre desde innovadoras cocinas y refrigeradores eficientes hasta lavadoras y secadoras de última generación. Encuentra los electrodomésticos ideales para satisfacer tus necesidades en el hogar y disfruta de una experiencia única de comodidad y eficiencia en la vida cotidiana."
                    />
                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:url"
                        content="https://productos-lister.vercel.app/"
                    />
                    <meta
                        property="og:title"
                        content="Electrodomésticos Lister"
                    />
                    <meta
                        property="og:description"
                        content="Toda la comodidad a tu alcance: Explora nuestra amplia selección de electrodomésticos de alta calidad, diseñados para hacer tu vida más fácil. Descubre desde innovadoras cocinas y refrigeradores eficientes hasta lavadoras y secadoras de última generación. Encuentra los electrodomésticos ideales para satisfacer tus necesidades en el hogar y disfruta de una experiencia única de comodidad y eficiencia en la vida cotidiana."
                    />
                    <meta
                        property="og:image"
                        content="https://metatags.io/images/meta-tags.png"
                    />
                    {/* Twitter */}
                    <meta
                        property="twitter:card"
                        content="summary_large_image"
                    />
                    <meta
                        property="twitter:url"
                        content="https://productos-lister.vercel.app/"
                    />
                    <meta
                        property="twitter:title"
                        content="Electrodomésticos Lister"
                    />
                    <meta
                        property="twitter:description"
                        content="Toda la comodidad a tu alcance: Explora nuestra amplia selección de electrodomésticos de alta calidad, diseñados para hacer tu vida más fácil. Descubre desde innovadoras cocinas y refrigeradores eficientes hasta lavadoras y secadoras de última generación. Encuentra los electrodomésticos ideales para satisfacer tus necesidades en el hogar y disfruta de una experiencia única de comodidad y eficiencia en la vida cotidiana."
                    />
                    <meta
                        property="twitter:image"
                        content="https://metatags.io/images/meta-tags.png"
                    />
                    {/* Meta Tags Generated with https://metatags.io */}
            </Head>
            <body className="bg-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
