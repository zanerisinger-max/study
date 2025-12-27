"use client";

import { useRouter } from "next/navigation";

export default function Pricing() {
  const router = useRouter();

  const plans = [
    { name: "Free", description: "Basic AI study tools with limited access.", price: "$0/month", route: "/pricing/free" },
    { name: "Pro", description: "Full AI guidance and unlimited features.", price: "$9.99/month", route: "/pricing/pro" },
    { name: "Premium", description: "Priority support and advanced tools.", price: "$19.99/month", route: "/pricing/premium" },
  ];

  return (
    <main className="flex flex-col items-center flex-1 p-10 mt-20 space-y-16 max-w-6xl mx-auto">
      {/* Pricing Header */}
      <section className="flex flex-col items-center text-center">
        <h2 className="text-5xl font-bold mb-4 text-center">Pricing</h2>
        <p className="text-lg text-gray-300 max-w-2xl">
          Choose the plan that fits your learning style. Click a plan for more details.
        </p>
      </section>

      {/* Pricing Plans */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {plans.map((plan) => (
          <div
            key={plan.name}
            onClick={() => router.push(plan.route)}
            className="relative p-6 bg-black border border-gray-700 rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:border-red-500"
          >
            {/* Gradient glow around box */}
            <div className="absolute -inset-2 rounded pointer-events-none bg-gradient-to-r from-red-600 via-red-400 to-red-600 opacity-50 filter blur-xl z-[-1]"></div>

            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-gray-300 mb-4">{plan.description}</p>
            <p className="text-xl font-bold">{plan.price}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
