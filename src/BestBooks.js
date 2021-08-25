import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';

import FavBook from "./FavBook";
const axios = require('axios');


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favBook: [],
      show:false
    }
  }
   componentDidMount = async ()=> {
    const { user } = this.props.auth0;
    console.log(this.props.auth0);
    if(user !== undefined){
      let userEmail = user.email;
      console.log('email',userEmail);
     
        let dataOfFavBook = await axios.get(`${process.env.REACT_APP_API_SERVER_LINK}/book?email=${userEmail}`);
      
        console.log('book',dataOfFavBook);
        await this.setState({
          favBook: dataOfFavBook.data,
          show : true,
        })
        
        console.log(this.state.favBook);
    }
    
    
    
  }
  
  render() {
    return(
      <div>
        <>
<Jumbotron>
        <h1>My Favorite favBook</h1>
        <p>
          This is a collection of my favorite favBook
        </p>
      </Jumbotron>
      </>
      {this.state.show &&  <>
       {this.state.favBook.map((element,key) => {
          return(
     <FavBook
     key={key}
     img={element.img} title={element.title} description={element.description} status={element.status}

     />
       );} )}
      </>}
      </div>
      
      

    )
  }
}

export default withAuth0(BestBooks);
