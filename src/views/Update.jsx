import Form from '../components/Form'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Update = () => {

    const [name, setName] = useState("")
    const [author, setAuthor] = useState({})  
    const history = useHistory()
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => setAuthor(res.data))
            .catch(err => console.log(err))
    })

    const changeHandler = e => {
        setName(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/update/${id}`, {name: name})
            .then(res => {
                setName("")
                history.push("/")
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="text-start text-light">
            <Link to={`/`} className="link-light">
                Home
            </Link>
            <p className="my-2">Edit this author:</p>
            <Form edit={true} author={author.name} changeHandler={changeHandler} submitHandler={submitHandler}/>
        </div>
    )
}

export default Update
