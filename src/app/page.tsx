import Navbar from "@/components/molecules/Navbar";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-10 md:static md:z-0">
        <Navbar />
      </div>
      
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Home</h1>
      </div>
    </>
  );
}
