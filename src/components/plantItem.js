export default function PlantItem(props) {
    //want to pass in bakery item names and other details, use props    

    //this is an extra step, can just copy the commands "props.name" into the curly braces 
    const name = props.name;
    const price = props.price;
    const sunlight = props.sunlight;
    const image = props.image;
    const handleClick = props.handleClick;
    //method 1

    return (
        <div className="card">
            <img style={{ width: "100%", height: "70%" }} src={image} alt={name}/>
            <h3 className="plant-name">{name}</h3>
            <p className="card-text">sunlight level: {sunlight}</p>
            <p className="card-text">price: ${price}</p>
            <p><button className="add-button" onClick={() => handleClick(name, price)}>Add to Cart</button></p>
        </div>
    )

}