import { useContext } from 'react';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';
import './meetupItem.css';

function MeetupItem(props){
    const favoritesCtx = useContext(FavoritesContext);

    const itemFavorite = favoritesCtx.itemFavorites(props.id);

    function toggleFavoriteStatusHandler(){
        if(itemFavorite){
            favoritesCtx.removeFavorites(props.id);
        } else {
            favoritesCtx.addFavorites({
                id: props.id,
                title: props.title,
                address: props.address,
                description: props.description,
            });
        }
    }

    return(
        <div> 
            <Card> 
                <h2 className="title">{props.title}</h2>
                <address className="address">{props.address}</address>
                <div className="description">{props.description}</div>
                <div className="fav-btn">
                    <button className="btn favorite-btn" onClick={toggleFavoriteStatusHandler}
                        style={{
                            backgroundColor: itemFavorite ? 'orange': 'lightgrey' }}>
                        {itemFavorite ? 'Remove from favorite' : 'To favorite'}
                    </button>
                </div>
            </Card>
        </div>
    )
}

export default MeetupItem;