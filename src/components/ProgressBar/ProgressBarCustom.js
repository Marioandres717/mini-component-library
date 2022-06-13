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

const ProgressBarCustom = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`unknown size passed to ProgressBarCustom: ${size}`);
  }
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={styles}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar style={{ ...styles, '--width': value + '%' }} />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* trim off corners when progressbar is near full */
  overflow: hidden;
`;

export default ProgressBarCustom;
