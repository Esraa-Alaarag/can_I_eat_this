import React, { Component } from 'react';
import Footer from './Footer';

class Home extends Component {
  constructor(props) {
        super(props);
        this.state = {
          upc: undefined,
          productBrand: " ",
          productName: undefined,
          ingredientList: [],
          ingredientString: " ",
        }
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleCreate(event) {
      console.log('handleCreate woke')
      event.preventDefault();

      var digit=this.refs.barcode.value.toString().length;
      if(!parseInt(this.refs.barcode.value,10))
        this.refs.barcode.value = "Only numbers"; 
      else if(digit!==12)
      this.refs.barcode.value = "Only 12 digits";  
      else
      //this.getIngred(this.refs.barcode.value);
      {
        this.setState({ upc: this.refs.barcode.value});
        window.location = `/can_I_eat_this/result/${this.refs.barcode.value}`
      }
    }



  render() {
    return (
      
      <div className="home">
          <div className="introHome">
            <h1 className="title">Can I Eat This?</h1>
            <h2>An app for people who care about the ingredients in their food!</h2>
             <p className="introParagraph"> 
              <br />
              <b>Step 1: </b> Users register their dietary restrictions on the user preferences page and can save issues. Such as allergic to peanuts, lactose intolerant, gluten-free, allergic to shellfish, or other specific dietary restrictions.
              <br />
              <br />
              <b>Step 2: </b> The app displays the results of the thorough ingredient check and indicates whether the user can eat the item or not. Rendering each of the unique allergen issues and whether they are present in the product or not.
              <br />
              <br />
              <b>Step 3: </b> In history, the user can save their past products searched and preferences, stored in an external database.
            </p>
          </div>
        <div className="inputOptions">
          <form 
            className="upc-text-input"
            onSubmit={this.handleCreate}>
            
            <label className="labelMessage2">Enter the 12 digit Universal Product Code (UPC):</label><br/>
            <input
              type="text"
              placeholder="Look up by barcode"
              ref="barcode"
              className="barcode"
              />
            <button className="searchProduct">Search</button>
          </form>

        </div>
    <Footer />
    </div>
    );
  }
};

export default Home; 
