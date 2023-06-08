import React from "react";
import s from "./s.module.css";
import FormButton from "../FormButton";

export default function FormItem() {
    return (
        <form className={s.form_item}>
            <h3 className={s.form_title}>Registration</h3>

            <p className={s.info_text}>
                By registering on the site, you agree to our Rules and Privacy
                Policy and agree to receive newsletters.
            </p>
            <FormButton color='yellow'>Registration</FormButton>
            <FormButton color='white'>Login</FormButton>
        </form>
    );
}
