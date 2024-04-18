interface Children {
    name: string[]
}
interface Obj {
    id: number,
    name: string,
    childrens: Children,
    profession: string,
    employed: boolean
}

const obj: Obj = {
    id: 1,
    name: "Anatolii",
    childrens: {
        name: ["Kira", "Diana", "Timur"],
    },
    profession: "it Specialist",
    employed: false
}




type paramType = "up" | "down"; 

function performAction (param: paramType): 1 | -1 | undefined {
    if (param === "up") {
        return 1;
    } else if (param === "down") {
        return -1;
    } else {
        return undefined;
    }
}
