import React, { useState } from 'react';
import One from './ViewFourPages/One';
import Two from './ViewFourPages/Two';

function ViewFour(props) {

  const [selectedButton, setSelectedButton] = useState(0);
  const [itemOne, setItemOne] = useState(true);
  const [itemTwo, setItemTwo] = useState(false);

  const toggleHouseHandler = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const itemOneHandler = () => {
    setItemOne(true);
    setItemTwo(false);
  };

  const itemTwoHandler = () => {
    setItemTwo(true);
    setItemOne(false);
  };

  return (
    <div>
      <div className='flex justify-center my-4'>
        {Array.from({ length: 10 }, (_, index) => (
          <button
            key={index}
            onClick={() => toggleHouseHandler(index)}
            style={{
              backgroundColor: selectedButton === index ? 'lightgreen' : 'skyblue',
              color: selectedButton === index ? 'black' : 'white',
              padding: '3px',
              margin: '5px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            ITEM {index + 1}
          </button>
        ))}
      </div>

      <div>
        <button className='ml-1 pr-10 pl-10 text-md text-center rounded-md bg-lime-500' onClick={itemOneHandler}>One</button>
        <button className='ml-1 pr-10 pl-10 text-md text-center rounded-md bg-lime-500' onClick={itemTwoHandler}>Two</button>
      </div>

      {itemOne &&
        <div>
          <div className='bg-lime-200 text-md p-1 mt-1 mb-2'>
            One
          </div>
          <div className='text-xs'>
            <One />
          </div>
        </div>
      }

      {itemTwo &&
        <div>
          <div className='bg-lime-200 text-md p-1 mt-1 mb-2'>
            Two
          </div>
          <div className='text-xs'>
            <Two />
          </div>
        </div>
      }
    </div>
  )
}

export default ViewFour;