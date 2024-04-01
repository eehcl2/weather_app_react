import React from 'react'

function ConditionalRandering() {
  const num = 11;

  if(num % 2 === 0 ){
    return <div>{num}은 짝수</div>;
  } else {
    return <div>{num}은 홀수</div>;
  }
}

export default ConditionalRandering