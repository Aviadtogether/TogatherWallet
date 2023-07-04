import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 339px;
  height: 263px;
  left: 27px;
  top: 106px;

  background: #ffffff;
  border: 2px solid #087d0d;
  border-radius: 21.5789px;
`;

const InfoWrapper = styled.div`
  display: flex;
`;

const TableWrapper = styled.div`
  padding: 10px;
`;

const TableRow = styled.div`
  display: flex;
  margin: 41px 0;
`;

const TableCell = styled.div`
  /* flex: 1;
  padding: 8px; */
`;

const FirstColumn = styled(TableCell)`
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 20px;
  /* or 95% */

  color: #4b778d;
`;

const SecondColumn = styled(TableCell)`
  margin-left: 25px;

  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 17px;
  color: #4b778d;
`;

const LeftColumn = styled.div`
  text-align: center;
`;

function UserCard(props) {
  return (
    <Wrapper>
      <InfoWrapper>
        <TableWrapper>
          <TableRow>
            <FirstColumn>Name</FirstColumn>
            <SecondColumn>Sivan Schwarzmann</SecondColumn>
          </TableRow>
          <TableRow>
            <FirstColumn>Tel. No.</FirstColumn>
            <SecondColumn>+972 545252252</SecondColumn>
          </TableRow>
          <TableRow>
            <FirstColumn>Address</FirstColumn>
            <SecondColumn>Dobnov 54</SecondColumn>
          </TableRow>
          <TableRow>
            <FirstColumn>New York City</FirstColumn>
            <SecondColumn>688309</SecondColumn>
          </TableRow>
        </TableWrapper>
        <LeftColumn>
          <div>image</div>
          <div>QR code</div>
          <div>More</div>
        </LeftColumn>
      </InfoWrapper>
    </Wrapper>
  );
}

export default UserCard;
