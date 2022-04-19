import React from 'react';

const Users = (props) => {
    return (
        <div className="card">
                <p className="pokeName">{props.email}</p>
                <p className="pokeName">{props.username}</p>
                <p className="pokeName">{props.first}</p>
                <p className="type"> {props.last}</p>
        </div>
    );
}

export default Users;
