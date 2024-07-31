import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { NavBar } from '../components/NavBar';
import {Banner} from '../components/Banner';
import{Skills} from '../components/Skills';
import {Approach} from '../components/Approach';
import animationData from "../assets/animation_1.json"
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch, Router} from 'react-router-dom';
import {ApproachPage} from '../pages/ApproachPage';



function HomePage() {
  return (
      <div className="App">
        <Banner />
        <Skills/>
        <Approach />
        <ApproachPage/>
        
       
        
        
        
      </div>
    
  );
}

export default HomePage;
