import React from 'react';

class UserList extends React.Component {
    state = {

    }

    render() {
        const { name } = this.props;
        const { avatar } = this.props;
        const { email } = this.props;
        console.log(name);
        console.log(avatar);
        console.log(email);
        return (
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={avatar} alt={name}/></td>
                        <td>{name}</td>
                        <td>{email}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default UserList;
