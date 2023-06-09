import React from "react";
import FormItem from "../FormItem";
import s from "./s.module.css";

export default function FormModal({ modalActive, setModalActive }) {
    return (
        <div className={[s.modal, modalActive ? s.active : " "].join(" ")}>
            <div className={s.modal_content}>
                <span className={s.cross} onClick={() => setModalActive(false)}>
                    X
                </span>
                <FormItem
                    title="Registration"
                    button={{ submit: "Register", redirect: "Login" }}
                    infoText="By registering on the site, you agree to our Rules and Privacy
                Policy and agree to receive newsletters."
                    formType="registration"
                />
            </div>
        </div>
    );
}
