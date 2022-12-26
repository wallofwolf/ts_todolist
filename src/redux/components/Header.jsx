import styled from 'styled-components';

function Header() {
  return (
    <StyledDiv>
      <p>Header</p>
      <p>Jinsan</p>
    </StyledDiv>
  );
}

export default Header;

const StyledDiv = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  font-size: larger;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
`;
