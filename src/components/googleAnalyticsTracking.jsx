import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function googleAnalyticsTracking() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-WWQH0C6XKG", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}

export default googleAnalyticsTracking;
