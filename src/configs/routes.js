import React from "react";
import { LayoutOptions } from "../layouts";

const routeConfig = [
  {
    path: "/",
    exact: true,
    component: React.lazy(() => import("../pages/HomePage")),
    layout: LayoutOptions.MAIN,
  },
  {
    path: "/login",
    exact: true,
    component: React.lazy(() => import("../pages/Login")),
    layout: LayoutOptions.BLANK,
  },
  {
    path: "/register",
    exact: true,
    component: React.lazy(() => import("../pages/Register")),
    layout: LayoutOptions.BLANK,
  },
  {
    path: "/comics/:id",
    exact: true,
    component: React.lazy(() => import("../pages/Comics")),
    layout: LayoutOptions.MAIN,
  },
  {
    path: "/comics/:id/chapters/:chapterId",
    exact: true,
    component: React.lazy(() => import("../pages/Comics/Chapter")),
    layout: LayoutOptions.MAIN,
  },

  //   {
  //     path: "/strategy-exploring/:id",
  //     exact: true,
  //     component: React.lazy(() =>
  //       import("../pages/StrategyExplorer/StrategyExplorerDetail")
  //     ),
  //     layout: LayoutOptions.MAIN,
  //   },
  //   {
  //     path: "/your-strategies",
  //     exact: true,
  //     component: React.lazy(() => import("../pages/YourStrategies")),
  //     layout: LayoutOptions.MAIN,
  //   },
  //   {
  //     path: "/your-strategies/:id",
  //     exact: true,
  //     component: React.lazy(() => import("../pages/YourStrategyDetails")),
  //     layout: LayoutOptions.MAIN,
  //   },
  //   {
  //     path: "/portfolio/:tab",
  //     exact: true,
  //     component: React.lazy(() => import("../pages/Portfolio")),
  //     layout: LayoutOptions.MAIN,
  //   },
  //   {
  //     path: "/feedback",
  //     exact: true,
  //     component: React.lazy(() => import("../pages/Feedback")),
  //     layout: LayoutOptions.MAIN,
  //   },
];

export default routeConfig;
