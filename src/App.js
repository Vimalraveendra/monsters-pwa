import React,{useState,useEffect} from "react";
import SearchBox from "./components/SearchBox/SearchBox.component";
import CardList from "./components/CardList/CardList.component";
import "./App.css";


const App =()=> {
  const [searchText,setSearchText]= useState("")
  const [monsters,setMonsters] = useState([])
  

  const  handleOnChangeText= (e) => {
    let target = e.target.value;
    setSearchText(target)
  };

    const filteredMonsters = monsters.filter(
      (monster) =>
        monster.name.toLowerCase().indexOf(searchText.toLowerCase().trim()) > -1
    );

  useEffect(()=>{
    const getMonsters = async()=>{
      try{
      const request = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const  data= await request.json();
      setMonsters(data)
    }catch(error){
      console.log(error)
    }
  }
    getMonsters();
 
  
  },[])

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