import React, {} from "react"
// import { css } from "@emotion/react"
// import {useTheme} from "@emotion/react"
// import Context from "../store/context"

// import styled from "@emotion/styled"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"

const SvobodnyPage = () => {
  //const { state, /*dispatch*/ } = useContext(Context)

  //const theme = useTheme()
  return (
    <Layout>
      <div className="row">
        Свободный
      </div>
    </Layout>
  )
}

export default SvobodnyPage

export const Head = () => (
  <>
    <Seo title="Свободный" />
  </>
)
