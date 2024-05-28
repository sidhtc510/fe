'use client'
import { deleteTopic, addTopic, updateTopic } from "@/app/functions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FormTopic({ id }) {
    const props = {
        className: "border p-2 rounded",
        type: "text"
    };
    const router = useRouter();
    const [topic, setTopic] = useState('')


    id && useEffect(() => {
        loadTopic(id)
    }, [])


    const loadTopic = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                cache: 'no-store'
            })

            if (!res.ok) {
                throw new Error('no res ok')
            }

            const result = await res.json()
            setTopic(result.topic)

        } catch (error) {
            console.log('TopicsList - component', error);
        }
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        let obj = Object.fromEntries(data);

        try {
            !id ? addTopic(obj) : updateTopic(obj, id);
            router.refresh();
            router.push("/");
        } catch (error) {
            console.log('error FormTopic - component', error);
        }
    }

    return (<>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 rounded-lg bg-slate-100 p-4 m-2">
            {id ? <div className="flex justify-between"><p>topic id is {id}</p>{id ? <button onClick={(e) => deleteTopic(e, id, router)} className="text-red-700">Delete</button> : ""}</div>  : ""}

            {/* <input type="hidden" name="_id" defaultValue={id ? id : null} /> */}
            <input {...props} name="title" placeholder="Topic title" defaultValue={topic?.title} /> {/* defaultValue={id ? obj.title : ""} */}
            <input {...props} name="description" placeholder="Topic description" defaultValue={topic?.description} />
            <input className="px-2 cursor-pointer py-1 rounded bg-blue-400 text-white hover:bg-blue-500 w-fit text-sm" type="submit" value={id ? "Save topic" : "Add new topic"} />
        </form>
    </>
    );
}
