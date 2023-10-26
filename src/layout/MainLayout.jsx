import React from 'react';
import { ThemeProvider } from '@mui/material/styles'
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl'
import { prefixer } from 'stylis'
import { HelmetProvider } from 'react-helmet-async'
import { customTheme } from './theme';
import Grid from '@mui/material/Unstable_Grid2';

const cacheRTL = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
})
const MainLayout = ({ children }) => {
    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={customTheme}>
                <HelmetProvider>
                    <Grid container>

                        {children}

                    </Grid>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MainLayout;