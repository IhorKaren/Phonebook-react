import Typography from '@mui/joy/Typography';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Thumb = styled.div`
  position: relative;
  padding: 5px;
`;

const StyledText = styled(Typography)`
  position: absolute;
  bottom: -15px;
  animation: ${fadeIn} 0.5s ease-in;
`;

export { Thumb, StyledText };
