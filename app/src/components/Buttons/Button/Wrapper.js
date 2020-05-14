import styled from "styled-components";

const margin = {
  default: "5px",
  xs: "5px",
  s: "8px",
  m: "10px",
  l: "20px",
  xl: "50px",
};

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: ${(props) =>
      props.margin && margin[props.margin]
        ? margin[props.margin]
        : margin.default}
    0;
`;

export default Wrapper;
