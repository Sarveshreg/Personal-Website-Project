import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [pokemon,setPokemon]=useState([]);
  let [c,setC]=useState(true);
  const getPokemon=async()=>{
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players');
    const result=await response.json();
    setPokemon(result.data.players);
  };
  useEffect(()=>{
    getPokemon();
  },[c]);
  const deleteme1= async function deleteme(id){

          try {
            const response = await fetch(
              `https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players/${id}`,
              {
                method: 'DELETE',
              }
            );
            const result = await response.json();
            console.log(result);
            setC(!c);
          } catch (err) {
            console.error(err);
          }
          
        }
  // let [a,setA]=useState(null);
  // const result=null;
  // let [d,setD]=useState();
  // useEffect(()=>{
  //     getdata();
  //   async function getdata(){
  //     try {
  //       const response = await fetch(
  //         'https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players'
  //       );
  //       const result = await response.json();
  //       console.log("result",result.data.players);
  //       setA(result.data.players);
  //       console.log("a",a)
  //     } catch (err) {
  //       console.error(err);
  //     }}},[])
  //     let list;
  //     async function deleteme(id){
  //       try {
  //         const response = await fetch(
  //           `https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players/${id}`,
  //           {
  //             method: 'DELETE',
  //           }
  //         );
  //         const result = await response.json();
  //         console.log(result);
  //       } catch (err) {
  //         console.error(err);
  //       }
        
  //     }
  // if(a!=null){
  //  list=()=>a.map(a1=>(
  //   <>
  //  <li>{a1.name}</li>
  //  <button onClick={()=>deleteme(a1.id)}>delete</button>
  //  </>))
  // setD(list)}
  
  return (
    <>
      {pokemon.map((pokemon)=>(
        <>
        <div key={pokemon.id}>{pokemon.name}</div>
        <button onClick={()=>deleteme1(pokemon.id)}>delete</button>
        </>
      ))}
    </>
  )
}

export default App
