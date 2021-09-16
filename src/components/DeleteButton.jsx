import axios from 'axios'
// import { useHistory } from 'react-router-dom'

const DeleteButton = props => {

    const { id, state, setState } = props
    // const history = useHistory()

    const deleteHandler = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res)
                setState(!state)
            })
            .catch(err => console.log(err))
    }

    return (
        <button onClick={() => deleteHandler(id)} className="btn btn-danger">
            Delete
        </button>
    )
}

export default DeleteButton
