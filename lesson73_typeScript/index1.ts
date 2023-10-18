const currRate: string = "1.05";

const fetchCurr = (response: string): number => {
    const data = JSON.parse(response);
    return data;
};

function transferEurToUsd(available: boolean, amount: number, commission: number): void {
    if (available) {
        let res: number = fetchCurr(currRate) * amount * commission;
        // console.log(res);
        // Или запись в элемент на странице вместо консоли
    } else {
        console.log("Сейчас обмен недоступен");
    }
}

transferEurToUsd(true, 500, 1.05);

const departments: string[] = ["dev", "design", "marketing"];
const num: number[] = [2, 4, 1];
const numArray: number[][] = [
    [2, 4, 1],
    [12, 3, 2],
];

const report = departments.filter((d: string) => d !== "dev").map((d: string) => `${d} - done`);
const [first] = report;

const userDataTuple: [boolean, number, ...string[]] = [true, 40, "John", "tolik"];

const message: string | number = 4;
const messages: string[] | number[] = [443, 221];

const printMsg = (msg: string | number): string | number => {
    return msg
};
console.log(printMsg("testt"));

