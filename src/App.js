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
      PostOnClick:null,
      isVisible : true
  };

  componentDidMount() {

      fetch('https://jsonplaceholder.typicode.com/posts')
          .then(respons => respons.json())
          .then(result => {


              const posts = result.map(post => {
                      post.isVisible = true;
                      post.IsChecked = false;
                      return post
                  },
              );

              this.setState({data: posts});
          })

  }



  openPost1=(id)=> {
      const posts = [...this.state.data];

      const post = posts.find(post => post.id === id);
      post.isVisible = !post.isVisible
     if(!post.isVisible) {
         this.setState({PostOnClick:post })
     } if (post.isVisible){
          this.setState({PostOnClick:null })
      }






  }





  render() {
    const {data,PostOnClick} = this.state


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

                {
                         PostOnClick !== null ?
                        <OpenCard Post={this.state.PostOnClick } />
                        : "Please, click on the button"
                }








            </div>


        </div>








    )

  }

}


export default App;
