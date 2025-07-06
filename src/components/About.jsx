import React from "react";

function About() {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 mt-10">
      <h1 className="text-3xl font-bold text-green-700 mb-2">
        🌱 About EcoCart
      </h1>
      <h2 className="text-xl font-semibold text-green-600 mb-4">
        ♻️ Reimagining the Way We Shop
      </h2>
      <p className="text-gray-700 mb-4">
        At EcoCart, we believe that every purchase is a chance to make a
        difference. While most people want to shop sustainably, the reality is
        that eco-friendly options are often hidden, confusing, or inconvenient.
        That’s where we come in.
      </p>

      <h3 className="text-lg font-bold text-green-700 mb-2">💡 Our Mission</h3>
      <p className="text-gray-700 mb-2">
        To bridge the intent-action gap in sustainable shopping by making
        eco-conscious choices:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
        <li>Visible</li>
        <li>Social</li>
        <li>Engaging</li>
        <li>Actionable</li>
      </ul>
      <p className="text-gray-700 mb-4">
        We aim to turn every shopping session into a step toward a greener
        future — without compromising on convenience or experience.
      </p>

      <h3 className="text-lg font-bold text-green-700 mb-2">🌿 What We Do</h3>
      <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
        <li>Simulate the carbon footprint of your cart in real-time</li>
        <li>Suggest greener alternatives instantly</li>
        <li>Encourage group-based actions through Green Chains</li>
        <li>Reward your efforts with EcoPoints, badges, and streaks</li>
        <li>
          Promote circular economy thinking via reusability and recyclability
          scores
        </li>
        <li>
          Help you contribute to real-world change through carbon offset
          donations
        </li>
      </ul>
      <p className="text-gray-700 mb-4">
        Whether it’s choosing a more sustainable product or avoiding unnecessary
        packaging, EcoCart nudges you toward better decisions — without making
        you leave your favorite e-commerce platform.
      </p>

      <h3 className="text-lg font-bold text-green-700 mb-2">
        🤝 Why It Matters
      </h3>
      <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
        <li>
          🌍 76% of consumers want to shop sustainably, but only 26% actually
          do.
        </li>
        <li>
          👥 People are 38% more likely to build eco-friendly habits in a group.
        </li>
        <li>
          🎮 Gamification can boost engagement by over 40% in behavioral apps.
        </li>
      </ul>
      <p className="text-gray-700 mb-4">
        We combine behavioral science and clean technology to make sustainable
        shopping:
        <br />
        <span className="block mt-2 ml-4 italic text-green-700">
          Not just a checkbox.
          <br />
          But a lifestyle.
        </span>
      </p>

      <h3 className="text-lg font-bold text-green-700 mb-2">
        🚀 Built for Impact
      </h3>
      <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
        <li>Modular – Easy to integrate and scale</li>
        <li>Data-light – Based on category heuristics and public APIs</li>
        <li>Demo-ready – Functional in a simulated Amazon-like experience</li>
      </ul>
      <p className="text-gray-700 mb-4">
        Even small changes, made consistently, lead to big results. With
        EcoCart, you don’t have to overhaul your life to help the planet — you
        just have to shop a little smarter.
      </p>

      <h3 className="text-lg font-bold text-green-700 mb-2">
        🌐 Join the Eco Movement
      </h3>
      <p className="text-gray-700">
        Together, one cart at a time, we can create a future where shopping
        isn’t just sustainable — it’s smart, social, and satisfying.
      </p>
    </div>
  );
}

export default About;
