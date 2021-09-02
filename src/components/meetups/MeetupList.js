import MeetupItem from './MeetupItem';

function MeetupList(props){
    return (
        <div>
            <ul className="list" style={{ padding: 0 }}>
                {props.meetups.map((meetup) => (
                    <MeetupItem 
                        key={meetup.id}
                        id={meetup.id} 
                        title={meetup.title} 
                        address={meetup.address} 
                        description={meetup.description}
                        meetup={meetup.meetup}
                    />
                ))}
            </ul>
        </div>
    );
}

export default MeetupList;