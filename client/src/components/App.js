import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
// import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login.js"
import Signup from "./Signup.js"
import AlbumList from "./AlbumList.js";
import Album from "./Album.js";
import Sandbox from "./Sandbox.js";
import NavigationBar from "./NavigationBar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);
  const [userAlbums, setUserAlbums] = useState([]);
  const [activeAlbum, setActiveAlbum] = useState([]);
  

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
          setUserAlbums(user?.albums);
        });
      }
    });
  }, []);

  console.log(currentUser);


  //state update helper
  function addNewAlbum(albumObj) {
    setUserAlbums([...userAlbums, albumObj]);
  }
  
  return (
    <div className="App">
      <NavigationBar user={currentUser} setCurrentUser ={setCurrentUser} albums={userAlbums} setActiveAlbum={setActiveAlbum}/>
      <Switch>
        <Route exact path="/">
          <Login setUserAlbums={setUserAlbums} setIsAuthenticated={setIsAuthenticated} setCurrentUser ={setCurrentUser}/>
        </Route>
        <Route exact path="/signup">
          <Signup setCurrentUser ={setCurrentUser}/>
        </Route>
        <Route exact path="/albumlist">
          <AlbumList
            user={currentUser}
            albums={userAlbums}
            addNewAlbum={addNewAlbum}
            activeAlbum={activeAlbum}
            setActiveAlbum={setActiveAlbum}
            setUserAlbums={setUserAlbums}
          />
        </Route>
        <Route exact path="/album/:id">
          <Album activeAlbum={activeAlbum}/>
        </Route>
        <Route exact path="/sandbox">
          <Sandbox />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
