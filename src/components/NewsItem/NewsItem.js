import { useDispatch } from "react-redux"
import { toggleFavorite } from "../../store/slices/messagesSlice"
import Favorite from "../Favorite/Favorite"

const NewsItem = ({ id, favorite, content }) => {
    const dispatch = useDispatch()

    const handleClickFavorite = () => {
        dispatch(toggleFavorite({ id, favorite: !favorite }))
    }

    return (
        <div className='news__wrapper'>
            <div className='news__content'>
                {content}
            </div>
            <div className='news__icons'>
                <Favorite checked={favorite} onChange={handleClickFavorite} />
            </div>
        </div>
    )
}

export default NewsItem