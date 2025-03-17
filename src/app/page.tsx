import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-white rounded-lg p-8 shadow-md mb-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Latest Episode</h2>
      <p className="text-gray-700 mb-6">Stay tuned for our first episode launching soon!</p>
      <a 
        href="#" 
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
      >
        Listen Now
      </a>
    </section>
  );
}
