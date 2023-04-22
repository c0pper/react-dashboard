import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const isNonMobile = useMediaQuery("(min-width:600px)");

    return (
        <Box m="20px">
            <Header title="Geography Chart" subtitle="Simple geography chart" />

            <Box 
                width="100%"
                height={isNonMobile ? "75vh" : "45vh"} 
                border={`1px solid ${colors.gray[100]}`} 
                borderRadius="4px" 
            >
                <GeographyChart />
            </Box>
        </Box>
    )
};

export default Geography;