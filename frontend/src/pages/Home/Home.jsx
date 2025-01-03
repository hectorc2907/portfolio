import { Helmet } from "react-helmet-async";
import Presentation from "./Presentation/Presentation";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | Héctor Clessi</title>
      </Helmet>
      <Presentation />
      <About />
      <Projects />
      <Contacts />
    </>
  );
};

export default Home;
