import {useEffect, useState} from "react";
import {getUserInfo, request} from "../../utils/request";
import {User, UserItem} from "../types";

const useTable = () => {
    const [usersList, setUsersList] = useState<User[]>([]);
    const [usersData, setUsersData] = useState([]);
    const [value, setValue] = useState('');
   const localData: any = localStorage.getItem('users');
   const usersLocalData = JSON.parse(localData)
    async function getInfo() {
        const userData: any = [];
        if (usersLocalData === null || usersLocalData.length === 0) {
            for (let item of usersList) {
                await getUserInfo(item.login).then((data) => userData.push(data))
            }
            if(userData.length !== 0){
                localStorage.setItem('users', JSON.stringify(userData));
            }
        }
    }

    const filteredData = usersData?.filter((item: UserItem) => {
        let userLogin = item.user.login.toLowerCase();
        return userLogin.indexOf(value) !== -1;
    });
    useEffect(() => {
        request().then((data) => setUsersList(data));
    }, [])

    useEffect(() => {
        // @ts-ignore
        getInfo().then(() => setUsersData(JSON.parse(localStorage.getItem('users'))))
    }, [usersList])
    return {
        setValue, setUsersList, getInfo, filteredData, usersList, value, usersData
    }
}

export default useTable;