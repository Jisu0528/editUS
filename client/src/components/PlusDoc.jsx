import styled from "styled-components"
import PlusIcon from "../assets/plus.png";

const PlusDoc = () => {
  return (
    <Wrapper>
      <Plus src={PlusIcon} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border: 2px dashed #070D17;
  background-color: transparent;
  background-clip: padding-box, border-box;
  background-image: linear-gradient(#070D17, #070D17), linear-gradient(160deg, #6A35EE, #9930EF, #5737EE, #795CEB);
  border-radius: 20px;
`;

const Plus = styled.img`

`;


export default PlusDoc;