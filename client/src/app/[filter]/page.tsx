import Feed from "../(components)/feed";
import FeedOptions from "../(components)/feedOptions";
import '../../styles/home.css'

export default async function Home({
  params,
}: {
  params: Promise<{ filter: number }>
}) {
  const filter = (await params).filter
  return (
    <div className="home">
      <FeedOptions/>
      <Feed filter={filter}/>
    </div>
  )
}
