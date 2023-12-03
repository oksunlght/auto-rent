import styled from '@emotion/styled';

export const FormTitle = styled.p`
  margin-bottom: 8px;
  margin-left: 18px;

  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`;

export const Form = styled.form`
  position: relative;
  margin-left: 18px;

  display: flex;
  align-items: center;

  font-size: 18px;
  font-weight: 500;
`;

export const LabelFrom = styled.label`
  position: absolute;
  top: 13px;
  left: 24px;

  color: var(--main-text-color);
  line-height: 1.11;
`;

export const InputFrom = styled.input`
  width: 49px;
  height: 20px;
  padding: 14px 41px 14px 72px;

  color: var(--main-text-color);
  font-size: 18px;
  font-weight: 500;
  border: none;
  background-color: var(--drop-color);
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }
`;

export const LabelTo = styled.label`
  position: absolute;
  top: 10px;
  left: 184px;

  color: var(--main-text-color);
`;

export const InputTo = styled.input`
  width: 49px;
  height: 20px;
  padding: 14px 63px 14px 48px;
  margin-right: 18px;

  color: var(--main-text-color);
  font-size: 18px;
  font-weight: 500;
  border: none;
  background-color: var(--drop-color);
  border-radius: 0px 14px 14px 0px;
  border-left: 1px solid rgba(138, 138, 137, 0.2);

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }
`;

export const SearchBtn = styled.button`
  padding: 14px 44px;
  width: 136px;

  color: var(--main-white-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  background-color: var(--accent-color);
  border-radius: 12px;

  cursor: pointer;
`;
