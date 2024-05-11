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
import NavBar from "../navBar/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <About />
      <AnimatedButton />
      <GradientText />
      <NewCard />
      <ImageContent />
      <ImageSection />
      <ByNumber />
      <FrequentlyAskedQuestions />
      <ContactForm />
      <Footer />
    </>
  );
};

export default HomePage;
