import { useState } from 'react';
import './Categories.scss';

const categories = [
  'Все',
  'Мясные',
  'Вегетарианские',
  'Гриль',
  'Острые',
  'Закрытые',
];

export const Categories = ({ activeCategory, onClickCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li
            onClick={(e) => onClickCategory(e.target.textContent)}
            className={activeCategory === category ? 'active' : ''}
            key={category}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
