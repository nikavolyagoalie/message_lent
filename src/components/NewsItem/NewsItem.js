import Favorite from "../Favorite/Favorite"

const NewsItem = ({ id, favorite, content }) => {

    return (
        <div className='news__wrapper'>
            <div className='news__content'>
                {content}
            </div>
            <div className='news__icons'>
                <Favorite checked={favorite} id={id}/>
            </div>
        </div>
    )
}

export default NewsItem