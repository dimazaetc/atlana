import {Link, useParams} from "react-router-dom";
import UserInfo from "./UserInfo";
import './infoPage.scss'
import {UserItem} from "../types";

const InfoPage = () => {
    const {id} = useParams();
    // @ts-ignore
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find((item: UserItem) => {
        if (typeof id !== "undefined") {
            return item.user.id === +id;
        }
        return item
    })
    return (<>
            <Link to={'/'}>
                <button>Go back</button>
            </Link>
            <div className='repos_wrapper'>
                <h1>GitHub Searcher</h1>
                <UserInfo user={user}/>
            </div>
        </>
    )
}

export default InfoPage;