"use client";

export default function Reviews() {
  const reviews = [
    { text: "Study Co transformed my study habits! Highly recommend.", author: "– Sarah L." },
    { text: "The AI explanations are top-notch and save me hours.", author: "– Mark T." },
    { text: "Great interface and easy to navigate.", author: "– Emily R." },
    { text: "I can track my progress and see real improvements.", author: "– John P." },
  ];

  return (
    <main className="flex flex-col items-center flex-1 p-10 mt-20 space-y-12 max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold mb-4 text-center">Reviews</h2>
      <p className="text-lg text-gray-300 text-center">
        Here’s what our users are saying about Study Co.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-10">
        {reviews.map((review, idx) => (
          <div key={idx} className="relative p-6 bg-black border border-gray-700 rounded">
            {/* Gradient glow around box */}
            <div className="absolute -inset-2 rounded pointer-events-none bg-gradient-to-r from-red-600 via-red-400 to-red-600 opacity-50 filter blur-xl z-[-1]"></div>

            <p>{review.text}</p>
            <p className="mt-2 font-bold">{review.author}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
