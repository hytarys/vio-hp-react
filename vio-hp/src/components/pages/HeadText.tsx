import React from "react";
import '../../html/css/style.css';
import { useRouteData } from "react-static";

const ProfileHeadText:React.FC = () => {
  const {pageTitle} = useRouteData()
  return (
    <h2>{pageTitle}</h2>
  )
}

export default ProfileHeadText