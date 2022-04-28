import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMessages } from './store/ActionCreators';

function App() {
  const dispatch = useDispatch()
  const { isLoading, error, messages } = useSelector(state => state.MessagesReducer)

  useEffect(() => {
    dispatch(fetchMessages())
  }, [])

  return (
    <>
      <div className='wrapper'>
        {isLoading && <h1>Messages download...</h1>}
        {error && <h1>{error}</h1>}
        {messages}
      </div>
    </>
  );
}

export default App;
