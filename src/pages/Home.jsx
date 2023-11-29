import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// import ReactPaginate from 'react-paginate';

import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import { PizzaBlockSkeleton } from '../components/PizzaBlock/PizzaBlockSkeleton';
import { Context } from '../App';

export const Home = () => {
  const { searchValue } = useContext(Context);
  const [dataPizza, setDataPizza] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Все');
  const [activeSort, setActiveSort] = useState('популярности');
  const { pathname } = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const category =
      activeCategory === 'Все' ? '' : `filter&category=${activeCategory}`;
    let sort;
    if (activeSort === 'популярности') {
      sort = `sortBy=rating`;
    } else if (activeSort === 'цене') {
      sort = `sortBy=price`;
    } else {
      sort = `sortBy=title`;
    }
    const order = 'order=asc';

    axios
      .get(
        `https://654fb2ee358230d8f0cda05a.mockapi.io/pizzaData?${category}&${sort}&${order}`
      )
      .then((res) => {
        setDataPizza(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [activeCategory, activeSort]);

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  const preloader = new Array(4)
    .fill(null)
    .map((_, i) => <PizzaBlockSkeleton key={i} />);

  const pizzas = dataPizza
    .filter((pizza) =>
      pizza.title.toLowerCase().includes(searchValue.trim().toLowerCase())
    )
    .map((pizza) => <PizzaBlock {...pizza} key={pizza.id}></PizzaBlock>);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          onClickCategory={setActiveCategory}
        ></Categories>
        <Sort activeSort={activeSort} onClickSort={setActiveSort}></Sort>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? preloader : pizzas}</div>
    </div>
  );
};
