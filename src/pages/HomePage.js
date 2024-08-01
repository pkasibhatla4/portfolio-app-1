import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {Banner} from '../components/Banner';
import{Skills} from '../components/Skills';
import {Approach} from '../components/Approach';

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
