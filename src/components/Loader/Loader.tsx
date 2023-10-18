import CircularProgress from '@mui/joy/CircularProgress';

const Loader = () => {
  return (
    <CircularProgress
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50% -50%)',
      }}
    />
  );
};

export default Loader;
