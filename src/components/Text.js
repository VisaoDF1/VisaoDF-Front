import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import { useComponentsContext } from './BlockRender';
const replaceLineBreaks = (text) => {
    const split = text.split(/\r?\n|\r/g);
    return (_jsx(_Fragment, { children: split.map((part, idx) => (_jsxs(React.Fragment, { children: [idx > 0 && _jsx("br", {}), part] }, idx))) }));
};
const Text = ({ text, ...modifiers }) => {
    // Get matching React component from the context
    const { modifiers: modifierComponents, missingModifierTypes } = useComponentsContext();
    const modifierNames = Object.keys(modifiers);
    // Loop on each active modifier to wrap the text in its component
    return modifierNames.reduce((children, modifierName) => {
        // Don't wrap the text if the modifier is disabled
        if (!modifiers[modifierName]) {
            return children;
        }
        const ModifierComponent = modifierComponents[modifierName];
        if (!ModifierComponent) {
            // Only warn once per missing modifier
            if (!missingModifierTypes.includes(modifierName)) {
                console.warn(`[@strapi/block-react-renderer] No component found for modifier "${modifierName}"`);
                missingModifierTypes.push(modifierName);
            }
            // Don't throw an error, just ignore the modifier
            return children;
        }
        return _jsx(ModifierComponent, { children: children });
    }, 
    // By default, return the text without any wrapper to avoid useless nesting
    replaceLineBreaks(text));
};
export { Text };
