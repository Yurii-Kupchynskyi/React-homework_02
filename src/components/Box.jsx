import styled from 'styled-components';
import {
  color,
  space,
  layout,
  flexbox,
  background,
  border,
  position,
} from 'styled-system';

export const Box = styled('div')(
  color,
  space,
  layout,
  flexbox,
  background,
  border,
  position
);

export const FlexBox = styled(Box)`
  gap: ${p => p.gap};
`;
