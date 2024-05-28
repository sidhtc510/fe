import React from 'react'
import Container from '../Container'
import Topic from '../Topic'
import { loadTopics } from '@/app/functions';

export default async function TopicsList() {
    const { topics } = await loadTopics();

    return (
        <Container>
            {topics.map((topic, i)=> <Topic key={i} topic={topic}/>)}
        </Container>
    )
}
