import { useForm } from "react-hook-form";
import s from "./s.module.css";
import Field from "../UI/Field";
import { fields } from "./fields.js";

export default function AddForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    // const ageValidate = (value) => {
    //     return "" + value.split("0").length - 1 < 2 || "double zero error";
    // };

    // console.log(errors);

    // const emailRegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    return (
        <div className={s.formWrapper}>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field) => (
                    <Field {...{ errors, register, ...field }} key={field.id} />
                ))}
                <input type="submit" className={s.submitBtn} />
            </form>
        </div>
    );
}
