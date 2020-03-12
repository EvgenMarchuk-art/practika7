import React from 'react';

function OpenCard(props) {

    console.log(props.Post, "props")





    return (
        <div key={props.id}className="card" style={{width: "18rem"}}>



                <div className="card-body">
                    <h5 className="card-title">{props.Post.id} </h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.Post.title}</h6>
                    <p className="card-text">{props.Post.body}</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>

        </div>
    );
}

export default OpenCard;