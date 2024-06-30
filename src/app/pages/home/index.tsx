import { Container, Typography } from '@mui/material';
import Post from '../../components/post';

function Home() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" textAlign="center" mt={10} color={'#8B735B'}>
        adrián romero
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        sx={{ fontStyle: 'italic' }}
        mb={10}
      >
        blog where I share my learnings and experiencies
      </Typography>
      <Post />
    </Container>
  );
}

export default Home;
