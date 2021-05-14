import styled from '@emotion/styled';

export const Text = styled.p`
  // Typography
  font-family: ${(props) => props.fFamily || ''};
  font-size: ${(props) => props.fSize || ''};
  font-weight: ${(props) => props.fWeight || ''};
  font-style: ${(props) => props.fStyle || ''};
  line-height: ${(props) => props.lHeight || ''};
  letter-spacing: ${(props) => props.lSpacing || ''};
  text-align: ${(props) => props.tAlign || ''};
  text-transform: ${(props) => props.tTransform || ''};
  text-decoration: ${(props) => props.tDecoration || ''};
  position: ${(props) => props.position || ''};
  color: ${(props) => props.color || ''};

  // Box size
  width: ${(props) => props.w || ''};
  height: ${(props) => props.h || ''};

  // Position
  top: ${(props) => props.top || ''};
  right: ${(props) => props.right || ''};
  bottom: ${(props) => props.bottom || ''};
  left: ${(props) => props.left || ''};

  // Margin
  margin-top: ${(props) => props.mt || ''};
  margin-right: ${(props) => props.mr || ''};
  margin-bottom: ${(props) => props.mb || ''};
  margin-left: ${(props) => props.ml || ''};

  // Padding
  padding: ${(props) => props.p || ''};
  padding-top: ${(props) => props.pt || ''};
  padding-right: ${(props) => props.pr || ''};
  padding-bottom: ${(props) => props.pb || ''};
  padding-left: ${(props) => props.pl || ''};

  ${(props) => {
    if (props.tt1) {
      return `
    font-size: 36px;
    line-height: 45px;
  `;
    }
  }}

  ${(props) => {
    if (props.tt2) {
      return `
    font-size: 30px;
    line-height: 45px;
  `;
    }
  }}

${(props) => {
    if (props.tt3) {
      return `
    font-size: 24px;
    line-height: 45px;
  `;
    }
  }}

${(props) => {
    if (props.tt4) {
      return `
    font-size: 18px;
    line-height: 45px;
  `;
    }
  }}

${(props) => {
    if (props.pp1) {
      return `
    font-size: 16px;
    line-height: 24px;
  `;
    }
  }}

${(props) => {
    if (props.pp2) {
      return `
    font-size: 14px;
    line-height: 21px;
  `;
    }
  }}

${(props) => {
    if (props.pp3) {
      return `
    font-size: 12px;
    line-height: 18px;
  `;
    }
  }}

${(props) => {
    if (props.pp4) {
      return `
    font-size: 10px;
    line-height: 15px;
  `;
    }
  }}
`;
