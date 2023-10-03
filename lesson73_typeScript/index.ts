const isBirthdayData: boolean = true;
const ageData: number = 40;
const userNameData: string = "John";

const createError = (msg: string) => {
    throw new Error(msg);
};

function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
    if (isBirthday) {
        return `Congrats ${userName.toUpperCase()}, today your age is ${age + 1}`;
    }
    else{
        return createError("Error")
    }
}

console.log(
    logBrtMsg(isBirthdayData, userNameData, ageData)
);

