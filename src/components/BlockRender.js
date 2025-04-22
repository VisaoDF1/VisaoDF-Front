'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { Block } from './Block';
const defaultComponents = {
    blocks: {
        paragraph: (props) => _jsx("p", { children: props.children }),
        quote: (props) => _jsx("blockquote", { children: props.children }),
        code: (props) => (_jsx("pre", { children: _jsx("code", { children: props.plainText }) })),
        heading: ({ level, children }) => {
            switch (level) {
                case 1:
                    return _jsx("h1", { children: children });
                case 2:
                    return _jsx("h2", { children: children });
                case 3:
                    return _jsx("h3", { children: children });
                case 4:
                    return _jsx("h4", { children: children });
                case 5:
                    return _jsx("h5", { children: children });
                case 6:
                    return _jsx("h6", { children: children });
            }
        },
        link: (props) => _jsx("a", { href: props.url, children: props.children }),
        list: (props) => {
            if (props.format === 'ordered') {
                return _jsx("ol", { children: props.children });
            }
            return _jsx("ul", { children: props.children });
        },
        'list-item': (props) => _jsx("li", { children: props.children }),
        image: (props) => _jsx("img", { src: props.image.url, alt: props.image.alternativeText || undefined }),
    },
    modifiers: {
        bold: (props) => _jsx("strong", { children: props.children }),
        italic: (props) => _jsx("em", { children: props.children }),
        underline: (props) => _jsx("u", { children: props.children }),
        strikethrough: (props) => _jsx("del", { children: props.children }),
        code: (props) => _jsx("code", { children: props.children }),
    },
    missingBlockTypes: [],
    missingModifierTypes: [],
};
/* -------------------------------------------------------------------------------------------------
 * Context to pass blocks and inline components to the nested components
 * -----------------------------------------------------------------------------------------------*/
const ComponentsContext = React.createContext(defaultComponents);
// Provide default value so we don't need to import defaultComponents in all tests
const ComponentsProvider = ({ children, value = defaultComponents }) => {
    const memoizedValue = React.useMemo(() => value, [value]);
    return _jsx(ComponentsContext.Provider, { value: memoizedValue, children: children });
};
function useComponentsContext() {
    return React.useContext(ComponentsContext);
}
const BlocksRenderer = (props) => {
    // Merge default blocks with the ones provided by the user
    const blocks = {
        ...defaultComponents.blocks,
        ...props.blocks,
    };
    // Merge default modifiers with the ones provided by the user
    const modifiers = {
        ...defaultComponents.modifiers,
        ...props.modifiers,
    };
    // Use refs because we can mutate them and avoid triggering re-renders
    const missingBlockTypes = React.useRef([]);
    const missingModifierTypes = React.useRef([]);
    return (_jsx(ComponentsProvider, { value: {
            blocks,
            modifiers,
            missingBlockTypes: missingBlockTypes.current,
            missingModifierTypes: missingModifierTypes.current,
        }, children: props?.content?.map((content, index) => (_jsx(Block, { content: content }, index))) }));
};
export { ComponentsProvider, useComponentsContext, BlocksRenderer };
