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

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('Все');

  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li
            onClick={(e) => setActiveCategory(e.target.textContent)}
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
