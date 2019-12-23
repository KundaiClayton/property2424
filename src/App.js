import React ,{Component}from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import SignIn from './Components/Authorisation/SignIn';
import SignUp from './Components/Authorisation/SignUp';
import PropertyView from './Components/Dashboard/PropertyView'
import PropertyDetails from './Components/Properties/PropertyDetails'
import PropertyList from './Components/Properties/PropertyList'
import Search from './Components/search/search'
import Searching from './Components/search/Searching'
import SideDrawer from './Components/Layout/sidedrawer/SideDrawer'
import Backdrop from './Components/Layout/Backdrop/Backdrop'
import Bottom from './Components/Layout/bottom'
import map from './assets/map.png'
import Authentication from './Components/Authorisation/Authentication'


class App extends Component {
  
  state={
    sideDrawerOpen:false
  };

  drawerToggleClickHandler=()=>{
    this.setState((prevState)=>{
      return{sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

 backdropClickHandler=()=>{
 this.setState({sideDrawerOpen:false})
 };

 
  render(){ 
  
    let backdrop;
    if(this.state.sideDrawerOpen){
      
      backdrop=<Backdrop click={this.backdropClickHandler}/>
    }
     return(
       <BrowserRouter>
       <div className="App" style={{height:'100%'}}>
       <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
       <SideDrawer show={this.state.sideDrawerOpen}/>
       
       {backdrop}
      
         <Switch>
           <Route exact path='/' component={SignIn}  />
           <Route path='/property/:id' component={PropertyDetails}/>
           <Route  path='/propView' component={PropertyView}/>
           <Route  path='/registration' component={SignUp}/>

           <Route path='/property' component={PropertyList}/>
          
           
         </Switch>
         <Bottom/>
       </div>
       </BrowserRouter>
       
     );}
 
}

export default App;
