import { useForm } from "react-hook-form";
import s from "./s.module.css";
import Field from "../UI/Field";
import { fields } from "./fields";

export default function AddForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data = { ...data, age: +data.age };
        return data;
    };
    
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
