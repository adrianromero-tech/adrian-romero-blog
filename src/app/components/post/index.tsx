import { Container, Typography } from '@mui/material';

function Post() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h6" color="#333333" mb={1}>
        {' '}
        Title{' '}
      </Typography>
      <Typography variant="body1" color="#4F4F4F">
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.{' '}
      </Typography>
      <Typography variant="body2" color="#828282" mt={2}>
        {' '}
        1 min read - Feb 28, 2024{' '}
      </Typography>
    </Container>
  );
}

export default Post;
