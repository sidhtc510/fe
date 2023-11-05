import s from './s.module.css'
export default function Container({ children, ...props }) {
    return <div className={s.wrap} {...props}>{children}</div>;
}