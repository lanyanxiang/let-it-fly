/**
 * Created by Jimmy Lan
 * Creation Date: 2020-10-26
 */

import { Component } from "react";

import { userRoutes } from "./user";
import { adminRoutes } from "./admin";
import { authRoutes } from "./auth";

const routes: RouteEntry[] = [];
routes.concat(userRoutes, adminRoutes, authRoutes);
export { routes };

/**
 * An entry in the route configuration object.
 */
export interface RouteEntry {
  /**
   * Path name to render the component
   */
  path: string;
  /**
   * Use exact route match. Defaults to false.
   */
  exact?: boolean;
  /**
   * Use route protection. Defaults to false.
   */
  isProtected?: boolean;
  /**
   * Url to redirect user if the user is not authenticated.
   * Defaults to undefined, where the redirect url in config object will
   * be used. Ignored if isProtected is false.
   */
  redirectUrl?: string;
  /**
   * The component to render in this route.
   */
  component: Component;
  /**
   * Hide app frame for this path. Defaults to false,
   * where an app frame will be rendered. This attribute
   * can only be set at the top-level, not in children routes.
   */
  hideAppFrame?: boolean;
  /**
   * Children routes for this route. Children routes should
   * only be specified when the rendering of children depends
   * on the rendering of parent.
   */
  children: RouteEntry[];
}
