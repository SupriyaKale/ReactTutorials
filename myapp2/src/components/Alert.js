import React from 'react';

function Alert(props) {
    const capitalize = (word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ word.slice(1);
    }
  return (
   
    props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.message}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
    
  )
}

export default Alert
