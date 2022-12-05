import { useRef } from "react";

export default function FocusScreen() {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    };

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input
                ref={inputRef}
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <button 
                className="btn btn-primary mt-2"
                onClick={onClick}
            >
                set focus
            </button>

        </>
    )
}
