import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is first meetups',
        address: 'Pune',
        description: 'This is first meetups',
    },
    {
        id: 'm2',
        title: 'This is second meetups',
        address: 'Mumbai',
        description: 'This is second meetups',
    },    
    {
        id: 'm3',
        title: 'This is third meetups',
        address: 'Banglore',
        description: 'This is third meetups',
    }
]

function AllMeetups(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        fetch('https://react-getting-started-de4e9-default-rtdb.firebaseio.com/meetups.json'
        ).then(response => {
            return response.json();
        }).then(data => {
            const meetups = [];

            for ( const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };

                meetups.push(meetup);
            }

            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    }, []);

    if (isLoading) {
        return(
            <section>
                <p className="" style={{ textAlign: "center", marginTop: '20%',}}>Loading...</p>
            </section>
        );
    }
    
    return (
        <section className="container">
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>
    )
}

export default AllMeetups;