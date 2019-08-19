import React from 'react';
import { Link } from "react-router-dom";

const actionList = props => {
  
  const {
    project_id,
    description,
    notes,

  } = props

  return (
      <div className="actions">
        <Link to={`/actions/${project_id}`}><h3>{project_id}</h3></Link>
        <strong>{description} </strong>
        <p>{notes} </p>
        <button onClick={event => props.deleteItem(event, project_id)}>Delete actions</button>
      </div>
  );
};

actionList.defaultProps = {
    project_id: '',
    description: '',
    notes: ''
};

export default actionList;
