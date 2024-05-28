'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation'


export default async function FormTopic({ id }) {
    const router = useRouter();

    const props = {
        className: "border p-2 rounded",
    };

    // const [topicTitle, setTopicTitle] = useState('')

    // const loadTopic = async (id) => {
    //     try {
    //         const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
    //             cache: 'no-store'
    //         })

    //         if (!res.ok) {
    //             throw new Error('no res ok')
    //         }

    //         return res.json()

    //     } catch (error) {
    //         console.log('FormTopic loadTopic - component', error);
    //     }
    // }

    // const topic = await loadTopic(id)
    // console.log(topic.title)

    const addTopic = async (obj) => {
        try {
            const res = await fetch('http://localhost:3000/api/topics', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(obj)
            })

            if (!res.ok) {
                throw new Error('no res ok')
            }
            router.push("/");
            return res.json()

        } catch (error) {
            console.log('FormTopic add -component', error);
        }
    }

    const updateTopic = async (obj, id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: 'PUT',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(obj)
            })

            if (!res.ok) {
                throw new Error('no res ok')
            }
            router.push("/");
            return res.json()

        } catch (error) {
            console.log('FormTopic update -component', error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        let obj = Object.fromEntries(data);

        try {
            // console.log(id);
            !id ? addTopic(obj) : updateTopic(obj, id)
            //  addTopic(obj) 
        } catch (error) {
            console.log('error FormTopic - component', error);
        }
    }

    const delHandler = async () => {
        const confirmed = confirm('delete?')

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                method: 'DELETE'
            })
            if (res.ok) {
                router.push("/");
                // console.log('deleted');
            }
        }
    }

    return (<>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 rounded-lg bg-slate-100 p-4 m-2">
            {id ? <p>topic id is {id}</p> : ""}

            {/* <input type="hidden" name="_id" defaultValue={id ? id : null} /> */}
            <input {...props} type="text" name="title" placeholder="Topic title" /> {/* defaultValue={id ? obj.title : ""} */}
            <input {...props} type="text" name="description" placeholder="Topic description" />
            <input className="px-2 cursor-pointer py-1 rounded bg-blue-400 text-white hover:bg-blue-500 w-fit text-sm" type="submit" value={id ? "Save topic" : "Add new topic"} />
        </form>

        {id ? <button onClick={delHandler} className="text-red-700">Delete</button> : ""}

    </>
    );
}
