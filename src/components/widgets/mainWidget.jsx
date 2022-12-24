import React, { useContext } from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
//import { useTheme } from "@emotion/react";
import Context from "../../store/context"
import CountUp from 'react-countup'

const MainWidget = ({ Icon, Color, Count, Title }) => {
  const { state } = useContext(Context);

  //const breakpoints = [420, 768, 992, 1200]; // breakpoints
  //const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  const Wrapper = styled.div`
    min-width: 206.333px;
    max-width: 224px;
    padding: 16px 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    //justify-content: space-between;
    gap: 8px;
    background: var(--front);
    border: 1px solid var(--border);
    border-radius: 12px;
    box-shadow: var(--shadow-elevation-medium);
  `;

  const IconBox = styled.div`
    display: flex;
  `;
  const Counter = styled.span`
    font-size: 22px;
    font-weight: 500;
    color: ${Color};
  `;
  const TitleBox = styled.h3`
    font-size: 14px;
    font-weight: ${state.isDark ? "300" : "400"};
    color: var(--heading);
    opacity: ${state.isDark ? "0.6" : "0.9"};
  `;
  return (
    <Wrapper>
      <div css={css`
        display: flex;
        align-items: center;
        gap: 8px;
      `}>
        <IconBox>{Icon}</IconBox>
        <Counter>
          <CountUp
            start={0}
            end={Count}
            duration={2.75}
            separator=" "
            //decimals={4}
            decimal=""
            prefix=""
            suffix=""
            onEnd={() => console.log('Finish count')}
            onStart={() => console.log('Start count')}
          />
        </Counter>
      </div>
      <TitleBox>{Title}</TitleBox>
    </Wrapper>
  );
};

export default MainWidget;
