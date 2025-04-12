import AudioPlayer from '../../public/components/AudioPlayer';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <AudioPlayer />
        <div className="max-w-sm rounded-4xl overflow-hidden shadow-md shadow-gray-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 animate-wiggle">
          <img className="w-full" src="/img/bg-dasar.jpg" alt="Sunset in the mountains"></img>
          <div className="px-6 py-4 text-center bg-gray-900">
            <div className="text-gray-300 font-bold text-xl mb-2">Hello Human</div>
            <p className="text-gray-300 text-base">"If you see this, believe me — you will die. That’s my promise."</p>
          </div>

          <div className="px-6 pt-4 pb-2  bg-gray-900">
            <span className="inline-block bg-red-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#You Die</span>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">@Create By-Darkness</footer>
    </div>
  );
}
