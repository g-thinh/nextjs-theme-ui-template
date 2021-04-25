import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
  compose,
  space,
  layout,
  typography,
  color,
  flexbox,
  SpaceProps,
  LayoutProps,
  ColorProps,
  FlexboxProps,
  TypographyProps,
} from 'styled-system';

interface TextProps
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    ColorProps,
    FlexboxProps {}

const Text = styled('p', { shouldForwardProp })<TextProps>(
  compose(space, color, layout, flexbox, typography)
);

export default Text;
