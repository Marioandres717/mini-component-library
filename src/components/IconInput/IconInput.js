import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '24px',
    '--font-size': '14px',
    '--border-bottom': `1px solid ${COLORS.black}`,
    '--icon-top': '6px',
    '--input-padding-left': '12px',
  },
  large: {
    '--height': '36px',
    '--font-size': '18px',
    '--border-bottom': `2px solid ${COLORS.black}`,
    '--icon-top': '9px',
    '--input-padding-left': '20px',
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
  return (
    <Wrapper width={width} style={styles}>
      <IconWrapper
        id={icon}
        size={size === 'small' ? '10.67' : '16'}
        style={styles}
      />
      <VisuallyHiddenWrapper>
        <label for="iconInput">{label}</label>
      </VisuallyHiddenWrapper>
      <Input id="iconInput" placeholder={placeholder} style={styles} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: ${(props) => props.width}px;
  height: var(--height);
  border-bottom: var(--border-bottom);
  color: ${COLORS.gray700};

  &:focus-within {
    outline: 1px dotted #212121;
    outline: 2px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  background-color: inherit;
  border: none;
  padding-left: var(--input-padding-left);
  height: 100%;
  width: 100%;
  font-size: var(--font-size);
  color: inherit;
  font-weight: 700;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: var(--icon-top);
  left: 0;
  margin: auto;
`;

const VisuallyHiddenWrapper = styled(VisuallyHidden)`
  margin: 0;
`;

export default IconInput;
