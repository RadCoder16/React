function ListGroup() {
  const items = ["New York", "Tokyo", "Cape Town", "London", "Paris"];
  items.map((item) => <li>{item}</li>);
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          An active item
        </li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}

export default ListGroup;
