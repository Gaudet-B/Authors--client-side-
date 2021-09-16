import Form from '../components/Form'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Create = () => {

    const [name, setName] = useState("")
    const history = useHistory()

    const changeHandler = e => {
        setName(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault()
        console.log(name);
        axios.post(`http://localhost:8000/api/authors/new/${name}`)
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
            <p className="my-2">Add a new author:</p>
            <Form changeHandler={changeHandler} submitHandler={submitHandler}/>
        </div>
    )
}

export default Create
