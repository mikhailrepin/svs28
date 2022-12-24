import React, {useContext} from "react"
import { css } from "@emotion/react"
import Context from "../../store/context"
import {useTheme} from "@emotion/react"

//import styled from "@emotion/styled"

const Toggler = () => {
  const { state, dispatch } = useContext(Context)
  const theme = useTheme()

  const handleClick = event => {
    dispatch({type:"Toggle_Dark_Mode"});
  };

  const wrapper = css`
      position: relative;
      display: flex;
      background: var(--back);
      border: 1px solid var(--border);
      border-radius: 6px;
      span {
        width: 1px;
        height: 18px;
        background: var(--border);
      }
      button {
        position: absolute;
        width: 64px;
        height: 32px;
        border: none;
        background: transparent;
        color: transparent;
        z-index: 3;
        :hover {
          cursor: pointer;
        }
      }
      `
  const selector = css`
        width: 32px;
        height: 32px;
        position: absolute;
        top: 0;
        transform: translateX(${state.isDark ? "32px" : "0px"});
        border-radius: 5px;
        background: var(--accent-color-alt);
        transition: all 0.3s ease-in-out;
        `

  const iconWrapper = css`
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        z-index: 2;
        & svg {
          width: 18px;
          height: 18px;
        }
        `
    
  const sun = css` // Иконка солнца
        svg {
          fill: ${state.isDark ? theme.primary.accent_alt : theme.light.back};
          transition: all 0.3s ease-in-out;
        }
      `
  const moon = css` // Иконка луны
        svg {
          fill: ${state.isDark ? theme.dark.back : theme.primary.accent_alt};
          transition: all 0.3s ease-in-out;
        }
      `

  return (
    <>
      <div css={css`${wrapper}`}>
        <button onClick={handleClick}>Toggle theme</button>
        <div css={css`${iconWrapper}; ${sun}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1a.66.66 0 0 1 .66.66v.438a.66.66 0 1 1-1.32 0V1.66A.66.66 0 0 1 8 1ZM3.05 3.05a.66.66 0 0 1 .934 0l.309.31a.66.66 0 0 1-.934.933l-.31-.309a.66.66 0 0 1 0-.934Zm9.9 0a.66.66 0 0 1 0 .934l-.309.31a.66.66 0 0 1-.934-.935l.31-.309a.66.66 0 0 1 .933 0ZM3.833 7.976a4.158 4.158 0 1 1 8.317 0 4.158 4.158 0 0 1-8.317 0ZM1 8a.66.66 0 0 1 .66-.66h.438a.66.66 0 1 1 0 1.32H1.66A.66.66 0 0 1 1 8Zm12.242 0a.66.66 0 0 1 .66-.66h.438a.66.66 0 0 1 0 1.32h-.438a.66.66 0 0 1-.66-.66Zm-1.535 3.707a.66.66 0 0 1 .934 0l.31.309a.66.66 0 1 1-.935.934l-.309-.31a.66.66 0 0 1 0-.933Zm-7.414 0a.66.66 0 0 1 0 .934l-.31.309a.66.66 0 1 1-.933-.934l.309-.31a.66.66 0 0 1 .934 0ZM8 13.242a.66.66 0 0 1 .66.66v.438a.66.66 0 0 1-1.32 0v-.438a.66.66 0 0 1 .66-.66Z" clipRule="evenodd"/>
          </svg>
        </div>
        <div css={css`${iconWrapper}; ${moon}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M6.905 2.166a.566.566 0 0 1 .142.564 4.987 4.987 0 0 0 6.223 6.222.566.566 0 0 1 .706.706A6.119 6.119 0 1 1 6.34 2.024c.2-.06.417-.006.564.142Z" clipRule="evenodd"/>
          </svg>
        </div>
        <div css={css`${selector}`}/>
        </div>
    </>
  )
}

export default Toggler