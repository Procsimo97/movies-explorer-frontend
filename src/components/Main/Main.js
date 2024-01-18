import AboutMe from "./AboutMe/AboutMe.js";
import AboutProject from "./AboutProject/AboutProject.js";
import Navtab from "./NavTab/Navtab.js";
import Promo from "./Promo/Promo.js";
import Techs from "./Techs/Techs.js";
import Footer from "../Footer/Footer.js"
import Header from "../Header/Header.js";

function Main(props) {
  return (
    <section className="main">
{/*       <Header class={props.class} classIcon={props.classIcon}
            isBurgerOpen={props.isBurgerOpen}
            isOpen={props.onBurgerOpen} 
            onClose={props.onClose}/> */}
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