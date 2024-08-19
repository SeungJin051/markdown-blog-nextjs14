import Hero from '@/components/home/Hero';

export default function Home() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <section className="flex flex-col items-center min-h-screen text-gray-600 body-font">
          <div className="container flex flex-col items-center px-5 py-24 pb-0 mx-auto md:flex-row">
            <Hero />
          </div>
        </section>
      </section>
    </div>
  );
}
