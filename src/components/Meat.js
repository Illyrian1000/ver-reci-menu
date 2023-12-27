import "./Meat.css";

export default function Meat(props) {
  return (
    <div className="item-card">
      <img src={props.image}></img>
      <h2>{props.name}</h2>
      <p className="item-description">{props.description}</p>
      <p className="item-price">{props.price}</p>
    </div>
  );
}
