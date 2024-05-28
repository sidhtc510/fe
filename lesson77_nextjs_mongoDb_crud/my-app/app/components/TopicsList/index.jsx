'use client'
import React from 'react'
import Container from '../Container'
import Topic from '../Topic'

const loadTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            cache: 'no-store'
        })

        if (!res.ok) {
            throw new Error('no res ok')
        }

        return res.json()

    } catch (error) {
        console.log('TopicsList-component', error);
    }
}

export default async function TopicsList() {
    const { topics } = await loadTopics();
    return (
        <Container>
            {topics.map((topic, i)=> <Topic key={i} topic={topic}/>)}
        </Container>
    )
}
