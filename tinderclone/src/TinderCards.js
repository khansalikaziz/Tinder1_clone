import { Swipe, SwipeDown } from '@mui/icons-material';
import axios from './axios';
import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCard.css'

function TinderCards () {
  const [people,setPeople]=useState([]); 
  useEffect(()=>{
    async function fetchData(){
      const req=await axios.get('/tinder/card');

      setPeople(req.data);

    }
    fetchData();
  },[])
  console.log(people);
  const swiped=(direction,nameToDelete)=>{
    console.log("removing: "+nameToDelete)
    //etLastDirection(direction)
  }

  const outOfFrame=(name)=>{
     console.log(name+" left the screen!");
  }
  
  return (
    <div className='tinderCards'>
      <div className="tinderCards__cardContainer">
        {people.map(person=>(
           
             <TinderCard 
              className='swipe'
              key={person.name}
              preventSwipe={["up","down"]}
              onSwipe={(dir)=>swiped(dir,person.name)}
              onCardLeftScreen={()=>outOfFrame(person.name)}
             >
             <div style={{backgroundImage:"url("+person.imgUrl+")"}} className='card'>
               <h3>{person.name}</h3>
             </div>
             </TinderCard>
           ))}
          </div>
    </div>
  );
}

export default TinderCards