import styled from '@emotion/styled';
import Box, { BoxProps } from './Box';

interface FlexProps extends BoxProps {}

const Flex = styled(Box)<FlexProps>({
  display: 'flex',
});

export default Flex;
