import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }: any) => {
  return exerciseVideos.length > 0 ? (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p='20px'>
      <Typography variant='h3' mb='33px'>
        Watch{" "}
        <span style={{ color: "red", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent='flex-start'
        flexWrap='wrap'
        alignItems='center'
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "80px", xs: "0" } }}
      >
        {exerciseVideos?.slice(0, 6).map((item: any, i: any) => (
          <a
            key={i}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant='h5' color='#000'>
                {item.video.title}
              </Typography>
              <Typography variant='h6' color='#000'>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  ) : null;
};

export default ExerciseVideos;
