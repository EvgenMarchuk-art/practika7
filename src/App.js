import React, {Component} from 'react';
import './App.css';
import Card from "./Components/Card/Card";
import OpenCard from "./Components/OpenCard/OpenCard";
class App extends Component {

  constructor(props) {
    super(props)

      this.openPost1 = this.openPost1.bind(this)
  };
  state = {
    data: null,
    post: "",
      PostOnClick:null

  };

  componentDidMount() {

      fetch('https://jsonplaceholder.typicode.com/posts')
          .then(respons => respons.json())
          .then(result => {


            this.setState({data: result})

          })

  }



  openPost1=(id)=>{
      const posts = [...this.state.data];
      const post = posts.find(post => post.id === id)
    this.setState({PostOnClick:post})

      console.log(post)
  };




  render() {
    const {data} = this.state


    return (
        <div className="App">

            <div className="border1">
                {
                    data ? data.map(i => {
                            return <Card user={i} title={i.title} body={i.body} key={i.id}  id={i.id}  PostOpen={this.openPost1} />
                        })
                        : "Loading"
                }
            </div>


            <div className="border2">


                          <OpenCard post={this.state.PostOnClick}  id={this.state.id} />



            </div>


        </div>








    )

  }

}


export default App;
