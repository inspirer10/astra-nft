import Head from 'next/head';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Header from '@/Components/Header';
import Introduction from '@/Components/Introduction';
import PopularItem from '@/Components/PopularItem';
import ProductsShowcase from '@/Components/ProductsShowcase';
import Footer from '@/Components/Footer';

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <>
            <Head>
                <title>Astra NFT Marketplace</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/img2.png' />
            </Head>
            <Header />
            <Introduction />
            <PopularItem />
            <ProductsShowcase />
            <Footer />
        </>
    );
}
