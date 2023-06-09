import React from "react";
import s from "./s.module.css";
import FormButton from "../FormButton";
import { FormInput } from "../FormInput";
import { useForm } from "react-hook-form";

export default function FormItem({
    title,
    button,
    infoText,
    formType,
    infoText2,
}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: "onBlur" });

    const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const emailRegister = register("email", {
        required: "*Required field",
        pattern: {
            value: emailRegex,
            message: "*Not valid email format",
        },
    });

    const passwordRegister = register("password", {
        required: "*Required field",
        pattern: {
            value: passwordRegex,
            message:
                "*Your password should contain minimum eight characters, at least one letter, one number and one special character",
        },
    });

    const submit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <form className={s.form_item} onSubmit={handleSubmit(submit)}>
            <h3 className={s.form_title}>{title}</h3>
            <p className={s.info_text}>{infoText2}</p>
            <FormInput
                type="text"
                placeholder="Email"
                name="email"
                {...emailRegister}
            />
            {errors.email && (
                <p className={s.error_text}>{errors.email?.message}</p>
            )}{" "}
            {/* оператор опциональной последовательности  */}
            {formType === "reset" ? (
                ""
            ) : (
                <FormInput
                    type="password"
                    placeholder="Password"
                    name="password"
                    {...passwordRegister}
                />
            )}
            {errors.password && (
                <p className={s.error_text}>{errors.password?.message}</p>
            )}{" "}
            <p className={s.info_text}>{infoText}</p>
            <FormButton color="yellow">{button.submit}</FormButton>
            {formType === "reset" ? (
                ""
            ) : (
                <FormButton color="white">{button.redirect}</FormButton>
            )}
        </form>
    );
}
