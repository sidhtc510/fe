import React from "react";

export default function FormTopic({ id }) {
    const props = {
        className: "border p-2 rounded",
    };

    return (
        <form className="flex flex-col gap-2 rounded-lg bg-slate-100 p-4 m-2">
            <input {...props} type="text" name="title" placeholder="Topic title" defaultValue={id} />
            <input {...props} type="text" name="description" placeholder="Topic description" />
            <input className="px-2 cursor-pointer py-1 rounded bg-blue-400 text-white hover:bg-blue-500 w-fit text-sm" type="submit" value={id ? "Save topic" : "Add new topic"} />
        </form>
    );
}
