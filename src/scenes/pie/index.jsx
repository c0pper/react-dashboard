import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import useMediaQuery from "@mui/material/useMediaQuery";

const Pie = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    return (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Simple pie chart" />

            <Box height={isNonMobile ? "75vh" : "45vh"}>
                <PieChart />
            </Box>
        </Box>
    )
};

export default Pie;