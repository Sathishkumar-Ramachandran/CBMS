import { menuItem } from "./menuItem";

const Dropdown = ({item, key}) => {


    return(
        <ul className="submenu">
            {
            item.submenu.map((submenu, index) => (
                <div>
                <div>{submenu.icon}</div>
                <div>{submenu.name}</div>
                </div>
            ))
            }
        </ul>
    )
}

export default Dropdown;