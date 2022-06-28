import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--border-bottom': `1px solid ${COLORS.black}`,
    '--font-size': `${14 / 16}rem`,
    '--height': `${24 / 16}rem`,
    '--icon-size': `${10.67 / 16}rem`,
    '--input-padding-left': `${16 / 16}rem`,
  },
  large: {
    '--border-bottom': `2px solid ${COLORS.black}`,
    '--font-size': `${18 / 16}rem`,
    '--height': `${36 / 16}rem`,
    '--icon-size': `${16 / 16}rem`,
    '--input-padding-left': `${24 / 16}rem`,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size = 'small',
  placeholder,
}) => {
  const styles = SIZES[size];
  if (!styles) {
    throw new Error(`unknown size passed to IconInput: ${size}`);
  }
  return (
    <Wrapper style={{ ...styles, '--width': width + 'px' }}>
      <VisuallyHidden>
        <label for="iconInput">{label}</label>
      </VisuallyHidden>
      <IconWrapper
        id={icon}
        size={size === 'small' ? '10.67' : '16'}
        style={styles}
      />
      <Input id="iconInput" placeholder={placeholder} style={styles} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  background-color: inherit;
  border: none;
  border-bottom: var(--border-bottom);
  padding-left: var(--input-padding-left);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  bottom: 0;
  top: 0;
  margin: auto 0;
  height: var(--icon-size);
`;

export default IconInput;
