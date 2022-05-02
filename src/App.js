import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchMessages } from './store/ActionCreators';
import NewsItem from './components/NewsItem/NewsItem';

function App() {
  const [beginNew, isBeginNew] = useState(false)

  const dispatch = useDispatch()

  const { isLoading, error, messages } = useSelector(state => {
    return state.MessagesReducer
  })

  // const favorites  = useSelector(state => state.FavoritesReducer)

  useEffect(() => {
    dispatch(fetchMessages())

    // обновление данных каждые 5 сек
    // setInterval(() => dispatch(fetchMessages()), 5000)

    // return () => {
    //   clearInterval()
    // }
  }, [])

  const sortNews = (e) => {
    e.preventDefault()
    isBeginNew(!beginNew)
  }

  let news = [...messages]

  news = news.sort((a, b) => a.date - b.date)
  if (news && beginNew) {
    news = news.reverse()
  }

  return (
    <>
      <div className='wrapper'>
        <div className='sort'>
          <button onClick={sortNews}>{!beginNew ? "Сначала новые" : "Сначала старые"}</button>
        </div>
        <div className='news'>
          {/* {isLoading && <h1>Messages download...</h1>} */}
          {error && <h1>{error}</h1>}
          <ul>
            {
              news && news.map(item =>
                <li key={item.id}>
                  <NewsItem
                    key={item.id}
                    id={item.id}
                    content={item.content}
                    favorite={item.favorite}
                  />
                </li>)
            }
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
