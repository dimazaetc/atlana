import RepoListItem from "./RepoListItem";
import Search from "../../utils/search/search";
import {useState} from "react";
import {Repos} from "../types";

interface RepoListProps {
    repo: Repos
}

const RepoList = ({repo}: RepoListProps) => {
    const [value, setValue] = useState('');
    const filteredData = repo?.filter((item: Repos) => {
        let userLogin = item.name.toLowerCase();
        return userLogin.indexOf(value) !== -1;
    });
    return (
        <div>
            <Search value={value} setValue={setValue}/>
            {filteredData.map((item: Repos) => (
                <RepoListItem key={item.id} rep={item}/>
            ))}
        </div>

    )
}

export default RepoList;