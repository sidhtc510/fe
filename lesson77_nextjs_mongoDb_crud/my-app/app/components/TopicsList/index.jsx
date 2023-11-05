import React from "react";
import Container from "../Container";
import Button from "../Button";

export default function TopicsList() {
    
    return (
        <Container>
            <div className="flex justify-around border-b items-center mt-3 hover:bg-slate-50 rounded-lg">
                <div>
                    <p className="text-lg font-bold">title</p>
                    <p className="text-xs">description</p>
                </div>
                <div className="flex gap-1">
                    <Button href={"/admin/editTopic/123456"}>Edit</Button>
                    <Button href={""}>Delete</Button>
                </div>
            </div>
        </Container>
    );
}
