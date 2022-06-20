import TableItem from "./TableItem";
import Search from "../../utils/search/search";
import useTable from "./useTable";
import {UserItem} from "../types";

const Table = () => {
    const {usersData, value, setValue, filteredData} = useTable();
    return (
        <div className='table_wrapper'>
            <Search value={value} setValue={setValue}/>
            {usersData ? filteredData?.map((item: UserItem) => (
                <TableItem key={item.user.id} item={item}/>

            )) : (<div>Loading...</div>)}
        </div>
    )
}

export default Table;