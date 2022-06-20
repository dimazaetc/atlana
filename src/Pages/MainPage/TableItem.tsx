import {Link} from "react-router-dom";
import {UserItem} from "../types";

interface TableItemProps {
    item: UserItem
}

const TableItem = ({item}: TableItemProps) => {
    return (
        <Link className='table_item_wrapper' to={`/${item.user.id}`}>
            <img alt='avatar' src={item.user.avatar_url}/>
            <div>{item.user.login}</div>
            <div>Repos : {item.repos.length}</div>
        </Link>
    )
}

export default TableItem;