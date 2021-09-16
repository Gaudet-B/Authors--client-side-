import Button from "./Button"
import { Link } from "react-router-dom"

const Form = props => {

    const { changeHandler, submitHandler, edit, author } = props
    // const history = useHistory()

    // const cancelHandler = (e) => {
    //     e.preventDefault()
    //     history.push("/")
    // }  

    return (
        <div className="d-flex flex-column border border-light p-3">
            <form onSubmit={submitHandler} className="form d-flex flex-column">
                <label htmlFor="name" className="form-label">Name:</label>
                {
                (edit) ? 
                <input onChange={changeHandler} name="name" className="form-control mb-3" style={{ maxWidth: "350px" }} placeholder={author} />
                :
                <input onChange={changeHandler} name="name" className="form-control mb-3" style={{ maxWidth: "350px" }} />
                }
                <div className="d-flex flex-row">
                    <Link to={"/"} className="btn btn-primary me-2" >Cancel</Link>
                    <Button type="submit" title={"Submit"} />
                </div>
            </form>
        </div>
    )
}

export default Form
