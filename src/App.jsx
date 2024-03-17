import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import Plans from './Pages/Plans';
import Store from './Pages/Store';
import PageNotFound from './Pages/PageNotFound';
import FirstHome from './First Home/FirstHome';
import Admin from './Admin/Admin';
import Dashboard from './Admin/Dashboard';
import { useState } from 'react';
import OneExercise from './Pages/OneExercise';
import Bodypart from './Pages/Bodypart';
import Allplans from './Plans/Allplans';

function App() {
  const [bodyPart,setBodyPart] = useState('all')
  const [exercise,setExercise]= useState([])

  return (
    <div className="App">
      <Header/>
 

     

      <Routes>
        <Route path='/' element={<FirstHome/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/admin-login' element={<Admin/>}/>
        <Route path='/admin-dashboard' element={<Dashboard/>}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/plans' element={<Plans 
        setExercise={setExercise}
         bodyPart={bodyPart}
         setBodyPart={setBodyPart}/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/all-plans' element={<Allplans/>}/>

        <Route path='/bodypart' element={<Bodypart/>}/>

        <Route path='view/:id' element={<OneExercise/>} />
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
