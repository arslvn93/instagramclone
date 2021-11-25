import React from 'react'
import { useNavigate } from 'react-router';


export default function AddPost() {
    const [state, setState] = React.useState({
        image: "",
        url: ""
    });
    const navigate = useNavigate();

    const handleChangeInput = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const res = await fetch('https://insta-profile-caa84-default-rtdb.firebaseio.com/posts.json', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(state)
        });

        if (res.status == 200) {
            navigate("/")
        }else {
            alert("Unable to Add Post");
        }


    }

    return (
        <div className="mt-3">
            <h1 className="text-center py-3">Add Post</h1>
            <form onSubmit={handleSubmitForm} className="w-25 form mx-auto">
                <div className="form-group">
                    <label for="image">Image Address :</label>
                    <input type="text" name="image" value={state.image} onChange={handleChangeInput} className="form-control" id="image" required />
                </div>
                <div className="form-group mt-3">
                    <label for="url">URL :</label>
                    <input type="text" name="url" value={state.url} onChange={handleChangeInput} className="form-control" id="url" required />
                </div>
                <button type="submit" className="btn btn-primary mx-auto d-flex mt-3 px-4">Submit</button>
            </form> 
        </div>
    )
}
