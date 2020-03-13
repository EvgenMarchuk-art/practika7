import React from 'react';

function Card(props) {

  const OpenPost =(id)=>{
      props.PostOpen(id)
  };



    return (
        <div key={props.id}  className="card" style={{width: '18rem'}}>
             <div className="card-body">
                 <a href="#" className="btn btn-primary" onClick={OpenPost.bind(null, props.id)}>open post</a>
                 <p trap={props}>{props.user.isVisible ? "unread" : "read"}</p>
            </div>
        </div>
    );
}

export default Card;