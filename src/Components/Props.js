import React from 'react'

function Props(props) {
  const {Bike} = props
  // const Bike = 'Royal Enfield hunter 350';
  const text = `That is the ${Bike} bike model`
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

export default Props
