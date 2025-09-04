import FAQs from '@/components/FAQ\'s';
import Features from '@/components/featuers';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HowItWorks from '@/components/how-it-works';
import Introductions from '@/components/Introduction';
import Works from '@/components/works';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header />
      <Introductions />
      <Features />
      <HowItWorks />
      <Works />
      <FAQs />
      <Footer />
    </div>
  );
}
