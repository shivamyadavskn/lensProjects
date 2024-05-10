import React, { useState } from "react";

const FAQs = [
  {
    question: "Do I need to sign a contract?",
    answer:
      "We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions. After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.",
  },
  {
    question: "What services do we offer?",
    answer:
      "We offer a wide range of services tailored to meet your needs. These include but are not limited to: [Your services description here].",
  },
  {
    question: "How do you ensure user privacy?",
    answer:
      "Ensuring user privacy is paramount to us. We implement stringent measures such as encryption, data anonymization, and access controls to safeguard your information. [Your privacy description here].",
  },
  {
    question: "How can I pay for the services?",
    answer:
      "We provide flexible payment options to suit your convenience. You can pay via credit/debit card, bank transfer, or other accepted methods. [Your payment information here].",
  },
  {
    question: "How do we ensure quality of deliverables?",
    answer:
      "Quality assurance is integral to our process. We employ rigorous testing methodologies, conduct peer reviews, and adhere to industry best practices to ensure the highest standards of deliverables. [Your quality assurance description here].",
  },
  {
    question: "How do I begin collaboration?",
    answer:
      "Starting collaboration with us is simple. Just reach out to our team via email or phone, and we will guide you through the process. We'll discuss your requirements, propose solutions, and outline the next steps to kick-start our collaboration.",
  },
];

const FaqItem = ({ question, answer, isOpen, toggleOpen }) => (
  <div className="dark:bg-gray-900 rounded-md mb-2 bg-white text-black m-5">
    <button
      type="button"
      className={`flex justify-between items-center w-full text-left border-2 ${
        isOpen ? "dark:border-white border-black" : "dark:border-white border-black"
      } rounded-md p-2`}
      onClick={toggleOpen}
    >
      <span className="text-sm font-semibold dark:text-white text-black">{question}</span>
      <span className="dark:text-white text-black">{isOpen ? "^" : "^"}</span>
    </button>
    {isOpen && (
      <div className="mt-2 rounded-md p-2">
        <p className="dark:text-white text:black">{answer}</p>
      </div>
    )}
  </div>
);

const FrequentlyAskedQuestions = () => {
  const [openIndexes1, setOpenIndexes1] = useState([]);
  const [openIndexes2, setOpenIndexes2] = useState([]);

  const toggleOpen1 = (index) => {
    setOpenIndexes1((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const toggleOpen2 = (index) => {
    setOpenIndexes2((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const div1FAQs = FAQs.slice(0, Math.ceil(FAQs.length / 2));
  const div2FAQs = FAQs.slice(Math.ceil(FAQs.length / 2));

  return (
    <div className="dark:text-white p-8 dark-bg-white text-black">
        <h2 className="text-2xl font-bold mb-6 text-center">GET TO KNOW US</h2>
          <h1 className="text-4xl font-bold mb-4 text-center">
            Frequently Asked Questions
          </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          
          {div1FAQs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndexes1.includes(index)}
              toggleOpen={() => toggleOpen1(index)}
            />
          ))}
        </div>
        <div>
          {div2FAQs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndexes2.includes(index)}
              toggleOpen={() => toggleOpen2(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
