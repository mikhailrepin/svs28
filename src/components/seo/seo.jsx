import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <title>
      {data.site.siteMetadata.title} – {title} |{" "}
      {data.site.siteMetadata.description}
    </title>
  );
};

export default Seo;
