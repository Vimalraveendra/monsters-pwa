import React,{useState,useEffect} from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import "./App.css";
const App =()=> {
  const [searchText,setSearchText]= useState("")
  const [monsters,setMonsters] = useState([])
  
  useEffect(()=>{
    const getMonsters = async()=>{
      const request = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const  data= await request.json();
      setMonsters(data)
    }
    getMonsters();
    return {
      
    }
  },[])
 

  const  handleOnChangeText= (e) => {
    let target = e.target.value;
    setSearchText(target)
  };

    const filteredMonsters = monsters.filter(
      (monster) =>
        monster.name.toLowerCase().indexOf(searchText.toLowerCase().trim()) > -1
    );

    return (
      <div className="App">
        <h1 className="title">Monsters Roldex </h1>
        <SearchBox
          className="search-box"
          searchText={searchText}
           handleOnChangeText={handleOnChangeText}
          placeholder={"Search monsters"}
        />
        <CardList filteredMonsters={filteredMonsters} />
      </div>
    );
  }


export default App;