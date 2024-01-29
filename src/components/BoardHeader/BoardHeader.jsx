import { Link } from "react-router-dom";
import "./BoardHeader.scss";
import upIconDefault from "../../assets/icons/arrow-N-default.svg";
import upIconSelected from "../../assets/icons/arrow-N-selected.svg";
import { useState } from "react";
import { useReactFlow } from "reactflow";

const BoardHeader = () => {
  const [isIconSelected, setIsIconSelected] = useState(false);
  const { getNodes } = useReactFlow();
  const handleSave = () => {
    const pins = getNodes();
    const formattedPins = pins.map((pin) => {
      return {
        board_id: 3,
        width: pin.width,
        height: pin.height,
        id: pin.id,
        type: pin.type,
        data: pin.data,
        x_coord: pin.position.x,
        y_coord: pin.position.y,
      };
    });
    console.log(formattedPins);
  };

  return (
    <header className="board-header">
      <nav className="nav">
        <div className="nav__right">
          <Link to="/dashboard">
            <img
              onMouseEnter={() => {
                setIsIconSelected(true);
              }}
              onMouseLeave={() => {
                setIsIconSelected(false);
              }}
              src={isIconSelected ? upIconSelected : upIconDefault}
              alt="up arrow"
              className="nav__icon"
            />
          </Link>
          <input className="nav__title" placeholder="untitled" />
        </div>
        <ul className="nav__right-container">
          <button className="nav__btn">collaborate</button>
          <button className="nav__btn">publish</button>
          <button className="nav__btn" onClick={handleSave}>
            save
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default BoardHeader;
