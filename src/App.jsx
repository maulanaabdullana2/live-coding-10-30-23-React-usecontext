import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import CartContextrovider from '../store/shoping-cart-context.jsx';


function App() {
 

  return (
    < CartContextrovider>
      <Header/>
      <Shop/>
    </ CartContextrovider>
  );
}

export default App;
