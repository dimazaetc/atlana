import {Repos} from "../types";

interface RepoListItemProps {
    rep: Repos;
}

const RepoListItem = ({rep}: RepoListItemProps) => {
    return (
        <a target='_blank' href={rep.html_url} className='repo_list_item' rel="noreferrer">
            <div>{rep.name}</div>
            <div>
                <div>{rep.forks} Forks</div>
                <div>{rep.stargazers_count} Stars</div>
            </div>
        </a>
    )
}

export default RepoListItem;