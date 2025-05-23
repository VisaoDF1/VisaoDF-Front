/* eslint-disable */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.
import { createFileRoute } from '@tanstack/react-router';
// Import Routes
import { Route as rootRoute } from './routes/__root';
import { Route as DashboardIndexImport } from './routes/dashboard/index';
import { Route as NewsIdImport } from './routes/news/$id';
import { Route as DashboardAuthenticatedRouteImport } from './routes/dashboard/_authenticated/route';
import { Route as authAuthRouteImport } from './routes/(auth)/auth/route';
import { Route as authAuthLoginImport } from './routes/(auth)/auth/login';
// Create Virtual Routes
const DashboardImport = createFileRoute('/dashboard')();
const IndexLazyImport = createFileRoute('/')();
const DashboardAuthenticatedNewsLazyImport = createFileRoute('/dashboard/_authenticated/news')();
const DashboardAuthenticatedHomeLazyImport = createFileRoute('/dashboard/_authenticated/home')();
// Create/Update Routes
const DashboardRoute = DashboardImport.update({
    id: '/dashboard',
    path: '/dashboard',
    getParentRoute: () => rootRoute,
});
const IndexLazyRoute = IndexLazyImport.update({
    id: '/',
    path: '/',
    getParentRoute: () => rootRoute,
}).lazy(() => import('./routes/index.lazy').then((d) => d.Route));
const DashboardIndexRoute = DashboardIndexImport.update({
    id: '/',
    path: '/',
    getParentRoute: () => DashboardRoute,
});
const NewsIdRoute = NewsIdImport.update({
    id: '/news/$id',
    path: '/news/$id',
    getParentRoute: () => rootRoute,
});
const DashboardAuthenticatedRouteRoute = DashboardAuthenticatedRouteImport.update({
    id: '/_authenticated',
    getParentRoute: () => DashboardRoute,
});
const authAuthRouteRoute = authAuthRouteImport.update({
    id: '/(auth)/auth',
    path: '/auth',
    getParentRoute: () => rootRoute,
});
const DashboardAuthenticatedNewsLazyRoute = DashboardAuthenticatedNewsLazyImport.update({
    id: '/news',
    path: '/news',
    getParentRoute: () => DashboardAuthenticatedRouteRoute,
}).lazy(() => import('./routes/dashboard/_authenticated/news.lazy').then((d) => d.Route));
const DashboardAuthenticatedHomeLazyRoute = DashboardAuthenticatedHomeLazyImport.update({
    id: '/home',
    path: '/home',
    getParentRoute: () => DashboardAuthenticatedRouteRoute,
}).lazy(() => import('./routes/dashboard/_authenticated/home.lazy').then((d) => d.Route));
const authAuthLoginRoute = authAuthLoginImport.update({
    id: '/login',
    path: '/login',
    getParentRoute: () => authAuthRouteRoute,
});
const authAuthRouteRouteChildren = {
    authAuthLoginRoute: authAuthLoginRoute,
};
const authAuthRouteRouteWithChildren = authAuthRouteRoute._addFileChildren(authAuthRouteRouteChildren);
const DashboardAuthenticatedRouteRouteChildren = {
    DashboardAuthenticatedHomeLazyRoute: DashboardAuthenticatedHomeLazyRoute,
    DashboardAuthenticatedNewsLazyRoute: DashboardAuthenticatedNewsLazyRoute,
};
const DashboardAuthenticatedRouteRouteWithChildren = DashboardAuthenticatedRouteRoute._addFileChildren(DashboardAuthenticatedRouteRouteChildren);
const DashboardRouteChildren = {
    DashboardAuthenticatedRouteRoute: DashboardAuthenticatedRouteRouteWithChildren,
    DashboardIndexRoute: DashboardIndexRoute,
};
const DashboardRouteWithChildren = DashboardRoute._addFileChildren(DashboardRouteChildren);
const rootRouteChildren = {
    IndexLazyRoute: IndexLazyRoute,
    authAuthRouteRoute: authAuthRouteRouteWithChildren,
    DashboardRoute: DashboardRouteWithChildren,
    NewsIdRoute: NewsIdRoute,
};
export const routeTree = rootRoute
    ._addFileChildren(rootRouteChildren)
    ._addFileTypes();
/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/(auth)/auth",
        "/dashboard",
        "/news/$id"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/(auth)/auth": {
      "filePath": "(auth)/auth/route.tsx",
      "children": [
        "/(auth)/auth/login"
      ]
    },
    "/dashboard": {
      "filePath": "dashboard/_authenticated",
      "children": [
        "/dashboard/_authenticated",
        "/dashboard/"
      ]
    },
    "/dashboard/_authenticated": {
      "filePath": "dashboard/_authenticated/route.tsx",
      "parent": "/dashboard",
      "children": [
        "/dashboard/_authenticated/home",
        "/dashboard/_authenticated/news"
      ]
    },
    "/news/$id": {
      "filePath": "news/$id.tsx"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx",
      "parent": "/dashboard"
    },
    "/(auth)/auth/login": {
      "filePath": "(auth)/auth/login.tsx",
      "parent": "/(auth)/auth"
    },
    "/dashboard/_authenticated/home": {
      "filePath": "dashboard/_authenticated/home.lazy.tsx",
      "parent": "/dashboard/_authenticated"
    },
    "/dashboard/_authenticated/news": {
      "filePath": "dashboard/_authenticated/news.lazy.tsx",
      "parent": "/dashboard/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
