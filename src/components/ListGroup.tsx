function ListGroup(){
  const items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
    'İstanbul'
  ];

  // items= [];
  // const message =  items.length=== 0 ?  <p>No item found</p> : null;
   const getMessage = () => {
    items.length=== 0 ?  <p>No item found</p> : null
   }

  return (
    <>
      <h1>List</h1>
      {getMessage()}
     
      <ul className="list-group">
      {items.map((item)=> (
        <li key={item}>{item}</li>))}

      </ul>
    </>
  );
}

export default ListGroup;