import React from "react";
import Footer from "../footer/Footer";
import FrequentlyAskedQuestions from "../expandedTile/FrequentlyAskedQuestions";
import ContactForm from "../contactForm/ContactForm";
import NewCard from "../newCard/NewCard";
import AnimatedButton from "../hoverCards/cards";
import About from "../aboutUs/About";

const HomePage = () => {
  return (
    <>
      <About />
      <AnimatedButton />
      <NewCard />
      <ContactForm />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
};

export default HomePage;
