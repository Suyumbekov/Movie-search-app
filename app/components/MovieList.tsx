import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { format } from "date-fns";
import truncateText from "@/app/utils/truncate";
import imgUrl from "../../public/image.svg";

interface Movie {
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  genre_ids: number[];
}

interface Genre {
  id: number;
  name: string;
}

const MovieList = async () => {
  const apiKey = process.env.API_KEY;
  const movieUrl = `https://api.themoviedb.org/3/search/movie?query=return&api_key=${apiKey}`;

  // Fetch movies
  const movieResponse = await fetch(movieUrl);
  const movieData: { results: Movie[] } = await movieResponse.json();
  const movies = movieData.results;

  const genres = ["Action", "Drama"];

  if (movies.length === 0) {
    return <div>No movies found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-[37px]">
      {movies.map((movie) => {
        const image = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          : imgUrl;
        return (
          <Card
            key={movie.title}
            className="bg-custom flex flex-col md:flex-row border-none rounded-none shadow-md w-full"
          >
            <div className="w-full md:w-[183px] h-full">
              <Image
                src={image}
                alt={movie.title}
                width={183}
                height={279}
                className="w-full h-full"
              />
            </div>
            <div className="flex-1 p-4">
              <CardHeader className="p-0 mb-[7px]">
                <CardTitle className="text-lg md:text-xl">
                  {movie.title}
                </CardTitle>
                <CardDescription className="mt-[7px]">
                  {movie.release_date &&
                  !isNaN(new Date(movie.release_date).getTime())
                    ? format(new Date(movie.release_date), "MMMM d, yyyy")
                    : "Unknown"}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-wrap">
                  {genres.map((genre, index) => (
                    <span
                      key={index}
                      className="bg-genre_back text-genre px-2 py-1 mr-2 mb-2 border border-genre_border rounded-sm text-xs"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-700">
                  {truncateText(movie.overview, 230)}
                </p>
              </CardContent>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default MovieList;
