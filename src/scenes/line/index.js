import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import useMediaQuery from "@mui/material/useMediaQuery";

const Line = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    return (
        <Box m="20px">
            <Header title="Line Chart" subtitle="Simple line chart" />

            <Box height={isNonMobile ? "75vh" : "45vh"}>
                <LineChart />
            </Box>
        </Box>
    )
};

export default Line;