import React, {useState} from 'react';

export default function ManagerMode(props) {

    const [newName, setNewName] = useState("");
    const [newBrand, setNewBrand] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newNormalPrice, setNewNormalPrice] = useState("");
    const [newRating, setNewRating] = useState("");
    const [newImage, setNewImage] = useState("");
    const [newDescription, setNewDescription] = useState("");

    const addNewItem = () => {
        props.addNewItem(newName, newBrand, newPrice, newNormalPrice, newRating, newImage, newDescription);
    }

    const onDeleteItemClick = (itemId) => {
        props.deleteItem(itemId);
      }

    return (
        <div>
          <div>
            Name <input type="text" onChange= {(event) => 
            setNewName(event.target.value)} />
          </div>
          <div>
            Brand <input type="text" onChange= {(event) => 
            setNewBrand(event.target.value)} />
          </div>
          <div>
            Price <input type="text" onChange= {(event) => 
            setNewPrice(event.target.value)} />
          </div>
          <div>
            Normal Price <input type="text" onChange= {(event) => 
            setNewNormalPrice(event.target.value)} />
          </div>
          <div>
            Rating <input type="text" onChange= {(event) => 
            setNewRating(event.target.value)} />
          </div>
          <div>
          Description <input type="text" onChange= {(event) => 
            setNewDescription(event.target.value)} />
          </div>
          <div>
          <button onClick={addNewItem}>Add New Item</button>
          </div>
          <div>
          <button onClick={props.disableManagerMode}>Client Mode</button>
          <h1>List of items</h1>
        { props.items.map((item, index) =>
          <div key={index}>
            <button onClick={() => onDeleteItemClick(item.id)}>X</button> {item.name}, {item.brand}, {item.price},
            {item.normalPrice}, {item.rating}, {item.description}
          </div>)}
          </div>
      </div> )
}