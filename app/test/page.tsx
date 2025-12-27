"use client";

export default function TestPage() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 p-10 mt-20">
      <h1 className="text-5xl font-bold mb-6 text-center text-red-500">
        Test Page
      </h1>
      <p className="text-lg text-gray-300 text-center">
        If you can see this page with the header and footer, everything is working correctly!
      </p>
    </main>
  );
}
