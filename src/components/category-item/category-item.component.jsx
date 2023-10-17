import './category-item.styles.scss';
import Category from '../category-body/category-body.component';

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Category title={title} />
    </div>
  );
};

export default CategoryItem;
