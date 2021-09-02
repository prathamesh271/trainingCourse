import { useRef } from 'react';
import Card from '../ui/Card';
import './NewMeetupForm.css';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
 
    function submitHandler(event) { 
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            address: enteredAddress,
            description: enteredDescription,
        };

        // console.log(meetupData);
        props.onaddMeetup(meetupData);
    }

    return(
        <Card>
            <form className="form" onSubmit={submitHandler}>
                <div className="form-group" >
                    <label htmlFor="meetup-title">Meetup Title</label>
                    <input type="text" className="form-control" id="title" ref={titleInputRef} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="meetup-address">Meetup Address</label>
                    <input type="text" className="form-control" id="address" ref={addressInputRef} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="meetup-description">Meetup Description</label>
                    <textarea className="form-control" id="description" rows="5" ref={descriptionInputRef}></textarea>
                </div>
                <div className="btn-wrapper">
                    <button type="submit" className="btn btn-primary" >Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;