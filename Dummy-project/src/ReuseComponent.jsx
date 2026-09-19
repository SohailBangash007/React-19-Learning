import React from 'react'
import ReusedCard from './ReusedCard';

const ReuseComponent = () => {
    const DummyData = [
        {
          name: "SOAHIL",
          age: 21,
          id: 1,
          Email: "sohailbangssh009@gmail.com",
        },
    
        {
          name: "Arif Muneer",
          age: 24,
          id: 2,
          Email: "Arifbangssh009@gmail.com",
        },
    
        {
          name: "BasitNisar",
          age: 29,
          id: 3,
          Email: "Basitbangssh009@gmail.com",
        },
    
        {
          name: "Numan Arshad",
          age: 27,
          id: 4,
          Email: "Numanbangssh009@gmail.com",
        },
      ];
  return (
    <div>
        <h1>Reuse Component in Loop</h1>

      {
        DummyData.map((item)=>(
            
                <div key={item.id}>
                 <ReusedCard item={item}/>
                </div>
            
        ))
      }


    </div>
  )
}

export default ReuseComponent