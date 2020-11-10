import React from 'react';

export default function MessageBox(props){
    return(
        <div className={`alert alert -${props.variant || 'info'}`}>
            {props.children}
        <i className="fa fa-spinner fa-spin"></i> Loading...
        </div>
    )
}