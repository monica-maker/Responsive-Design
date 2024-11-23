import "/src/components/style/layout.css";
import Nav from "./nav.jsx";
import Body from "./body.jsx";
import Footer from "./footer.jsx";

export default function Layout(){
    return(
        <div className="position">
            <header className="top">
                <Nav/>
            </header>
            <main className="middle">
                <Body/>
            </main>
            <footer className="buttom">
                <Footer/>
            </footer>
        </div>
    )
}