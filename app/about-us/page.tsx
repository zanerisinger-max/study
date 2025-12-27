"use client";

export default function AboutUs() {
  return (
    <main className="flex flex-col items-center flex-1 p-10 mt-20 space-y-12 max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold mb-4 text-center">About Us</h2>
      <p className="text-lg text-gray-300 text-center">
        Study Co is dedicated to creating a distraction-free, effective study platform for students. 
        Our mission is to help learners improve faster, stay organized, and get real-time AI assistance 
        for all their subjects.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-10">
        <div className="p-6 border border-gray-700 rounded">
          <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
          <p>To provide accessible, AI-powered study tools that help students reach their full potential.</p>
        </div>
        <div className="p-6 border border-gray-700 rounded">
          <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
          <p>To become the go-to platform for students worldwide, combining technology and education seamlessly.</p>
        </div>
        <div className="p-6 border border-gray-700 rounded">
          <h3 className="text-2xl font-bold mb-2">Our Values</h3>
          <p>Innovation, transparency, and dedication to making learning easier for every student.</p>
        </div>
        <div className="p-6 border border-gray-700 rounded">
          <h3 className="text-2xl font-bold mb-2">Meet the Team</h3>
          <p>A passionate group of developers, educators, and AI specialists working together to improve study experiences.</p>
        </div>
      </section>
    </main>
  );
}
