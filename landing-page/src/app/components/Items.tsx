import React from 'react';

const Items: React.FC = () => {
  return (
    <section id="items" className='items-container'>
      <div className='item'>
        <img src="../images/ahsoka.jpg" width="200px" alt="Item 1" />
        <h3>Item 1</h3>
        <p>Descrição do item 1.</p>
      </div>
      <div className='item'>
        <img src="../images/grogu.jpg" width="200px" alt="Item 2" />
        <h3>Item 2</h3>
        <p>Descrição do item 2.</p>
      </div>
      <div className='item'>
        <img src="../images/rey.jpg" width="200px" alt="Item 3" />
        <h3>Item 3</h3>
        <p>Descrição do item 3.</p>
      </div>
    </section>
  );
};

export default Items;
