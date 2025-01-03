import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export default PageTitle;
