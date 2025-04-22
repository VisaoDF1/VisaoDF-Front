import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Grid, Card, CardContent, CardMedia, Divider, List, ListItem, ListItemText, Skeleton, } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { useJornals } from "@/hooks/journals";
import Icon from "@/assets/img/logo_visao.png";
import { Link, useNavigate } from "@tanstack/react-router";
import { convertToBrazilianDateWithHours } from "@/utils/data";
export const Home = () => {
    const { jornalData, loading } = useJornals(); // Usando loading em vez de isLoading
    const [bannerNews, setBannerNews] = useState({});
    const autores = [
        "Ludmilla",
        "João Caetano",
        "Daniella Ribeiro",
        "Hugo",
    ];
    const devs = ["Walter Moura", "Alison"];
    const navigate = useNavigate();
    useEffect(() => {
        if (jornalData?.success) {
            const tempList = [...jornalData.data.data];
            setBannerNews(tempList.shift());
        }
    }, [jornalData]);
    return (_jsxs(Box, { sx: { bgcolor: "#f3f4f6", minHeight: "100%", width: "100%" }, children: [_jsx(AppBar, { position: "static", color: "default", elevation: 1, sx: { backgroundColor: "#282828" }, children: _jsxs(Toolbar, { sx: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        minHeight: "80px",
                    }, children: [_jsx(Box, { children: _jsx(IconButton, { edge: "start", color: "inherit", onClick: () => console.log("Abrir menu"), children: _jsx(MenuIcon, { sx: { color: "#fff" } }) }) }), _jsx(Box, { sx: { flexGrow: 1, display: "flex", justifyContent: "center" }, children: _jsx("img", { src: Icon, alt: "Logo", onClick: () => navigate("/"), style: {
                                    width: 150,
                                    cursor: "pointer",
                                } }) }), _jsx(Box, { children: _jsx(IconButton, { edge: "end", color: "inherit", onClick: () => console.log("Notificação"), children: _jsx(NotificationsIcon, { sx: { color: "#fff" } }) }) })] }) }), _jsx(Box, { sx: { p: 2 }, children: loading || !bannerNews?.title ? (_jsxs(Card, { children: [_jsx(Skeleton, { variant: "rectangular", height: 200 }), _jsxs(CardContent, { children: [_jsx(Skeleton, { width: "60%" }), _jsx(Skeleton, { width: "80%" }), _jsx(Skeleton, { width: "40%" })] })] })) : (_jsxs(Card, { sx: {
                        maxWidth: "800px", // Limita a largura do banner
                        margin: "0 auto", // Centraliza o banner na tela
                        borderRadius: "2px", // (opcional) se você quiser arredondar as bordas
                    }, children: [_jsx(Link, { style: { cursor: "pointer", color: "#000" }, to: `/news/${bannerNews?.documentId}`, children: _jsx(CardMedia, { component: "img", height: "200", image: bannerNews?.cover?.url, alt: "news" }) }), _jsx(CardContent, { children: _jsx(Link, { style: { cursor: "pointer", color: "#000" }, to: `/news/${bannerNews?.documentId}`, children: _jsxs(Box, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "caption", color: "textSecondary", children: convertToBrazilianDateWithHours(bannerNews?.publishedAt) }), _jsx(Typography, { variant: "h6", children: bannerNews?.title })] }), _jsx(Box, { sx: { maxWidth: "60%", paddingLeft: 2 }, children: _jsx(Typography, { variant: "body2", color: "textSecondary", children: bannerNews?.description }) })] }) }) })] })) }), _jsxs(Box, { sx: {
                    height: "400px",
                    backgroundColor: "#282828",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 2,
                    gap: 4,
                }, children: [_jsx(Box, { sx: { flex: 1, maxWidth: 400 }, children: _jsx("img", { src: bannerNews?.cover?.url, alt: "Not\u00EDcia", style: {
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            } }) }), _jsx(Link, { to: `/news/${bannerNews?.documentId}`, style: { flex: 2, textDecoration: "none", color: "inherit" }, children: _jsxs(Box, { sx: {
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                color: "#fff",
                                paddingY: 2,
                            }, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "h5", fontSize: "18px", fontWeight: "bold", gutterBottom: true, sx: { textAlign: "left", marginBottom: "50px" }, children: bannerNews?.title }), _jsx(Typography, { variant: "body1", sx: {
                                                textAlign: "center",
                                                maxWidth: "90%",
                                                marginX: "auto",
                                            }, children: bannerNews?.description })] }), _jsx(Box, { sx: { alignSelf: "flex-end", marginTop: 20 }, children: _jsx(Typography, { variant: "caption", color: "gray", children: convertToBrazilianDateWithHours(bannerNews?.publishedAt) }) })] }) })] }), _jsxs("section", { style: { display: "flex" }, children: [_jsxs("section", { style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            padding: "1rem",
                            width: "100%",
                        }, children: [_jsx("h1", { children: "\u00DAltimas not\u00EDcias:" }), loading
                                ? Array.from({ length: 3 }).map((_, i) => (_jsxs(Card, { sx: { display: "flex", paddingBottom: 0 }, children: [_jsx(Skeleton, { variant: "rectangular", width: 300, height: 200 }), _jsxs(CardContent, { sx: { flex: 1 }, children: [_jsx(Skeleton, { width: "30%" }), _jsx(Skeleton, { width: "60%" }), _jsx(Skeleton, { width: "80%" }), _jsx(Skeleton, { width: "50%" })] })] }, i)))
                                : jornalData?.data.data.map((item) => (_jsxs(Card, { sx: { display: "flex", paddingBottom: 0 }, children: [_jsx(Link, { style: { cursor: "pointer", color: "#000" }, to: `/news/${item?.documentId}`, children: _jsx(CardMedia, { component: "img", sx: {
                                                    width: "300px",
                                                    height: "200px",
                                                    objectFit: "cover",
                                                }, image: item?.cover?.url, alt: "news" }) }), _jsxs(CardContent, { children: [item?.categories.map((category, index) => (_jsx(Typography, { variant: "caption", color: "var(--pink)", fontWeight: "bold", style: { marginRight: "0.2rem" }, children: index === item.categories.length - 1
                                                        ? category.name
                                                        : `${category.name},` }, index))), _jsxs(Link, { style: { cursor: "pointer", color: "#000" }, to: `/news/${item?.documentId}`, children: [_jsx(Typography, { variant: "subtitle1", fontWeight: "bold", children: item.title }), _jsx(Typography, { variant: "body2", color: "textSecondary", children: item.description }), _jsx(Typography, { variant: "body2", color: "textSecondary", children: convertToBrazilianDateWithHours(item.createdAt) })] })] })] }, item.id)))] }), _jsx(Grid, { sx: { padding: "1rem" }, item: true, xs: 12, md: 6, children: _jsx(Card, { children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "subtitle1", fontWeight: "bold", color: "var(--pink)", children: "Respons\u00E1veis" }), _jsx(List, { dense: true, children: [...autores, ...devs].map((item, index) => (_jsxs(React.Fragment, { children: [_jsx(ListItem, { disablePadding: true, children: _jsx(ListItemText, { primary: _jsxs(_Fragment, { children: [_jsx(Typography, { component: "span", color: "primary", children: index < autores.length
                                                                        ? "Autor"
                                                                        : "Desenvolvedor" }), " ", item] }) }) }), index < autores.length + devs.length - 1 && _jsx(Divider, {})] }, index))) })] }) }) })] })] }));
};
