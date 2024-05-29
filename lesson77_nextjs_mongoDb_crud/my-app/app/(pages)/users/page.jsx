import Button from '@/app/components/Button';
import Container from '@/app/components/Container'
import User from '@/app/components/User';
import React from 'react'

const loadUsers = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/users', {
            cache: 'no-store'
        });
        if (!res.ok) {
            throw new Error('no res ok');
        }

        return res.json()

    } catch (error) {
        console.log('loadUsers error', error);
    }
}

export default async function Users() {
    const { users } = await loadUsers();

    return (
        <Container>
            <Button href='/users/addUser'>Add new user</Button>
            {users.map((user, i) => <User key={i} {...user} />)}
        </Container>
    )
}
