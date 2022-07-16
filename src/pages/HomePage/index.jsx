import ComicCard from "src/components/ComicCard";
import { Box } from "@mui/material";
import { useComicContext } from "src/contexts/comicContext";

export default function HomePage() {
  const { comic, originalComic } = useComicContext();
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ mt: 10 }}
    >
      <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
        {originalComic?.map((comic, index) => (
          <ComicCard
            key={index}
            id={comic.comic_id}
            name={comic.name}
            author_name={comic.author_name}
            current_chapter={comic.current_chapter}
            rating={comic.rating}
            status={comic.status}
            total_view={comic.total_view}
            thumbnail={comic.thumbnail}
          />
        ))}
      </Box>
    </Box>
  );
}
