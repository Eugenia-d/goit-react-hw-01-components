import logo from "./logo.svg";
import "./App.css";
import ProductCard from "./components/product/ProductCard";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import user from "./user.json";
import data from "./data.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./friends.json";
import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />;<FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
