import React from "react";
import LeaderboardEntry from "./LeaderboardEntry.jsx";

//should receive an array of 10 highest score user profiles
//set time to render new score every 10 seconds
const Leaderboard = ({ data }) => (
  <div className="leaderboardlist">
    {data.map(user => <LeaderboardEntry key={user.id} user={user} />)}
  </div>
);
export default Leaderboard;


