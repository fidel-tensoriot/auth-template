import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { Box } from "@mui/material";

export default function Login2({ children }) {
    return (
        <Authenticator>
            {() => (
                <Box>
                    {children}
                </Box>
            )}
        </Authenticator>
    );
}
