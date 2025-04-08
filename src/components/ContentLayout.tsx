import React, {JSX} from "react";
import {Paper, Divider, Typography} from "@mui/material";

interface ContentLayoutProps {
    title: string,
    children: React.ReactNode,
}

export default function ContentLayout(props: ContentLayoutProps): JSX.Element {
    return (
        <Paper elevation={3} sx={{width: "100%", p: 3}}>
            <Typography variant="h6" gutterBottom>
                {props.title}
            </Typography>
            <Divider sx={{mb: 2}}/>
            {props.children}
        </Paper>
    );
}