import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {CssBaseline} from '@mui/material';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import './index.css'
import App from './App.tsx'

const theme = createTheme();
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <CssBaseline />
                <App/>
            </QueryClientProvider>
        </ThemeProvider>
    </StrictMode>
)