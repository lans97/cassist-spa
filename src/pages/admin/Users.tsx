import api from "../../services/api";

function UsersTables() {

    const getUsers = async () => {
    }

    return (
        <div>
            <h1>Users</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Google UID</th>
                    <th>Email</th>
                    <th>Email Verified</th>
                    <th>Display Name</th>
                    <th>Role</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th>Deleted At</th>
                </tr>
                <tr>
                    <td></td>
                </tr>
            </table>
        </div>
    )
}

export default UsersTables;
