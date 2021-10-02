import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./pages/Country/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Landing from './pages/Landing';
import Au from "./pages/Country/Austria";
import Bel from "./pages/Country/Belgium";
import BUL from "./pages/Country/Bulgaria";
import CRO from "./pages/Country/Croatia";
import CYP from "./pages/Country/Cyprus";
import CZC from "./pages/Country/Czech-Republic";
import DEN from "./pages/Country/Denmark";
import EST from "./pages/Country/Estonia";
import FIN from "./pages/Country/Finland";
import FR from "./pages/Country/France";
import GER from "./pages/Country/Germany";
import GR from "./pages/Country/Greece";
import HUN from "./pages/Country/Hungary";
import IRE from "./pages/Country/Ireland";
import ITA from "./pages/Country/Italy";
import LAT from "./pages/Country/Latvia";
import LIT from "./pages/Country/Lithuania";
import LUX from "./pages/Country/Luxembourg";
import MAL from "./pages/Country/Malta";
import NET from "./pages/Country/Netherlands";
import NOR from "./pages/Country/Norway";
import POL from "./pages/Country/Poland";
import POR from "./pages/Country/Portugal";
import RO from "./pages/Country/Romania";
import SLO from "./pages/Country/Slovakia";
import SLOV from "./pages/Country/Slovenia";
import SPA from "./pages/Country/Spain";
import SWE from "./pages/Country/Sweden";
import UK from "./pages/Country/United-Kingdom";

function App() {

  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/landing" exact component={Landing} />
          <Route path="/" exact component={Home} />
          <Route path="/country/austria" exact component={Au} />
          <Route path="/country/belgium" exact component={Bel} />
          <Route path="/country/bulgaria" exact component={BUL} />
          <Route path="/country/croatia" exact component={CRO} />
          <Route path="/country/cyprus" exact component={CYP} />
          <Route path="/country/czech-republic" exact component={CZC} />
          <Route path="/country/denmark" exact component={DEN} />
          <Route path="/country/estonia" exact component={EST} />
          <Route path="/country/finland" exact component={FIN} />
          <Route path="/country/france" exact component={FR} />
          <Route path="/country/germany" exact component={GER} />
          <Route path="/country/greece" exact component={GR} />
          <Route path="/country/hungary" exact component={HUN} />
          <Route path="/country/ireland" exact component={IRE} />
          <Route path="/country/italy" exact component={ITA} />
          <Route path="/country/latvia" exact component={LAT} />
          <Route path="/country/lithuania" exact component={LIT} />
          <Route path="/country/luxembourg" exact component={LUX} />
          <Route path="/country/malta" exact component={MAL} />
          <Route path="/country/netherlands" exact component={NET} />
          <Route path="/country/norway" exact component={NOR} />
          <Route path="/country/poland" exact component={POL} />
          <Route path="/country/portugal" exact component={POR} />
          <Route path="/country/romania" exact component={RO} />
          <Route path="/country/slovakia" exact component={SLO} />
          <Route path="/country/slovenia" exact component={SLOV} />
          <Route path="/country/spain" exact component={SPA} />
          <Route path="/country/sweden" exact component={SWE} />
          <Route path="/country/united-kingdom" exact component={UK} />
          <Route path="/createpost" exact component={CreatePost} />
          <Route path="/post/:id" exact component={Post} />
          
        </Switch>
      </Router>

    </div>
  ) 

}

export default App;
