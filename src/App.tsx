import "./App.scss";
import AboutSummerly from "./components/AboutSummerly";
import ClientTrust from "./components/ClientsTrust";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Numbers from "./components/Numbers";

function App() {
  return (
    <>
      <Header />
      <main>
        <ClientTrust />
        <AboutSummerly />
        <Numbers />
        <Footer />
      </main>
    </>
  );
}

export default App;
