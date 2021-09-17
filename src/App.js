
import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Service from './components/Services/service';
import Industry from './components/Industry/Industry';


import {FaIndustry } from "react-icons/fa";
import {IoMdContact } from "react-icons/io";

import { AiFillHome,AiOutlineInfoCircle } from "react-icons/ai";
import { HiServer } from "react-icons/hi";




function App() {
  return (
    <div className="App">
      
      <Router>
      <div className="nav-icons">
                <ul style={{display:"none"}}>
                    <li><a ><span><AiFillHome /></span><Link to='/' >Home</Link></a></li>
                    <li><a ><span><AiOutlineInfoCircle /></span> <Link to='/about' >About</Link></a></li>
                    <li><a ><span><HiServer /></span> <Link to='/services' >Services</Link></a></li>
                   <li><a ><span><FaIndustry /></span> <Link to='/industry' >Industry</Link></a></li>
                    <li><a ><span><IoMdContact /></span> <Link to='/contactus' >Contact Us</Link></a></li>
                </ul>
            </div>
      <Switch>
            <Route path='/' exact>
              <div className="main">
                <Home />
                </div>
            </Route>
            <Route path='/about' exact>
                <About />
            </Route>
            <Route path='/services' exact>
                <Service />
            </Route>
            <Route path='/industry' exact>
                <Industry />
            </Route>
            <Route path='/contactus' exact>
                <Contact />
            </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
