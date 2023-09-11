import React, { useState } from 'react'
import user from '../user.jpg'



function Reviews() {

    const [comments, setComments] = useState({
        name: "", comment: "", time: ""
    })
    const [allcomment, setAllComment] = useState([])


    const submit = (e) => {
        e.preventDefault()
        setAllComment([
            ...allcomment, comments
        ])

        console.log(comments);
    }

    const onchange = (e) => {
        e.preventDefault()


        setComments({
            ...comments,
            [e.target.name]: e.target.value,
            time: new Date().toLocaleString()
        });
    }
    console.log(allcomment);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div className="card">
                            <h1>your reviews are most welcome</h1>
                            <p>The Marvel Cinematic Universe has had a significant impact on popular culture, revitalizing interest in superhero stories and paving the way for other cinematic universes to emerge. Its blend of action, character development, and interconnected storytelling has resonated with audiences around the world.
                                Many MCU films are blockbuster hits that have achieved both critical acclaim and enormous box office success. The franchise's popularity has helped shape modern Hollywood and encouraged other studios to create shared cinematic universes.
                            </p>

                            {
                                allcomment.map((items) => {
                                    if (!items) {
                                        return null;
                                    } else {
                                        return (
                                            <>
                                                <div className="returncard">
                                                    <div className="col-2">
                                                        <img src={user} alt="" />
                                                    </div>
                                                    <div className="rcard">
                                                        <div className="Name">
                                                            <h6>NAME :</h6>
                                                            <span> {items.name}</span>
                                                        </div>
                                                        <div className="Name">
                                                            <h6>COMMENT :</h6>
                                                            <span> {items.comment}</span>
                                                        </div>
                                                        <div className="Name">
                                                            <h6>DATE & TIME :</h6>
                                                            <span> {items.time}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }

                                })
                            }

                        </div>

                    </div>
                    <div className="col-5">
                        <form onSubmit={submit}>
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <h3 className="card-title">Leave a Comment</h3>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" onChange={onchange} className="form-control" id="name" name="name" placeholder="Enter your name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="comment" className="form-label">Comment</label>
                                        <input type="text" onChange={onchange} className="form-control" id="comment" name="comment" placeholder="Write your comment here" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
// ...comments,[e.target.name]:[e.target.value],time:[new Date().toLocaleString()]
