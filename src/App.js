import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMessages } from './store/ActionCreators';

function App() {
  const dispatch = useDispatch()


  const { isLoading, error, messages } = useSelector(state => {
    return state.MessagesReducer
  })

  useEffect(() => {
    dispatch(fetchMessages())
    // setInterval(() => dispatch(fetchMessages()), 5000)

    return () => {
      clearInterval()
    }
  }, [])

  // let { Messages } = messages.data

  // console.log(Object.values(messages.data.Messages)[0])

  return (
    <>
      <div className='wrapper'>
        {isLoading && <h1>Messages download...</h1>}
        {error && <h1>{error}</h1>}
        <ul>
        {
            messages?.data?.Messages && Object.values(messages.data.Messages).map(item => <li key={item.id}>{item.content}</li>)
          }
        </ul>
      </div>
    </>
  );
}

export default App;
