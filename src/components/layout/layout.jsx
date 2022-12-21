import React, { useContext } from "react";
import { Link } from "gatsby";

import { useTheme } from "@emotion/react";
import Context from "../../store/context";

import { Global, css } from "@emotion/react";
//import styled from "@emotion/styled";

import Toggler from "../toggler/toggler";
import CityIcon from "../icons/city";

const Layout = ({ pageTitle, children }) => {
  const { state } = useContext(Context);
  const theme = useTheme();

  const breakpoints = [420, 768, 992, 1160]; // brakepoints
  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  const TopbarWrapper = css`
    min-width: 100vw;
    background: var(--front);
    border-bottom: 1px solid var(--border);
    z-index: 3;
  `;
  const Topbar = css`
    max-width: var(--main-width);
    margin: 0 auto;
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
  `;
  const Projects = css`
    padding-right: 4px;
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 16px;
    line-height: 100%;
    color: var(--heading);
    opacity: ${state.isDark ? "0.8" : "1"};
    font-weight: ${state.isDark ? "400" : "500"};
    ${mq[0]} {
      display: none;
    }
  `;
  const Nav = css`
    display: flex;
    align-items: center;
    gap: 4px;
  `;
  const NavButton = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    margin: 0;
    height: 34px;
    background: var(--back);
    color: var(--accent-color-alt);
    text-decoration: none;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0.2px;
    font-weight: ${state.isDark ? "500" : "400"};
    border: 1px solid var(--border);
    border-radius: 6px;
    &.active {
      background: var(--accent-color-alt);
      color: var(--back);
      font-weight: ${state.isDark ? "500" : "400"};
    }
  `;

  return (
    <main>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            --primary-color: ${theme.primary.default};
            --accent-color: ${theme.primary.accent};
            --accent-color-alt: ${theme.primary.accent_alt};

            --back: ${state.isDark ? theme.dark.back : theme.light.back};
            --front: ${state.isDark ? theme.dark.front : theme.light.front};
            --border: ${state.isDark ? theme.dark.border : theme.light.border};

            --heading: ${state.isDark
              ? theme.dark.heading
              : theme.light.heading};
            --subheading: ${state.isDark
              ? theme.dark.subheading
              : theme.light.subheading};
            --caption: ${state.isDark
              ? theme.dark.caption
              : theme.light.caption};
            --text: ${state.isDark ? theme.dark.text : theme.light.text};

            --shadow: ${state.isDark ? theme.dark.shadow : theme.light.shadow};

            --animation: all 0.15s ease-in-out;
            --main-width: 1290px;
          }

          /* W3C standard сейчас только для Firefox */
          * {
            scrollbar-width: thin;
            scrollbar-color: transparent transparent;
            -webkit-overflow-scrolling: touch;
          }

          /* для Chrome/Edge/Safari */
          *::-webkit-scrollbar {
            display: none;
          }

          body {
            user-select: none;
            background: var(--back);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
            overscroll-behavior-x: none;
            overflow-x: hidden;
          }

          a {
            outline: none;
          }

          .heading {
            font-size: 4vh;
            font-weight: 500;
            color: var(--heading);
          }

          .row {
            max-width: var(--main-width);
            padding: 0 16px;
            margin: 0 auto;
            &.nopading {
              padding: 0;
            }
            &.fullwidth {
              min-width: 100%;
              padding: 0;
              margin: 0;
            }
          }
        `}
      />
      <div
        css={css`
          ${TopbarWrapper}
        `}
      >
        <div
          css={css`
            ${Topbar}
          `}
        >
          <div
            css={css`
              ${Nav}
            `}
          >
            <div
              css={css`
                ${Projects}
              `}
            >
              <CityIcon
                height="16"
                width="16"
                fill="var(--heading)"
              />
              Проекты
            </div>
            <Link
              to="/"
              css={css`
                ${NavButton}
              `}
              activeClassName="active"
            >
              {" "}
              Благовещенск{" "}
            </Link>
            <Link
              to="/svobodny"
              css={css`
                ${NavButton}
              `}
              activeClassName="active"
            >
              {" "}
              Свободный{" "}
            </Link>
          </div>
          <Toggler />
        </div>
      </div>
      {children}
    </main>
  );
};

export default Layout;
