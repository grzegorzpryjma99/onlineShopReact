import React, {useEffect} from "react";
import {webVitalActions} from "../../utils/google-analytics/google-analytics-get-web-vitals";
import {googleAnalyticsActions} from "../../utils/google-analytics/google-analytics-init";
const newsPlaceholder = process.env.PUBLIC_URL + "/newsPhoto.png";

const LearnMoreTemplate = () => {

    useEffect(() => {
        googleAnalyticsActions.initGoogleAnalytics("prj_lFc4Fj669YRTjIwwE5UqwmY1m6W7");
        webVitalActions.googleAnalyticsGetWebVitals("about");
        webVitalActions.sendDataToAnalytics("about");
        webVitalActions.sendDataToGAForWebVitalsReport("about");
    }, []);

    return <div className='products-list-template-container'>
        <h2 className='title-h2'>Clean and fragrant soy wax</h2>
        <p className='description'>Made for your home and for your wellness</p>
        <div className='learn-more-element-wrapper'>
            <div>
                <div>
                    <h2 className='h2-title'>Clean and fragrant soy wax</h2>
                    <span className='subline'>Made for your home and for your wellness</span>
                </div>
                <p className='learn-more-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
                <img src={newsPlaceholder} alt='zdjecie informacyjne'/>
            </div>
        </div>
        <div className='learn-more-element-wrapper'>
            <div>
                <img src={newsPlaceholder} alt='zdjecie informacyjne'/>
            </div>
            <div>
                <div>
                    <h2 className='h2-title'>Clean and fragrant soy wax</h2>
                    <span className='subline'>Made for your home and for your wellness</span>
                </div>
                <p className='learn-more-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        <div className='learn-more-element-wrapper'>
            <div>
                <div>
                    <h2 className='h2-title'>Clean and fragrant soy wax</h2>
                    <span className='subline'>Made for your home and for your wellness</span>
                </div>
                <p className='learn-more-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
                <img src={newsPlaceholder} alt='zdjecie informacyjne'/>
            </div>
        </div>
    </div>
}

export default LearnMoreTemplate;