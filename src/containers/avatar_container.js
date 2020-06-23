import React from "react";
import SplashPageComponent from "../components/splash_page_component";
import AboutComponent from "../components/about_component";

class AvatarContainer extends React.Component {
    render() {
        return (
            <div>
            <SplashPageComponent/>
            <AboutComponent/>
            </div>
        )
    }
}

export default AvatarContainer