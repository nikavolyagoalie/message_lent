import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import messagesSlice from "../../store/slices/messagesSlice";

const Favorite = ({ checked, id }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const dispatch = useDispatch()

    const toggleFavorite = () => {
        setIsChecked(!isChecked)

        // dispatch(messagesSlice({id, favorite: !checked}))
    }

    return (
        <label>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={toggleFavorite}
            />
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`checkbox ${isChecked ? "checkbox__active" : ""}`}
                aria-hidden="true"
            >
                <path d="M10.3672 3.20312L7.82812 8.39844L2.08594 9.21875C1.07031 9.375 0.679688 10.625 1.42188 11.3672L5.52344 15.3906L4.54688 21.0547C4.39062 22.0703 5.48438 22.8516 6.38281 22.3828L11.5 19.6875L16.5781 22.3828C17.4766 22.8516 18.5703 22.0703 18.4141 21.0547L17.4375 15.3906L21.5391 11.3672C22.2812 10.625 21.8906 9.375 20.875 9.21875L15.1719 8.39844L12.5938 3.20312C12.1641 2.30469 10.8359 2.26562 10.3672 3.20312Z" fill={isChecked ? "#0088EE" : "#d2d2d2"} />
            </svg>
        </label>
    )
}

export default Favorite;