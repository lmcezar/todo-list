import React, { useState } from 'react';
import Card from './Card';

export default () => {
  const [count, setCount] = useState(0);
  function increment () {
    setCount(count + 1);
  }

  return (
    <div>
      <Card
          title="Boelto 1"
          description="Descricao boleto"
          value={count}
        />
        <button onClick={increment}>Add</button>
    </div>
  )
}