import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';


import { withAuth0 } from "@auth0/auth0-react";
import FavBook from "./FavBook";
import axios from "axios";
import SearchForm from "./SearchForm";
import RenderData from "./RenderData";
import ModalUpdate from "./ModalUpdate";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gitDtaCityName: [],
      FavoriteData: [],
show:false,
showModalOfUpdate:false,
lat:'',
email:'',
    };
  }

  // get data thats user search for
  gitCityName = async (e) => {
    e.preventDefault();
    if (e.target.cityname.value) {
         this.setState({
            show:true,
        })
      let setchFor = e.target.cityname.value;
      console.log("taget", setchFor);

      let cityData = await axios.get(
        `${process.env.REACT_APP_API_LINK}/listBook?cityName=${setchFor}`
      );
      
      this.setState({
        gitDtaCityName: cityData.data,
      });
      console.log("data", this.state.gitDtaCityName);
    }
  };

  // add data to data base and return all data then rendur it
  addDtataToMyFav = async (latt) => {
      console.log('add',latt);
    let { user } = this.props.auth0;
    console.log(user.email);
    let dataObj = {
      email: user.email,
      lat: latt,
    };

    let addBookData = await axios.post(
      `${process.env.REACT_APP_API_LINK}/addbook`,
      dataObj);
      console.log('sssss',addBookData.data);
    await this.setState({
        FavoriteData:addBookData.data,

    });
    console.log('addddddddddd',this.state.FavoriteData);
  };
  showModel=()=>{
     if(this.state.show)
     {
         this.setState({
             show:false,
         })
     }
     
  }
  dlelteItem=async (latt)=>{
      if (latt){
        let lat = latt;
        let {user}=this.props.auth0;
        let email=user.email;
        let deletData = await axios.delete(`${process.env.REACT_APP_API_LINK}/deletbook?email=${email}&lat=${lat}`);
        this.setState({
          FavoriteData:deletData.data,
        })
      }

  }
  showMethodOfUpdate=(lat,email)=>{
      if(lat){
        this.setState({
            showModalOfUpdate:true,
            lat:lat,
            email:email,
          });
      }
      else{
          this.setState({
            showModalOfUpdate:false,

          })
      }
      
  }
   ubdataData= async(e)=>{
    e.preventDefault();
       
       if(e.target.lat.value)
       {
        let obj={
            email:this.state.email,
            lat:e.target.lat.value,
        }
        let update=await axios.put(`${process.env.REACT_APP_API_LINK}/updateData?lat=${this.state.lat}`,obj);
        this.setState({
            FavoriteData:update.data,
            showModalOfUpdate:false,
        });
       }

  }

  componentDidMount = async () => {

    let { user } = this.props.auth0;
    let userEmail = user.email;
    console.log('email',userEmail);
    if (userEmail) {
        let dataObj = {
            email: userEmail,
            lat: 0,
          };
      let FavData = await axios.post(
        `${process.env.REACT_APP_API_LINK}/addbook`,
        dataObj);
      this.setState({
        FavoriteData: FavData.data,
      });

    }
  };

  render() {
    return (
      <>
        <>
          <SearchForm gitCityName={this.gitCityName} />
        </>
       
        <>
       {this.state.show && ( <Modal.Dialog>
  <Modal.Header type="click" onClick={this.showModel} closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  {this.state.gitDtaCityName &&
        
        this.state.gitDtaCityName.map((e, key) => {
          return (
            <RenderData
            addDtataToMyFav={this.addDtataToMyFav}
            showModel={this.showModel}
              key={key}
              lat={e.lat}
              email={e.email}
            />
          );
        })}
  </Modal.Body>

  
</Modal.Dialog>)}
       
</>

{this.state.FavoriteData &&(<>
          {this.state.FavoriteData.map((e, key) => {
            return (
                <FavBook 
                dlelteItem={this.dlelteItem}
                key={key}
                lat={e.lat}
                email={e.email}
                showMethodOfUpdate={this.showMethodOfUpdate}
              />
            );
          })}</>)}

{this.state.showModalOfUpdate && (<Modal.Dialog>
  <Modal.Header type="click" onClick={this.showMethodOfUpdate} closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body> 
      <ModalUpdate 
                ubdataData={this.ubdataData}
  
  />
  </Modal.Body>

  
</Modal.Dialog>)}


      </>
    );
  }
}

export default withAuth0(BestBooks);
