import React, {Component}  from "react";

export default class Movielist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: [],
      copyValue: ""
    };    
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    }
  

  copyTitle = (value) => {
    this.setState({
        copyValue: value
      })
  }

    componentDidMount(){
        this.resolveData();
    }

    // onClick = () => {
    //     this.resolveData();
    // }

  resolveData = () =>  {
    fetch(`https://www.omdbapi.com/?s=star_wars&apikey=2d753e6d`)
      .then((response) => response.json())
      .then(result => this.setState({
        result: result.Search
      }));
  }
  render() {
    return (
      <div>
        <section>
          <input type="text" data-testid="app-input" onChange={this.onInputchange} value={this.state.copyValue}/>
          {/* <button data-testid="submit-button" onClick={this.onClick} >Get All List</button> */}
        </section>
        {
            this.state.result.length > 0 &&
            <ul id="data" data-testid="movieList">
            {
                this.state.result.map((res, index) => {
                    return (
                    <li key={index + 1 }>{res.Title} <button onClick={()=>this.copyTitle(res.Title)}>Copy Value</button></li>
                    );
                    })    
                }
            </ul>
        }
      </div>
    );
  }
}