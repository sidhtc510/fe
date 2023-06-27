export const fields = [
    {
        id: 1,
        name: "firstName",
        constraints: {
            required: "required field",
            minLength: {
                value: 5,
                message: "more than 5 symbols",
            },
            maxLength: {
                value: 10,
                message: "less than 10 symbols",
            },
        },
    },

    {
        id: 2,
        name: "lastName",
        constraints: {
            required: "required field",
        },
    },

    {
        id: 3,
        name: "age",
        constraints: {
            min: { value: 1, message: "more than 1 year" },
            max: { value: 140, message: "less than 140 year" },
            validate: (value) =>
                "" + value.split("0").length - 1 < 2 || "double zero error",
        },
    },

    {
        id: 4,
        name: "email",
        constraints: {
            required: "field required",
            pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                message: "enter valid e-mail",
            },
        },
    },
    {
        id: 5,
        name: "phone",
        constraints: {
            required: "field required",
            pattern: {
                value: /^(?:\+?38)?(?:[-()\s]*\d){10}$/,
                message: "enter valid phone",
            },
        },
    },
];
