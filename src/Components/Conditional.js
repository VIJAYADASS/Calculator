import React from 'react';

function Conditional() {
    const numbers = [1, 2, 3, 4, 5];

    // Use the map function to create an array of JSX elements
    const numberList = numbers.map((num, index) => (
        <li key={index}>{num}</li>
    ));


    //  let content;
    //  if (isConditionTrue) {
    //     content = <p>This content is rendered when the condition is true.</p>;
    //   } else {
    //     content = <p>This content is rendered when the condition is false.</p>;
    //   }
    // if (number > 50) {
    //     content = <p>{number} is greater than 50.</p>;
    //   } else {
    //     content = <p>{number} is less than or equal to 50.</p>;
    //   }

    // Switchcase
    // switch (number) {
    //     case 1:
    //       content = <p>Content for case 1</p>;
    //       break;
    //     case 2:
    //       content = <p>Content for case 2</p>;
    //       break;
    //     case 3:
    //       content = <p>Content for case 3</p>;
    //       break;
    //     default:
    //       content = <p>Default content</p>;
    //   }


  return (
    <div>
    {/* Ternary operator */}
      {/* {number > 50 && <p>{number} is greater than 50.</p>}
      {number <= 50 && <p>{number} is less than or equal to 50.</p>} */}

      {/* {isLoggedIn && <p>Welcome, User!</p>}
      {!isLoggedIn && <p>Please log in to access the content.</p>} */}

    {/* if statement, Switch case */}
      {/* {content} */}
      <h2>Number List:</h2>
      <ul>
        {numberList}
      </ul>
    </div>
   
  );
}

export default Conditional;
