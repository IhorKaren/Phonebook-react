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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
`;

const StyledText = styled(Typography)`
  position: absolute;
  color: red;
  animation: ${fadeIn} 500ms ease-in-out;
`;

export { StyledText, StyledForm };
