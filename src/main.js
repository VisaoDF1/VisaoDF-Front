import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { routeTree } from './routeTree.gen';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Create a new router instance
const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
});
// Criando a instância do QueryClient
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsxs(QueryClientProvider, { client: queryClient, children: [_jsx(RouterProvider, { router: router }), _jsx(Toaster, { richColors: true, position: "top-center" })] }) }));
