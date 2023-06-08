import { useRef, useState } from "react"



const FormSearch = ({setIdLocation}) => {

    const idLocationValue = useRef()

    const [inputIsEmpty, setInputIsEmpty] = useState(true)


    const handleSubmit = e => {
        e.preventDefault()

        const inputValue = idLocationValue.current.value.trim()

        if(inputValue === '') {
            setInputIsEmpty(true)
            setTimeout(() => {
                setInputIsEmpty(false)
            },3000)

        } else {
                setIdLocation(inputValue)
        }
    }

    return (
        <>
    <div className="form-container">
        <form onSubmit = {handleSubmit}>
        <input placeholder="Enter ID Location"
        type= "text"
        ref={idLocationValue}
        />
        <button className="button">Search </button>
        </form>
    </div>

    {
        inputIsEmpty && <h3> This field is required ❗❗</h3>
    }

    
    </>
    )
}

export default FormSearch