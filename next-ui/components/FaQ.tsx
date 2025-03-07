"use client";
import React, { useState } from "react";

interface FAQItem {
  title: string;
  content: string;
}

function FaQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      title: "Is AlienUI a component library?",
      content:
        "Yes, It is a self-hosted component library but you do not install it as a dependency. It is not available via npm like other traditional component library. Pick the components you need. " +
        "Copy and paste the code into your project and customize to your needs. The code is yours.",
    },
    {
      title: "Why copy/paste and not packaged as a dependency?",
      content:
        "The goal is to give you full control over your components, enabling you to decide their structure and styling. By starting with sensible defaults, you can customize them to fit your needs. Unlike packaged npm components, where styles are tightly coupled to implementation, separating design from functionality ensures flexibility and adaptability.",
    },
    {
      title: "Do you plan to publish it as an npm package?",
      content: "No. We have no plans to publish it as an npm package.",
    },
    {
      title: "Which frameworks are supported?",
      content:
        "You can use any framework that supports React Native. Expo etc.",
    },
    {
      title: "Can I use this in my project?",
      content:
        "Yes, you can use AlienUI components in your React Native project. The code is yours. But hey, let us know if you do. We'd love to see what you build.",
    },
    {
      title: "How can I support AlienUI?",
      content:
        "You can support AlienUI by starring the project on GitHub and/or sharing it on Twitter and LinkedIn. It helps increase the project's visibility.",
    },
    {
      title: "How do I contribute?",
      content:
        "You can contribute by adding new components, fixing bugs, or improving the documentation. Please create an issue before starting any work.",
    },
    {
      title: "How do I get updates?",
      content:
        "The best way to get updates is by following the project on GitHub and all social media platforms like Twitter, LinkedIn etc. You can also get latest updates by subscribing to our newsletter.",
    },
    {
      title: "Can I request new features for AlienUI?",
      content:
        "Yes, you can create a new issue on GitHub to request new features. While not every request will be implemented, they all will be considered.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center px-4 my-16">
      <h1 className="text-3xl font-bold sm:text-4xl text-center mb-8">FAQ</h1>{" "}
      <div className="w-full max-w-7xl mx-auto border border-black rounded-lg bg-white">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b last:border-b-0">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left py-4 px-6 flex justify-between items-center"
            >
              <span className="text-lg font-medium">{item.title}</span>
              <span
                className={`transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4">
                <p className="text-gray-700">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaQ;
