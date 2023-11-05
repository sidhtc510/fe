import Link from "next/link";

export default function Button({ children, className, ...props }) {
    props["className"] = ["px-2 py-1 bg-blue-400 text-white rounded hover:bg-blue-500 text-sm", className].join(" ");
    return <Link {...props}>{children}</Link>;
}
