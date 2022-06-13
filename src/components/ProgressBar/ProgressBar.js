import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px',
    '--radius': '4px',
    '--padding': '0px',
  },
  medium: {
    '--height': '12px',
    '--radius': '4px',
    '--padding': '0px',
  },
  large: {
    '--height': '24px',
    '--radius': '8px',
    '--padding': '4px',
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  if (!styles) {
    throw new Error(`unknown size passed to ProgressBarCustom: ${size}`);
  }
  return (
    <>
      <VisuallyHidden>
        <label for="loadinglabel">Loading:</label>
      </VisuallyHidden>
      <StyledProgressBar
        id="loadinglabel"
        max="100"
        value={value}
        size={size}
        style={styles}
      ></StyledProgressBar>
    </>
  );
};

const StyledProgressBar = styled.progress`
  width: 370px;
  height: var(--height);

  &[value] {
    -webkit-appearance: none;
    appearance: none;
  }
  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: var(--radius);
    padding: var(--padding);

    /* trim off corners when progressbar is near full
    overflow: hidden; */
  }
  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: ${(props) =>
      props.value !== 100 ? props.value / 100 + 'px' : '4px'};
    border-bottom-right-radius: ${(props) =>
      props.value !== 100 ? props.value / 100 + 'px' : '4px'};
  }
`;

export default ProgressBar;
