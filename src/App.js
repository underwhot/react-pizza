import { Categories } from './components/Categories/Categories';
import { Header } from './components/Header/Header';
import { PizzaBlock } from './components/PizzaBlock/PizzaBlock';
import { Sort } from './components/Sort/Sort';

import dataPizza from './data/pizza';

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <main className="content">
        <div className="container">
          <div className="content__top">
            <Categories></Categories>
            <Sort></Sort>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {dataPizza.map((pizza) => (
              <PizzaBlock {...pizza} key={pizza.id}></PizzaBlock>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
