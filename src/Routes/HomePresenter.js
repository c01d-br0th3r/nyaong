import React from "react";
import styled from "styled-components";
import { Label, Input, Progress, Button } from "reactstrap";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Name = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 300px;
`;

const Birth = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 5px 0;
`;

const Buttondiv = styled.div`
  * {
    margin-right: 10px;
    margin-bottom: 18px;
  }
`;

const Shadow = styled.div`
  * {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.31), 0 1px 3px rgba(0, 0, 0, 0.38);
  }
  margin-bottom: 10px;
`;

const Explains = styled.div`
  height: 100%;
  display: flex;
  margin: 10px;
  padding: 10px;
  justify-content: center;
`;

const Statusname = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const Exp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 5px;

  button {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`;

const Birthdiv = styled.div`
  display: flex;
  * {
    margin-right: 5px;
    margin-bottom: 8px;
  }

  button {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`;

const Infodiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const Status = styled.div`
  padding: 10px;
  width: 100%;
  * {
    border-radius: 10px;
  }
`;

const Imggrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  * {
    margin: 5px;
  }
`;

const HomePresenter = ({
  isLoading,
  info,
  onChange,
  images,
  idx,
  imgLoading
}) => {
  return (
    <Container>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Label for="selectors"></Label>
          <Input type="select" id="selectors" onChange={onChange}>
            {info.map((i, index) => (
              <option key={i.id} id={i.id} index={index}>
                {i.name}
              </option>
            ))}
          </Input>
          <Explains>
            <Exp>
              <Name>{info[idx].name}</Name>
              <Infodiv>
                <Buttondiv>
                  {info[idx].temperament.split(", ").map((t, index) => (
                    <Button color="secondary" key={index}>
                      {t}
                    </Button>
                  ))}
                </Buttondiv>
                <Birthdiv>
                  <Birth>
                    <Button color="danger">{info[idx].origin}</Button>
                  </Birth>
                  <Birth>
                    <Button color="danger">{info[idx].life_span}</Button>
                  </Birth>
                </Birthdiv>
              </Infodiv>
            </Exp>
            <Status>
              <Name>정보</Name>
              <Statusname>에너지</Statusname>
              <Shadow>
                <Progress
                  animated
                  bar
                  color="danger"
                  value={info[idx].energy_level * 20}
                />
              </Shadow>
              <Statusname>지능</Statusname>
              <Shadow>
                <Progress
                  animated
                  bar
                  color="danger"
                  value={info[idx].intelligence * 20}
                />
              </Shadow>
              <Statusname>발성</Statusname>
              <Shadow>
                <Progress
                  animated
                  bar
                  color="danger"
                  value={info[idx].vocalisation * 20}
                />
              </Shadow>
              <Statusname>낯선 사람과 친해지기</Statusname>
              <Shadow>
                <Progress
                  animated
                  bar
                  color="danger"
                  value={info[idx].stranger_friendly * 20}
                />
              </Shadow>
              <Statusname>멍멍이 친화력</Statusname>
              <Shadow>
                <Progress
                  animated
                  bar
                  color="danger"
                  value={info[idx].dog_friendly * 20}
                />
              </Shadow>
            </Status>
          </Explains>
          <Imggrid>
            {imgLoading ? (
              <div>
                <span>Images Loading...</span>
              </div>
            ) : (
              images.map((img, index) => (
                <Img key={index} src={img} alt={img} />
              ))
            )}
          </Imggrid>
        </div>
      )}
    </Container>
  );
};

export default HomePresenter;
