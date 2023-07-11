export const fields = {
    hName: {
        required: "Require",
        pattern: {
            value: /^[\p{L} '-]+$/u,
            message: "enter valid name",
        },
    },
    hNumber: {
        required: "Require",
        pattern: {
            value: /^(?:\d{4}[- ]){3}\d{4}|\d{16}$/,
            message: "enter valid card number",
        },
    },
    mm: {
        required: "Require",
        max: { value: 12, message: "no more than 12" },
        min: { value: 1, message: "no less than 1" },
        maxLength: 2,
        minLength: 1,
    },
    yy: { required: "Require", max: 99, maxLength: 2, minLength: 1 },
    cvc: { required: "Require", max: 999, maxLength: 3, minLength: 3 },
};
