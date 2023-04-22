import Header from "../../components/Header";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import useMediaQuery from "@mui/material/useMediaQuery";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const isNonMobile = useMediaQuery("(min-width:600px)")

    return (
    <Box m="20px">
        <Box 
            display="flex" 
            flexDirection={isNonMobile ? "row" : "column"} 
            justifyContent="space-between" 
            alignItems={isNonMobile ? "center" : "left"}
            mb={isNonMobile ? undefined : "20px"}
        >
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            <Button
                sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.gray[100],
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    width: isNonMobile ? undefined : "60%"
                }}
            >
                <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                Download reports
            </Button>
        </Box>

        {/* GRID */}
        <Box 
            display="grid" 
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
        >
            {/* ROW 1 */}
            <Box 
                gridColumn={isNonMobile ? "span 3" : "span 12"}
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <StatBox 
                    title="12,342"
                    subtitle="Emails sent"
                    progress="0.75"
                    increase="+14%"
                    icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
                />
            </Box>
            <Box 
                gridColumn={isNonMobile ? "span 3" : "span 12"}
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <StatBox 
                    title="435,234"
                    subtitle="Sales obtained"
                    progress="0.56"
                    increase="+4%"
                    icon={<PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
                />
            </Box>
            <Box 
                gridColumn={isNonMobile ? "span 3" : "span 12"}
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <StatBox 
                    title="25,986"
                    subtitle="New Clients"
                    progress="0.30"
                    increase="+26%"
                    icon={<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
                />
            </Box>
            <Box 
                gridColumn={isNonMobile ? "span 3" : "span 12"}
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <StatBox 
                    title="1,436,325"
                    subtitle="Traffic Generated"
                    progress="0.80"
                    increase="+43%"
                    icon={<TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
                />
            </Box>

            {/* ROW 2 */}
            {/* LINE CHART */}
            <Box 
                gridColumn={isNonMobile ? "span 8" : "span 12"}
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
            >
                <Box
                    mt="25px"
                    p="0 30px"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box>
                        <Typography variant="h5" color={colors.gray[100]} fontWeight="600">
                            Revenue Generated
                        </Typography>
                        <Typography variant="h3" color={colors.greenAccent[500]} fontWeight="500">
                            $59,342,32
                        </Typography>
                    </Box>

                    <Box>
                        <IconButton>
                            <DownloadOutlinedIcon 
                                sx={{
                                    fontSize: "26px",
                                    color: colors.greenAccent[500]
                                }}
                            />
                        </IconButton>
                    </Box>
                </Box>

                <Box
                    height="250px"
                    ml="-20px"
                >
                    <LineChart isDashboard={true} />
                </Box>
            </Box>

            {/* RECENT TRANSACTIONS */}
            <Box 
                gridColumn={isNonMobile ? "span 4" : "span 12"}
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                overflow="auto"
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    color={colors.gray[100]}
                    p="15px"
                >
                    <Typography color={colors.gray[100]} variant="h5" fontWeight="600">
                        Recent Transactions
                    </Typography>
                </Box>

                {mockTransactions.map((transaction, i) => (
                    <Box
                        key={`${transaction.txID}-${i}`}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        p="15px"
                    >
                        <Box>
                            <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                                {transaction.txId}
                            </Typography>
                            <Typography color={colors.gray[100]}>
                                {transaction.user}
                            </Typography>
                        </Box>
                        <Box color={colors.gray[100]}>
                            {transaction.date}
                        </Box>
                        <Box 
                            backgroundColor={colors.greenAccent[500]}
                            p="5px 10px"
                            borderRadius="4px"
                        >
                            ${transaction.cost}
                        </Box>
                    </Box>
                ))}
            </Box>
            
            {/* ROW 3 */}
            {/* CAMPAIGN */}
            <Box 
                gridColumn={isNonMobile ? "span 4" : "span 12"}
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                p="30px"
            >
                <Typography variant="h5" fontWeight="600">
                    Campaign
                </Typography>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt="25px"
                >
                    <ProgressCircle size="125" progress="0.70" />
                    <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "15px" }}>
                        $48,343 revenue generated
                    </Typography>
                    <Typography>
                        Includes extra misc expenses and costs
                    </Typography>
                </Box>
            </Box>

            {/* SALES QUANTITY */}
            <Box 
                gridColumn={isNonMobile ? "span 4" : "span 12"}
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
            >
                <Typography variant="h5" fontWeight="600" sx={{ p: "30px 30px 0 30px" }}>
                    Sales Quantity
                </Typography>
                <Box
                    height="250px"
                    mt="-20px"
                >
                    <BarChart isDashboard={true} />
                </Box>
            </Box>

            {/* GEO */}
            <Box 
                gridColumn={isNonMobile ? "span 4" : "span 12"}
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                p="30px"
            >
                <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
                    Geography Based Traffic
                </Typography>
                <Box
                    height="200px"
                    border="10px"
                    borderColor={colors.gray[100]}
                >
                    <GeographyChart isDashboard={true} />
                </Box>
            </Box>


        </Box>
    </Box>


    );
}

export default Dashboard;