import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import useMediaQuery from "@mui/material/useMediaQuery";

const Bar = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    
    return (
        <Box m="20px">
            <Header title="Bar Chart" subtitle="Simple bar chart" />

            <Box height={isNonMobile ? "75vh" : "45vh"}>
                <BarChart />
            </Box>
        </Box>
    )
};

export default Bar;