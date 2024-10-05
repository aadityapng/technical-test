import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-3xl font-bold">Pilih Soal Yang Kamu Inginkan</h1>
      <div className="flex items-center justify-center gap-10">
        <Link
          href="/soal-1"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Soal 1
        </Link>
        <Link
          href="/soal-2"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Soal 2
        </Link>
        <Link
          href="/soal-3"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Soal 3
        </Link>
        <Link
          href="/soal-4"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Soal 4
        </Link>
      </div>
    </div>
  );
}
