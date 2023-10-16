import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Image
        src="/puppys.jpeg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60">
        <div className="min-h-screen flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-extrabold mb-4">Vuorivillen Kennel</h1>
          <p className="text-lg">Coming soon</p>
        </div>
      </div>
    </div>
  );
}
