import RepoList from "./RepoList";
import moment from "moment";
import {UserItem} from "../types";

interface UserInfoProps {
    user: UserItem
}

const UserInfo = ({user}: UserInfoProps) => {
    const {name, avatar_url, email, location, created_at, followers, following, bio} = user?.user;
    return (
        <div>
            <div className='user_info_wrapper'>
                <div><img alt='avatar' src={avatar_url}/></div>
                <div>
                    <ul>
                        <li>Name: {name}</li>
                        <li> Email: {email}</li>
                        <li>Location: {location}</li>
                        <li>Join Date: {moment(created_at).format("YYYY-MM-DD")}</li>
                        <li>{followers} Followers</li>
                        <li>Following:{following}</li>

                    </ul>

                </div>
            </div>
            <div>{bio}</div>
            <RepoList repo={user.repos}/>
        </div>

    )
}

export default UserInfo;