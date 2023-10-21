"use client";

import UseAnimations from "react-useanimations";
import loadAnim from "react-useanimations/lib/loading";

export default function Page() {
    return (
        <div className="flex gap-3 items-center">
            <UseAnimations animation={loadAnim} size={56} />
            loading...
        </div>
    );
}
