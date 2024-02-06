import "./App.scss";
import AboutSummerly from "./components/AboutSummerly";
import ClientTrust from "./components/ClientsTrust";
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
      </main>
    </>
  );
}

export default App;
