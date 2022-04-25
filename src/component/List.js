const Lists = ({ lists }) => {
    return (
      <div className="list">
        {lists.map(list => (
          <div className="list-preview" key={list.id} >
            <a href={list.html_url} target="_blank" rel="noreferrer">
                <h2>{ list.name }</h2>
                <p>{ list.language }</p>
            </a>
          </div>
        ))}
      </div>
    );
  }
   
  export default Lists;