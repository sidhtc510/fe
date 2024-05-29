
import React from "react";
import Container from "../Container";
import Button from "../Button";

export default function Topic({ topic }) {

    return (
        <Container className='flex flex-col rounded-lg bg-slate-100 p-4 m-2 shadow'>

                <div>
                    <p className="text-lg font-bold">{topic.title}</p>
                    <p className="text-xs">{topic.description}</p>
                </div>
                <div className="flex gap-1">
                    <Button href={`/admin/editTopic/${topic._id}`}>Edit</Button>
                </div>

        </Container>
    );
}
