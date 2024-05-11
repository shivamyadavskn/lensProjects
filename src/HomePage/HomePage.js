import React from "react";
import Footer from "../footer/Footer";
import FrequentlyAskedQuestions from "../expandedTile/FrequentlyAskedQuestions";
import ContactForm from "../contactForm/ContactForm";
import NewCard from "../newCard/NewCard";
import AnimatedButton from "../hoverCards/cards";
import About from "../aboutUs/About";
import ByNumber from "../byNumber/ByNumber";
import GradientText from "../splash/Splash";
import ImageSection from "../marque/Marque";
import ImageContent from "../imageContent/imageContent";

const HomePage = () => {
  return (
    <>
      <ImageContent />
      <ImageSection />
      <About />
      <GradientText />
      <ByNumber />
      <AnimatedButton />
      <NewCard />
      <ContactForm />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
};

export default HomePage;
