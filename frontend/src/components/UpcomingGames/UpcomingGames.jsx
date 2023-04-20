import { useDispatch, useSelector } from "react-redux";
import { fetchUser, getUser } from "../../store/user";
import { useParams } from "react-router";
import { useEffect } from "react";
import './UpcomingGames.css'


const UpcomingGames = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  
  useEffect(() => {
    dispatch(fetchUser(userId))
  }, [userId, dispatch])

  return (
    <div id='scroll-wrapper'>
    <div id='upcoming'>
      <h2 id='ug-title'>Upcoming Games:</h2>
      <div id='ug-card-container'>
        {/* {
          filteredGames.map((game) => {
            return <IndexItem key={game._id} game={game} />
          })
        } */}
      </div>
      </div>
    </div>
  )

};

export default UpcomingGames;