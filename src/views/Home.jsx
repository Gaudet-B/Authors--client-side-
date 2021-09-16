import { Link, useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import Button from "../components/Button"
import DeleteButton from "../components/DeleteButton"
import axios from "axios"

const Home = () => {

    const [authors, setAuthors] = useState([])
    const [state, setState] = useState(false)
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }, [state])

    const clickHandler = (id) => {
        history.push(`/authors/edit/${id}`)
    }

    return (
        <div className="text-start text-light">
            <Link to={`/authors/new`} className="link-light">
                Add an author
            </Link>
            <p className="my-2">We have quotes by:</p>
            <table className="table table-secondary mt-3">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (authors.length > 0) ?
                        authors.map((author, idx) => {
                            return(
                                <tr key={idx}>
                                    <td>{ author.name }</td>
                                    <td>
                                        <div className="d-flex flex-row">
                                            <Button arg={author._id} clickHandler={clickHandler} title={"Edit"} />
                                            <DeleteButton id={author._id} state={ state } setState={ setState }/>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }) : 
                        
                        <tr>
                            <td className="display-6 text-light my-5">Please add authors to the database.</td>
                        </tr>
                    }
                    </tbody>
            </table>
        </div>
    )
}

export default Home
