import { useState } from "react";
import "./App.css";
import FormModal from "./components/FormModal";

function App() {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div>
            <button onClick={() => setModalActive(true)}>Open Modal</button>
            <FormModal modalActive={modalActive} setModalActive={setModalActive}/>
            {/* <FormItem
                title="Login"
                button={{ submit: "Login", redirect: "Register" }}
                infoText="Register"
                formType="login"
            />

            <FormItem
                title="Reset password"
                button={{ submit: "Send" }}
                infoText="The temporary password is valid for 24 hours."
                infoText2="To receive a temporary password, you must enter the email address you provided during registration."
                formType="reset"
            /> */}
        </div>
    );
}

export default App;
