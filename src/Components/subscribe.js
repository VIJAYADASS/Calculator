import React, { useState } from 'react';

const SubscribeButton = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [count, setCount] = useState(false)
   

  const handleClick = () => {
    if (!subscribed) {
      setCount(count + 1);
    }   
    setSubscribed(!subscribed);
  };

  return (
    <div className='sub'>
        <button onClick={handleClick}>
        {subscribed ? 'Subscribed' : 'Subscribe'}
        </button>
        <p>Subscribed Count: {count}</p>
    </div>
  );
};

export default SubscribeButton;
