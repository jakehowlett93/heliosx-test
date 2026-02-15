import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ConsultationForm } from "./features/consultation/components/ConsultationForm";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
