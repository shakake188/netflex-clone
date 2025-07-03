import React from "react";

export default function NetflixClone() {
  const movies = [
    {
      title: "فيلم الأكشن",
      image: "https://image.tmdb.org/t/p/original/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
      description: "أكشن وإثارة لا تتوقف في هذا الفيلم المشوّق.",
      video: "https://www.youtube.com/embed/9ix7TUGVYIo",
    },
    {
      title: "فيلم الرومانسية",
      image: "https://image.tmdb.org/t/p/original/wx4GIXUwhS3fHj2GwFQyZzzN5bA.jpg",
      description: "قصة حب مؤثرة ومليئة بالمشاعر.",
      video: "https://www.youtube.com/embed/8zLx_JtcQVI",
    },
    {
      title: "فيلم المغامرة",
      image: "https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
      description: "رحلة مغامرة عبر عالم غامض وخطير.",
      video: "https://www.youtube.com/embed/eHp3MbsCbMg",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-4 space-y-12 rtl">
      <header className="flex justify-between items-center px-4">
        <h1 className="text-3xl font-extrabold text-red-600">NETFLIX</h1>
        <nav className="space-x-4 text-sm">
          <a href="#" className="hover:underline">الرئيسية</a>
          <a href="#" className="hover:underline">أفلام</a>
          <a href="#" className="hover:underline">مسلسلات</a>
        </nav>
      </header>

      <section className="px-4">
        <h2 className="text-2xl mb-4">🎬 الأفلام المميزة</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {movies.map((movie, i) => (
            <div key={i} className="bg-zinc-900 rounded-xl overflow-hidden shadow-md">
              <img src={movie.image} alt={movie.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">{movie.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{movie.description}</p>
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full rounded"
                    src={movie.video}
                    title={movie.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6">
        &copy; {new Date().getFullYear()} Netflix Clone – موقع تجريبي لأغراض التعلم فقط
      </footer>
    </div>
  );
}
