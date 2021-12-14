import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
      fullname: "Albert Einstein",
      bio: "  was Albert Einstein a German-born theoretical physicist , widely acknowledged to be one of the greatest physicists of all time. Einstein is best known for developing the theory of relativity, but he also made important contributions to the development of the theory of quantum mechanics. Relativity and quantum mechanics are together the two pillars of modern physics.",
      profession: " Profession: physicist",
      imageSrc:
        "https://cdn.futura-sciences.com/buildsv6/images/wide1920/b/b/4/bb4d41b834_88524_einstein-03.jpg",
      delete: false,
      timer: 0,
    };

    this.delete = this.delete.bind(this);
  }

  delete() {
    this.setState({ delete: !this.state.delete });
    if (!this.state.delete) {
      setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000);
    } else {
      this.setState({ timer: 0 });
    }
  }
  render() {
    return (
      <div>
        {this.state.delete ? (
          <div>
            <center>
            <h3 id="full"  >{this.state.fullname }</h3>
            <img  id="img" src={this.state.imageSrc} />
            <h4  id="bio" >{this.state.bio}</h4>
            <h4  id="pro" >{this.state.profession}</h4>
            
            {this.state.timer}
            </center>
          </div>
        ) : null}
        <center>
        <button  id="butt" onClick={this.delete}> welcome click here </button>
      </center>
        <br />
      </div>
    );
  }
}
export default App;
