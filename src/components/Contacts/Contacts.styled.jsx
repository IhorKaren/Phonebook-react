import List from '@mui/joy/List';
import styled from 'styled-components';

const StyledList = styled(List)`
  height: 600px;
  max-width: 500px;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #4e4e4e;
    border-radius: 25px;
  }
`;

export { StyledList };
