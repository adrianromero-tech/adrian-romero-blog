import { Container, Typography } from '@mui/material';
import Post from '../../components/post';

function Home() {
  return (
    <Container maxWidth="md">
      <Typography variant="h5" textAlign="center">
        Adrián Romero
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        sx={{ fontStyle: 'italic' }}
        mb={10}
      >
        Sharing my learnings, experiencies and ideas
      </Typography>
      <Post />
    </Container>
  );
}

export default Home;
