import React from 'react';

function OpenCard(props) {

    console.log(props, "ui")
    console.log(props.id , "id")
    // console.log(props.post.body)

    return (
        <div key={props.id}className="card" style={{width: "18rem"}}>


            <div className="card-body">
                <h5 className="card-title"> {props.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted"></h6>
                <p className="card-text"></p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    );
}

export default OpenCard;