import { Suspense, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "./configs/routes";
import { Layouts } from "./layouts";
import ThemeProvider from "src/contexts/themeContext";
import AccountProvider from "src/contexts/accountContext";
import ComicProvider from "./contexts/comicContext";
import { SnackbarProvider } from "notistack";

function App() {
  const [account, setAccount] = useState(localStorage.getItem("account"));
  const value = { account, setAccount };

  const filterRoutesAndPathsByLayout = (layout) => {
    const layoutRoutes = [];
    const layoutPaths = [];

    if (routes) {
      routes.forEach((route) => {
        if (!route.redirect && route.layout === layout) {
          layoutRoutes.push(route);
          layoutPaths.push(route.path);
        }
      });
    }

    return { layoutRoutes, layoutPaths };
  };
  const filterRedirectRoutes = () => {
    let redirectRoutes = [];
    if (routes) {
      redirectRoutes = routes.filter(
        (route) => !route.disableInProduction && route.redirect
      );
    }

    return redirectRoutes;
  };

  const redirectRoutes = filterRedirectRoutes();

  return (
    <SnackbarProvider maxSnack={3}>
      <AccountProvider value={value}>
        <ThemeProvider>
          <ComicProvider>
            <Switch>
              {Object.keys(Layouts).map((layout, idx) => {
                const LayoutTag = Layouts[layout];
                const { layoutRoutes, layoutPaths } =
                  filterRoutesAndPathsByLayout(layout);

                return (
                  <Route key={idx} path={[...layoutPaths]}>
                    <LayoutTag>
                      <Switch>
                        {layoutRoutes.map((route) => (
                          <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact === true}
                            render={(props) => {
                              const Component = route.component;
                              return (
                                <Suspense fallback={null}>
                                  <Component {...props} />
                                </Suspense>
                              );
                            }}
                          />
                        ))}
                      </Switch>
                    </LayoutTag>
                  </Route>
                );
              })}
              {redirectRoutes.map((route) => (
                <Redirect
                  from={route.path}
                  key={route.path}
                  to={route.to}
                  exact={route.exact}
                />
              ))}
            </Switch>
          </ComicProvider>
        </ThemeProvider>
      </AccountProvider>
    </SnackbarProvider>
  );
}

export default App;
