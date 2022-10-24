import { Box, CssBaseline } from "@mui/material";
import React from "react";
import Router from "../Router";


const App = () => {
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Router />
            </Box>
        </div>
    )
}

export default App;