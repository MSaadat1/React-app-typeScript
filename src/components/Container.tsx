import { Component } from "react";
import { Character } from "../fma-data";
import "./Container.css";


type CharacterData = {
    characters: Character[];
  };

export class ContainerItems extends Component<CharacterData>{
    render() {
     const {characters} = this.props;
      return(
        <div className="card-list">
      {characters.map((card) => (
        <div className="card" key={card.votes}>
          <div className="card-titles">
            <h3>{card.name}</h3>
            <h4>{card.nickName}</h4>
          </div>
          <img className="card-img" src={card.imageUrl} alt="" />
          <p>{card.background}</p>
        </div>
      ))}
    </div>
      )  
    }
}



// export function ContainerItems({props}: CharacterData) {
//   return (
//     <div className="card-list">
//       {props.map((card) => (
//         <div className="card" key={card.votes}>
//           <div className="card-titles">
//             <h3>{card.name}</h3>
//             <h4>{card.nickName}</h4>
//           </div>
//           <img className="card-img" src={card.imageUrl} alt="" />
//           <p>{card.background}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
