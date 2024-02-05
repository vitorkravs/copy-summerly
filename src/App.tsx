import "./App.scss";
import AboutSummerly from "./components/AboutSummerly";
import ClientTrust from "./components/ClientsTrust";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <ClientTrust />
        <AboutSummerly />
      </main>
    </>
  );
}

export default App;
