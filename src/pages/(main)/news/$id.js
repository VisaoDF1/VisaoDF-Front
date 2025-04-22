import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Card, CardContent, CardMedia, Skeleton, } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { BlocksRenderer } from "@/components/index";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useNews } from "@/hooks/newsByID";
import { toast } from "sonner";
import Icon from "@/assets/img/logo_visao.png";
import { convertToBrazilianDateWithHours } from "@/utils/data";
export const NewsById = () => {
    const { id } = useParams({ strict: false });
    const { newsData, loading } = useNews(id);
    const navigate = useNavigate();
    const [mockContent, setMockContent] = useState([]);
    const [newsTitle, setNewsTitle] = useState("");
    const [newsDescription, setNewsDescription] = useState("");
    const [newsCreatedAt, setNewsCreatedAt] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    useEffect(() => {
        if (newsData) {
            const { data } = newsData;
            const attributes = data.data;
            setMockContent(attributes.content);
            setNewsTitle(attributes.title);
            setNewsDescription(attributes.description);
            setNewsCreatedAt(attributes.createdAt);
            setImageUrl(attributes.cover?.url || "");
            toast.success("Notícia carregada com sucesso!");
        }
    }, [newsData]);
    return (_jsxs("section", { style: {
            background: "#F9F9F9",
            height: "100%",
            width: "100%",
            boxSizing: "border-box",
        }, children: [_jsx(AppBar, { position: "static", color: "default", elevation: 1, sx: { backgroundColor: "#282828" }, children: _jsxs(Toolbar, { sx: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        minHeight: "80px",
                    }, children: [_jsx(Box, { children: _jsx(IconButton, { edge: "start", color: "inherit", onClick: () => console.log("Abrir menu"), children: _jsx(MenuIcon, { sx: { color: "#fff" } }) }) }), _jsx(Box, { sx: { flexGrow: 1, display: "flex", justifyContent: "center" }, children: _jsx("img", { src: Icon, alt: "Logo", onClick: () => navigate({ to: "/" }), style: {
                                    width: 150,
                                    cursor: "pointer",
                                } }) }), _jsx(Box, { children: _jsx(IconButton, { edge: "end", color: "inherit", onClick: () => console.log("Notificação"), children: _jsx(NotificationsIcon, { sx: { color: "#fff" } }) }) })] }) }), _jsx(Box, { sx: { paddingTop: 2 }, children: loading ? (_jsxs(Card, { children: [_jsx(Skeleton, { variant: "rectangular", height: 200 }), _jsxs(CardContent, { children: [_jsx(Skeleton, { variant: "text", width: "40%" }), _jsx(Skeleton, { variant: "text", width: "60%" }), _jsx(Skeleton, { variant: "text", width: "100%" }), _jsx(Skeleton, { variant: "rounded", height: 100, sx: { mt: 2 } })] })] })) : (_jsxs(Card, { sx: {
                        display: "flex",
                        flexDirection: "column",
                        overflowX: "hidden",
                    }, children: [_jsx(CardMedia, { component: "img", height: "300", image: imageUrl, alt: "news", sx: { objectFit: "cover", width: "100%" } }), _jsxs(CardContent, { sx: {
                                px: { xs: 2, sm: 4 }, // padding menor em telas pequenas
                                py: 4,
                                width: '100%',
                                maxWidth: '800px',
                                mx: 'auto', // centraliza horizontalmente
                            }, children: [_jsx(Typography, { variant: "h5", component: "h1", align: "center", fontWeight: "bold", sx: { mb: 2 }, children: newsTitle }), newsDescription && (_jsx(Typography, { variant: "subtitle1", align: "center", color: "textSecondary", sx: { mb: 3 }, children: newsDescription })), _jsxs(Typography, { variant: "body2", color: "textSecondary", align: "center", sx: { mb: 3 }, children: [`Daniela, DF, Brasília`, _jsx("br", {}), `Publicado em ${convertToBrazilianDateWithHours(newsCreatedAt)}`] }), _jsx(Box, { sx: {
                                        px: 4,
                                        "& p": {
                                            textAlign: "justify",
                                            fontSize: "1.1rem",
                                            lineHeight: 1.8,
                                            mb: 3,
                                        },
                                        "& iframe": {
                                            width: "100% !important",
                                            maxWidth: "100%",
                                            aspectRatio: "16/9",
                                            border: "none",
                                        },
                                    }, children: _jsx(BlocksRenderer, { content: mockContent, blocks: {
                                            paragraph: ({ children }) => {
                                                const textContent = children?.map((child) => child.props.text).join("") ?? "";
                                                const isIframe = /<\/?(iframe)/.test(textContent);
                                                if (isIframe) {
                                                    return (_jsx("div", { dangerouslySetInnerHTML: { __html: textContent }, style: { width: "100%" } }));
                                                }
                                                return _jsx("p", { children: children });
                                            },
                                        } }) })] })] })) })] }));
};
