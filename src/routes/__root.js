import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
export const Route = createRootRoute({
    component: RootComponent,
});
function RootComponent() {
    return (_jsx(React.Fragment, { children: _jsx(Outlet, {}) }));
}
