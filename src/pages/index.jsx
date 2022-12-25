import React, {} from "react";
import { css } from "@emotion/react";
//import {useTheme} from "@emotion/react"
import styled from "@emotion/styled";
//import Context from "../store/context"
import { graphql } from "gatsby";

import Seo from "../components/seo/seo";
import Layout from "../components/layout/layout";
import MainWidget from "../components/widgets/mainWidget";
import AppealsIcon from "../components/icons/appeals";
import ExpectationIcon from "../components/icons/expectation";
import ExecutedIcon from "../components/icons/executed";
import ControllingIcon from "../components/icons/controlling";
import TimeStartIcon from "../components/icons/timeStart";
import TimeCheckIcon from "../components/icons/timeCheck";
import CurrentDate from "../components/date/currentDate";

const IndexPage = ({ data }) => {
  //const { state, /*dispatch*/ } = useContext(Context)

  const WidgetGrid = styled.div`
    padding: 12px 16px;
    display: flex;
    flex-wrap: nowrap;
    gap: 4px;
    overflow-x: auto;
  `;
  const Alarms = {
    red: "#E94029",
    orange: "#FA8F2D",
    green: "#8DAD33",
    default: "var(--accent-color)",
  };

  //const theme = useTheme()
  return (
    <Layout>
      <section className="row nopading">
        <WidgetGrid>
          <MainWidget
            Icon={
              <AppealsIcon
                color={Alarms.red}
                width="20"
              />
            }
            Color={Alarms.red}
            Count={data.allPrismicRequestWidget.nodes[0].data.firstcounter}
            Title={data.allPrismicRequestWidget.nodes[0].data.firstwidget.text}
          />
          <MainWidget
            Icon={
              <ExpectationIcon
                color={Alarms.orange}
                width="20"
              />
            }
            Color={Alarms.orange}
            Count={data.allPrismicRequestWidget.nodes[0].data.secondcounter}
            Title={data.allPrismicRequestWidget.nodes[0].data.secondwidget.text}
          />
          <MainWidget
            Icon={
              <ExecutedIcon
                color={Alarms.green}
                width="20"
              />
            }
            Color={Alarms.green}
            Count={data.allPrismicRequestWidget.nodes[0].data.thirdcounter}
            Title={data.allPrismicRequestWidget.nodes[0].data.thirdwidget.text}
          />
          <MainWidget
            Icon={
              <ControllingIcon
                color={Alarms.default}
                width="20"
              />
            }
            Color={Alarms.default}
            Count={data.allPrismicRequestWidget.nodes[0].data.fourthcounter}
            Title={data.allPrismicRequestWidget.nodes[0].data.fourthwidget.text}
          />
          <MainWidget
            Icon={
              <TimeStartIcon
                color={Alarms.default}
                width="20"
              />
            }
            Color={Alarms.default}
            Count={data.allPrismicRequestWidget.nodes[0].data.fifthcounter}
            Title={data.allPrismicRequestWidget.nodes[0].data.fifthwidget.text}
          />
          <MainWidget
            Icon={
              <TimeCheckIcon
                color={Alarms.default}
                width="20"
              />
            }
            Color={Alarms.default}
            Count={data.allPrismicRequestWidget.nodes[0].data.sixthcounter}
            Title={data.allPrismicRequestWidget.nodes[0].data.sixthwidget.text}
          />
        </WidgetGrid>
      </section>
      <div className="row">
        <span
          css={css`
            font-size: 0.8rem;
            color: var(--text);
          `}
        >
          Актуально на <CurrentDate />
        </span>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allPrismicRequestWidget {
      nodes {
        data {
          firstcounter
          firstwidget {
            text
          }
          secondcounter
          secondwidget {
            text
          }
          thirdcounter
          thirdwidget {
            text
          }
          fourthcounter
          fourthwidget {
            text
          }
          fifthcounter
          fifthwidget {
            text
          }
          sixthcounter
          sixthwidget {
            text
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head = () => (
  <>
    <Seo title="Благовещенск" />
  </>
);
