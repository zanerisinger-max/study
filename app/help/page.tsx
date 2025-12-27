"use client";

export default function Help() {
  return (
    <main className="flex flex-col items-center flex-1 p-10 mt-20 space-y-12 max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold mb-4 text-center">Help</h2>
      <p className="text-lg text-gray-300 text-center">
        Need assistance? Here’s a guide to get you started with Study Co.
        Browse the sections below for detailed instructions or reach out to our support team.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-10">
        <div className="p-6 border border-gray-700 rounded">
          <h3 className="text-2xl font-bold mb-2">Getting Started</h3>
          <p>Create an account, select your subjects, and start using AI guidance immediately.</p>
        </div>
        <div className="p-6 border border-gray-700 rounded">
          <h3 className="text-2xl font-bold mb-2">Account Management</h3>
          <p>Learn how to manage your account settings, subscription plans, and profile information.</p>
        </div>
        <div className="p-6 border border-gray-700 rounded">
          <h3 className="text-2xl font-bold mb-2">FAQ</h3>
          <p>Answers to frequently asked questions about Study Co features and tools.</p>
        </div>
        <div className="p-6 border border-gray-700 rounded">
          <h3 className="text-2xl font-bold mb-2">Contact Support</h3>
          <p>If you run into any issues, contact our support team for prompt assistance.</p>
        </div>
      </section>
    </main>
  );
}
