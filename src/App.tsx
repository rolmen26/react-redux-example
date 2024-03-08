import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addUser, deleteUser, updateUsername } from './app/features/Users';

interface User {
    id: number;
    name: string;
    username: string;
}

const App: React.FC = () => {

    const usersList = useSelector((state: any) => state.users.value);

    const dispatch = useDispatch();

    const [name, setName] = useState('');

    const [username, setUsername] = useState('');

    const [newUsername, setNewUsername] = useState('');

    return (
        <div className="App">
            {" "}
            <div className="addUser">
                <input type="text" className="text" placeholder='Name...' onChange={(event) => { setName(event.target.value) }} />
                <input type="text" className="text" placeholder='Username...' onChange={(event) => { setUsername(event.target.value) }} />
                <button onClick={() => { dispatch(addUser({ id: usersList[usersList.length - 1].id + 1, name, username })) }}>Add User</button>
            </div>
            <div className="displayUsers">
                {usersList.map((user: User) => (
                    <div key={user.id} className="user">
                        <h3>{user.name}</h3>
                        <p>{user.username}</p>
                        <input type="text" className="text" placeholder='New username' onChange={(event) => {
                            setNewUsername(event.target.value);
                        }} />
                        <button onClick={() => { dispatch(updateUsername({ id: user.id, username: newUsername })) }}>Update username</button>
                        <button onClick={() => { dispatch(deleteUser({ id: user.id })) }}>Delete user</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;