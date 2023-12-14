import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Tokyo", "Cape Town", "London", "Paris"];

  const handleSelectItem = (item: string) =>{
    console.log(item)
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;
