import { getLCP, getFID, getCLS } from "web-vitals";

const webVitalActions = {};

webVitalActions.googleAnalyticsGetWebVitals = async (key) => {
    getCLS(console.log);
    getFID(console.log);
    getLCP(console.log);
};

webVitalActions.sendDataToAnalytics = async (page) => {
    console.log("sendDataToAnalytics",page);
    function invoke(metric) {
        const body = JSON.stringify({ [metric.name]: metric.value });
        (navigator.sendBeacon &&
            navigator.sendBeacon(
                "https://www.google-analytics.com/analytics.js",
                body
            )) ||
        fetch("https://www.google-analytics.com/analytics.js", {
            body,
            method: "POST",
            keepalive: true,
        });
    }
    getCLS(invoke);
    getFID(invoke);
    getLCP(invoke);
};

webVitalActions.sendDataToGAForWebVitalsReport = async (page) => {
    console.log("sendDataToAnalytics",page);
    function invoke({ name, delta, id }) {
        console.log("sendDataToGAForWebVitalsReport 2");
        window.ga("send", "event", {
            eventCategory: "Web Vitals",
            eventAction: name,
            eventLabel: id,
            eventValue: Math.round(name === "CLS" ? delta * 1000 : delta),
            nonInteraction: true,
            transport: "beacon",
        });
    }
    getCLS(invoke);
    getFID(invoke);
    getLCP(invoke);
};

export { webVitalActions };