import { Character } from "../fma-data";
import "./Table.css";

type TableHeader = {
  props: Character[];
};
export function TableList({ props }: TableHeader) {
  return (
    <div className="character-rating">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr style={{ backgroundColor: "black", color: "white" }}>
            <th>Name</th>
            <th>Skillsets</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {props.map((char, index) => (
            <tr
              key={char.name}
              className={index % 2 === 0 ? "dark-row" : "light-row"}
            >
              <td>{char.name}</td>
              <td>{char.skillset.join(", ")}</td>
              <td>{char.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
