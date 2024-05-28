
import React from "react";
import Container from "../Container";
import Button from "../Button";

export default function Topic({ topic }) {


    return (
        <Container>
            <div className="flex justify-between border-b items-center mt-3 hover:bg-slate-50 rounded-lg">
                <div>
                    <p className="text-lg font-bold">{topic.title}</p>
                    <p className="text-xs">{topic.description}</p>
                </div>
                <div className="flex gap-1">
                    <Button href={`/admin/editTopic/${topic._id}`}>Edit</Button>
                </div>
            </div>
        </Container>
    );
}
