import MovieList from "./components/MovieList";
import Offline from "./offline";

export default function Home() {
  return (
    <div className="container bg-custom w-full px-8 py-4">
      <Offline>
        <MovieList />
      </Offline>
    </div>
  );
}
