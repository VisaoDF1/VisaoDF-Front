import { createElement as _createElement } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import { useComponentsContext } from './BlockRender';
import { Text } from './Text';
const voidTypes = ['image'];
/**
 * Add props that are specific to a block type, and not present in that node type
 */
const augmentProps = (content) => {
    const { children: childrenNodes, type, ...props } = content;
    if (type === 'code') {
        // Builds a plain text string from an array of nodes, regardless of links or modifiers
        const getPlainText = (children) => {
            return children.reduce((currentPlainText, node) => {
                if (node.type === 'text') {
                    return currentPlainText.concat(node.text);
                }
                if (node.type === 'link') {
                    return currentPlainText.concat(getPlainText(node.children));
                }
                return currentPlainText;
            }, '');
        };
        return {
            ...props,
            plainText: getPlainText(content.children),
        };
    }
    return props;
};
const Block = ({ content }) => {
    const { children: childrenNodes, type, ...props } = content;
    // Get matching React component from the context
    const { blocks, missingBlockTypes } = useComponentsContext();
    const BlockComponent = blocks[type];
    if (!BlockComponent) {
        // Only warn once per missing block
        if (!missingBlockTypes.includes(type)) {
            console.warn(`[@strapi/block-react-renderer] No component found for block type "${type}"`);
            missingBlockTypes.push(type);
        }
        // Don't throw an error, just ignore the block
        return null;
    }
    // Handle void types separately as they should not render children
    if (voidTypes.includes(type)) {
        return _jsx(BlockComponent, { ...props });
    }
    // Handle empty paragraphs separately as they should render a <br> tag
    if (type === 'paragraph' &&
        childrenNodes.length === 1 &&
        childrenNodes[0].type === 'text' &&
        childrenNodes[0].text === '') {
        return _jsx("br", {});
    }
    const augmentedProps = augmentProps(content);
    return (_jsx(BlockComponent, { ...augmentedProps, children: childrenNodes.map((childNode, index) => {
            if (childNode.type === 'text') {
                const { type: _type, ...childNodeProps } = childNode;
                // TODO use node as key with WeakMap
                return _createElement(Text, { ...childNodeProps, key: index });
            }
            // TODO use node as key with WeakMap
            return _jsx(Block, { content: childNode }, index);
        }) }));
};
export { Block };
