const Lists = ({ lists }) => {
    return (
      <div className="list-list">
        {lists.map(list => (
          <div className="list-preview" key={list.id} >
            <h2>{ list.name }</h2>
            <p>{ list.language }</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default Lists;