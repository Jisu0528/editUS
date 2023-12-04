import styled from "styled-components"

export default function AddressBox ({item}) {
  return (
    <div>
      <Bar />
        <Info>
          <Title>{item.title}</Title>
          <Address href={item.address}>{item.address}</Address>
        </Info>
    </div>
    
  )
}

const Bar = styled.div`
  width: 4px;
  height: 70px;
  background: linear-gradient(160deg, #6A35EE, #9930EF, #5737EE, #795CEB);
  position: absolute;
`;

const Info = styled.div`
  padding: 10px 20px;
  width: 35vw;
  min-width: 580px;
  height: 48px;
  border: solid 1px #868E96;
  border-radius: 0 20px 20px 0;
  position: relative;
`;

const Title = styled.div`
  font-size: 14px; 
`;

const Address = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;