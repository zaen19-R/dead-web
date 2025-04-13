'use client';

import { useEffect, useRef, useState } from 'react';

export default function AudioPlayerWithPopup() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showPopup, setShowPopup] = useState(true);
  const [showModal, setShowModal] = useState(false); // Modal setelah popup
  const [modalVisibility, setModalVisibility] = useState(false); // Menunda tampilan modal

  const handleClosePopup = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      audio
        .play()
        .then(() => console.log('Audio playing'))
        .catch((err) => console.error('Audio play failed:', err));
    }
    setShowPopup(false); // Menutup popup
    setTimeout(() => {
      setModalVisibility(true); // Menampilkan modal setelah delay
      setShowModal(true); // Menampilkan modal
    }, 500); // Delay selama 500ms untuk transisi popup
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.load(); // Preload audio
    }
  }, []);

  return (
    <>
      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src="/audio/laught.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-red-900 bg-opacity-95 z-50">
          <div className="text-white text-center p-8 rounded-2xl shadow-2xl max-w-md w-full border-4 border-red-600">
            <h1 className="text-3xl font-extrabold mb-6 animate-pulse">You Shouldn't Be Here...</h1>
            <button onClick={handleClosePopup} className="mt-4 px-8 py-6 text-2xl font-bold bg-white text-red-700 rounded-full hover:bg-red-100 transition-all duration-300 shadow-xl animate-bounce">
              CLOSE
            </button>
          </div>
        </div>
      )}

      {/* MODAL SETELAH POPUP */}
      {showModal && modalVisibility && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-40 transition-opacity duration-500  opacity-0 opacity-100">
          <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-center transform transition duration-500  scale-80 opacity-0 scale-100 opacity-100">
            <h2 className="text-2xl font-bold mb-4">Alert!!!</h2>
            <p className="text-gray-700">Your location has been successfully sent.</p>
            <button onClick={() => setShowModal(false)} className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
