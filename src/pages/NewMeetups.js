import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetups(props){
    const history = useHistory();

    function addMeetupHandler(meetupData){
        fetch(
            'https://react-getting-started-de4e9-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'content-type': 'application/json',
                },
            }
        ).then(() => {
            history.push('/');
        });
    }

    return (
        <div className="container">
            <h1>Add New Meetup</h1>
            <NewMeetupForm  onaddMeetup={addMeetupHandler}/>
        </div>
    )
}

export default NewMeetups;