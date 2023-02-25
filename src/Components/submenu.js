import { menuItem } from "./menuItem";
import { NavLink } from "react-router-dom";

const Dropdown = ({item, key}) => {

    console.log(item)
    return(
        <ul className="submenu">
            {
           item?.submenu.map  ((subitem, subindex) => {
                <NavLink to={subitem.path} key={subindex}>
                  <div>{subitem.icon}</div>
                  <div>{subitem.name}</div>
                </NavLink>
              })
            }
        </ul>
    )
}

export default Dropdown;