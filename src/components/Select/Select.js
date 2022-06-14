import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  // const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        <option value={label}>{label}</option>
        {children}
      </NativeSelect>
      <ChevronDownIcon id="chevron-down" size={20} strokeWidth={2} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};

  &:hover {
    color: revert;
  }
`;

const NativeSelect = styled.select`
  -webkit-appearance: none;
  appearance: none;
  background-color: inherit;
  height: 43px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: inherit;
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  border: none;
`;

const ChevronDownIcon = styled(Icon)`
  position: absolute;
  color: inherit;
  top: 12px;
  right: 18px;
  pointer-events: none;
`;

export default Select;
