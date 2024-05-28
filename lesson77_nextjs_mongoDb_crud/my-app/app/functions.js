

export const loadTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            cache: 'no-store'
        })

        if (!res.ok) {
            throw new Error('no res ok')
        }

        return res.json()

    } catch (error) {
        console.log('TopicsList - component', error);
    }
}

export const deleteTopic = async (e, id, router) => {
    e.preventDefault();
    const confirmed = confirm('delete?')

    if (confirmed) {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
            method: 'DELETE'
        })
        if (res.ok) {
            router.refresh();
            router.push("/");
            
        }
    }
}

export const addTopic = async (obj) => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(obj)
        })

        if (!res.ok) {
            throw new Error('no res ok')
        }
        return res.json()

    } catch (error) {
        console.log('FormTopic add -component', error);
    }
}

export const updateTopic = async (obj, id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            method: 'PUT',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(obj)
        })

        if (!res.ok) {
            throw new Error('no res ok')
        }
        return res.json()

    } catch (error) {
        console.log('FormTopic update -component', error);
    }
}