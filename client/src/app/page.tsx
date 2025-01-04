import Feed from "./(components)/feed";
import FeedOptions from "./(components)/feedOptions";
import '../styles/home.css'


export default function Home() {
  return (
    <div className="home">
      <FeedOptions/>
      <Feed/>
    </div>
  );
}
