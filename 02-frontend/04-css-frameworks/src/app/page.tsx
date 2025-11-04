import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#080808] min-h-screen grid place-items-center">
        {/* Intro */}
        <div className="flex w-fit">
          {/* Text */}
          <div className="w-[538px] text-white">
            <h1 className="text-[44px] font-raleway font-extrabold">
              Sudana Ahmad
            </h1>
            <p>
              Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <Link href="/">Let`s get started</Link>
          </div>

          {/* Photo Profile */}
          <div className="relative w-[350px] h-[350px] rounded-full overflow-hidden">
            <Image
              src="/photo-profile.jpg"
              alt="A man standing in front of the camera wearing glasses"
              // width={100}
              // height={100}
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section></section>
    </main>
  );
}
