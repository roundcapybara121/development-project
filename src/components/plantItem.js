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
   
               <img style={{ width: "80%", height: "50%", borderRadius: 15 }} src={image} />
               <h3>{name}</h3>
               <p>sunlight level: {sunlight}</p>
               <p>price: ${price}</p>
               <button onClick={() => handleClick(name, price)}>Add to Cart</button>
           </div>
       )
   
}