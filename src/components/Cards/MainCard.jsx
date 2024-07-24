import * as React from "react";
import {
  AspectRatio,
  Box,
  Card,
  CardCover,
  IconButton,
  Typography,
} from "@mui/joy";
import {
  BookmarkBorder,
  Brightness1,
  Brightness1Sharp,
  LocalMovies,
} from "@mui/icons-material";
import api from "../../axios/FetchAxios";

export default function MainCard({ item ,type}) {
  const [loading, setLoading] = React.useState(false);
  const url = "https://image.tmdb.org/t/p/w500" + (item?.backdrop_path ? item?.backdrop_path : item?.poster_path);
  const handleWatchlist = async () => {
    setLoading(true);
    const payload = {
      media_type: item?.media_type,
      media_id: item?.id,
      watchlist: true,
    };
  
    try {
      await api.post("/account/12028356/watchlist", payload);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Card
      variant="plain"
      sx={{
        p: 0,
        overflow: "hidden",
        backgroundColor: "transparent",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <AspectRatio ratio="4/2">
          <figure>
            <img src={url} loading="lazy" alt={item?.title} style={{
              width: "100%",
              objectFit: "cover",
            }}/>
          </figure>
        </AspectRatio>
        <CardCover
          className="gradient-cover"
          sx={{
            transition: "0.1s ease-in",
            background: "rgba(0,0,0,0.2)",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            <IconButton
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "#fff",
                alignSelf: "flex-end",
                mr: 1,
                mt: 1,
              }}
              onClick={handleWatchlist}
            >
              <BookmarkBorder fontSize="inherit" />
            </IconButton>
            <Box
              sx={{
                p: 2,
                color: "#fff",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifySelf: "flex-end",
                  gap: 1.5,
                  color: "#D1D2D6",
                }}
              >
                <Typography level="body-sm" color="inherit">
                  {item?.release_date?.split("-")[0] ||
                    item?.first_air_date?.split("-")[0]}
                </Typography>
                <Typography
                  level="body-sm"
                  color="inherit"
                  startDecorator={<LocalMovies fontSize="sm" />}
                >
                  {item?.media_type?.toUpperCase() || type}
                </Typography>
                <Typography level="body-sm" color="inherit">
                  {item?.adult ? "18+" : "PG"}
                </Typography>
              </Box>
              <Typography level="title-md" noWrap color="inherit">
                {item?.title || item?.name}
              </Typography>
            </Box>
          </div>
        </CardCover>
      </Box>
    </Card>
  );
}
