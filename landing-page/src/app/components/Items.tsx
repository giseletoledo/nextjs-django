import React from 'react';

const Items: React.FC = () => {
  return (
    <section id="items" className='items-container'>
      <div className='item'>
        <img className='image-shadow' src="../images/ahsoka.jpg" width="200px" alt="Item 1" />
        <h3 className='item-title'>Item 1</h3>
        <p>Descrição do item 1.</p>
      </div>
      <div className='item'>
        <img className='image-shadow' src="../images/grogu.jpg" width="200px" alt="Item 2" />
        <h3 className='item-title'>Item 2</h3>
        <p>Descrição do item 2.</p>
      </div>
      <div className='item'>
        <img className='image-shadow' src="../images/rey.jpg" width="200px" alt="Item 3" />
        <h3 className='item-title'>Item 3</h3>
        <p>Descrição do item 3.</p>
      </div>
    </section>
  );
};

export default Items;
