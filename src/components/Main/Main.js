import AboutMe from "./AboutMe/AboutMe.js";
import AboutProject from "./AboutProject/AboutProject.js";
import Navtab from "./NavTab/Navtab.js";
import Promo from "./Promo/Promo.js";
import Techs from "./Techs/Techs.js";
import Footer from "../Footer/Footer.js"

function Main() {
  return (
    <section className="main">
      <Promo />
      <Navtab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </section>
  )
}

export default Main;