import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";

function App() {
  return(<>
    
      <Header/>
      <Food/>
      <Card/>
      <Card/>
      <Button/>
      <Student name ="Shiva" age={21} isStudent={true}/>
      <Footer/>
      
      
    </>
  );
}
 
export default App
