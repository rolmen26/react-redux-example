import './App.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addUser, deleteUser, updateUsername } from './app/features/Users';
import { fetchUsers } from './app/data/FakeData';
import { RootState } from './app/store';

const App: React.FC = () => {

    const users = useSelector((state: RootState) => state.users);

    useEffect(() => {
        dispatch(fetchUsers() as any);
    }, []);


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
                <button onClick={() => { dispatch(addUser({ id: users.data[users.data.length - 1].id + 1, name, username })) }}>Add User</button>
            </div>
            <div className="displayUsers">
                {users?.isLoading ? <h1>Loading... </h1> : users?.isError ? <h1>Error... </h1> : users?.data.map((user) => {
                    return (
                        <div key={user.id} className="user">
                            <h1>{user.name}</h1>
                            <h2>{user.username}</h2>
                            <input type="text" className="text" placeholder='New Username...' onChange={(event) => { setNewUsername(event.target.value) }} />
                            <button onClick={() => { dispatch(updateUsername({ id: user.id, username: newUsername })) }}>Update Username</button>
                            <button onClick={() => { dispatch(deleteUser({ id: user.id })) }}>Delete User</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default App;