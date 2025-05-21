import { Text as RNText, TextProps } from "react-native";
import React from "react";

interface CustomeTextProps extends TextProps {
    children: React.ReactNode;
}

export function Text({children, style, ...props}: CustomeTextProps) {
    return (
        <RNText
            style={[ { color: "white"}, style, ]}  {...props} >
            {children}
        </RNText>
    );
}