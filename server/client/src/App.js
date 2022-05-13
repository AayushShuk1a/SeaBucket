import "./App.css";
import Category from "./Components/Category/Category";
import Faq from "./Components/FAQs/Faq";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";
import Read from "./Components/Read/Read";
import Topics from "./Components/Topics/Topics";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Category />
      <Product />
      <Faq />
      <Read />
      <Topics />
      <Footer />
    </div>
  );
}

export default App;
