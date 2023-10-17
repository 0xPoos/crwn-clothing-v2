import './category-body.syles.scss';

const Category = ({ title }) => {
  return (
    <div className='category-body-container'>
      <h2>{title}</h2>
      <p>Show Now</p>
    </div>
  );
};

export default Category;
