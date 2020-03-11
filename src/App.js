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
      console.log( post)
    this.setState({PostOnClick:post})

  };




  render() {
    const {data,PostOnClick} = this.state


    return (
        <div className="App">

            <div className="border1">
                {
                    data ? data.map(i => {
                            return <Card title={i.title} body={i.body} key={i.id} PostOpen={this.openPost1} />
                        })
                        : "Loading"
                }
            </div>


            <div className="border2">

                {
                    PostOnClick ?   PostOnClick.map(i => {
                        return <OpenCard  title={i.title} body={i.body} key={i.id}/>})
                        :
                        "open post"

                }
            </div>

            </div>








    )

  }

}


export default App;
