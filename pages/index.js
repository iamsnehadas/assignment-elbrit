import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Eden Pharmacy Landing Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Landing page for Eden Pharmacy community" />
      </Head>
      <div>
        <Header />
        <HeroSection />
        <FeaturesSection />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
}
