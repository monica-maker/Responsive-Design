import "/src/components/style/layout.css";
import Nav from "./nav.jsx";
import Body from "./body.jsx";
import Footer from "./footer.jsx";
import HomeHero from "./HomeHero.jsx";

export default function Layout() {
  return (
    <div className="layout">
      <div className="hero_nav">
        <Nav />
        <HomeHero />
      </div>
      <main className="middle">
        <Body />
      </main>
      <footer className="buttom">
        <Footer />
      </footer>
    </div>
  );
}
