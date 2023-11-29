import { useSelector } from 'react-redux';
import { selectCategories } from '../../redux/slices/filterSlice';
import './Categories.scss';

// const categories = [
//   'Все',
//   'Мясные',
//   'Вегетарианские',
//   'Гриль',
//   'Острые',
//   'Закрытые',
// ];

export const Categories = ({ activeCategory, onClickCategory }) => {
  const categories = useSelector(selectCategories);

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
