import React from 'react';


//should display each user's username, score 
const LeaderboardEntry = ({user}) => {
 return(

   <div>
     <ul className='leaderboard-list-item'>
     <img src={"http://svgcuttingfiles.com/images/PP-ChibiBabyDInos.png"} className="leaderboard-list-item-image"/>
        <span className="leaderboard-list-item-user">{user.firstName}</span>
        <span className="leaderboard-list-item-score">{user.globalScore}</span>
      </ul>
    </div>

 )
};

export default LeaderboardEntry;



