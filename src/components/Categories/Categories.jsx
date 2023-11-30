import { useDispatch, useSelector } from 'react-redux';
import { selectCategory, setCategory } from '../../redux/slices/filterSlice';

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
  const activeCategory = useSelector(selectCategory);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li
            onClick={(e) => dispatch(setCategory(e.target.textContent))}
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
