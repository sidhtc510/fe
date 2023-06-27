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
        errors,
        register,
        name: "lastName",
        constraints: {
            required: "required field",
        },
    },

    {
        id:3,
        errors,
        register,
        name: "age",
        constraints: {
            min: { value: 1, message: "more than 1 year" },
            max: { value: 140, message: "less than 140 year" },
            validate: ageValidate,
        },

    }
];

{
    /*

                <Field
                    {...{
                        errors,
                        register,
                        name: "lastName",
                        constraints: {
                            required: "required field",
                        },
                    }}
                />

                <Field
                    {...{
                        errors,
                        register,
                        name: "age",
                        constraints: {
                            min: { value: 1, message: "more than 1 year" },
                            max: { value: 140, message: "less than 140 year" },
                            // validate: ageValidate,
                        },
                    }}
                />

                <Field
                    {...{
                        errors,
                        register,
                        name: "email",
                        constraints: {
                            required: "field required",
                            pattern: {
                                // value: emailRegExp,
                                // message: "enter valid e-mail",
                            },
                        },
                    }}
                /> */
}
