import styled from "styled-components";
import Logo from "../Logo";

function Navbar() {
  return (
    <Wrapper>
      <Logo width={50} height={150} />{" "}
      <div className="title-center">
        <h3>To-Do App</h3>
      </div>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.nav`
  background: #256d85;
  width: 100%;
  padding: 0.2%;
  display: flex;
  flex: 1 1;
  align-items: center;
  
`;
