import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
  compose,
  space,
  color,
  layout,
  flexbox,
  border,
  BorderProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
} from 'styled-system';

interface BoxProps
  extends BorderProps,
    SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps {}

const Box = styled('div', { shouldForwardProp })<BoxProps>(
  compose(border, space, color, layout, flexbox)
);

export type { BoxProps };
export default Box;
