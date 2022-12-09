/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { Suspense, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import projectsTableData from "layouts/mealinfo/data/projectsTableData";
import { useRecoilValueLoadable } from "recoil";
import { getDayByMeal, getDayByMeal2 } from "states";
import { Box, Button, Container, Skeleton, TextField } from "@mui/material";

function Tables() {
  const mealLoadable = useRecoilValueLoadable(getDayByMeal);
  const mealLoadable2 = useRecoilValueLoadable(getDayByMeal2);

  const { columns: pColumns, rows: pRows } = projectsTableData();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  // eslint-disable-next-line default-case
  switch (mealLoadable.state && mealLoadable2.state) {
    case "hasValue":
      return (
        <DashboardLayout>
          <DashboardNavbar />
          <MDBox pt={6} pb={3}>
            <Grid container spacing={6}>
              <Grid item xs={12} style={{ marginBottom: 100 }}>
                <Card>
                  <MDBox
                    mx={2}
                    mt={-3}
                    py={3}
                    px={2}
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="info"
                  >
                    <MDTypography variant="h6" color="white">
                      이번주 식단 입력
                    </MDTypography>
                  </MDBox>
                  <Container component="main" maxWidth="xs">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        my: 10,
                        alignItems: "center",
                      }}
                    >
                      <MDTypography component="h1" variant="h2" sx={{ mb: 3 }}>
                        월요일
                      </MDTypography>
                      <MDTypography component="h2" variant="h5">
                        중식A
                      </MDTypography>
                      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                          margin="normal"
                          fullWidth
                          id="email"
                          label="중식A"
                          name="email"
                          autoFocus
                        />
                      </Box>
                      <MDTypography component="h2" variant="h5">
                        중식B
                      </MDTypography>
                      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                          margin="normal"
                          fullWidth
                          name="password"
                          label="중식B"
                          id="password"
                        />
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2, color: "white" }}
                        >
                          <MDTypography variant="h10" color="white">
                            식단 저장하기
                          </MDTypography>
                        </Button>
                      </Box>
                    </Box>
                  </Container>
                </Card>
              </Grid>
            </Grid>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Card>
                  <MDBox
                    mx={2}
                    mt={-3}
                    py={3}
                    px={2}
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="info"
                  >
                    <MDTypography variant="h6" color="white">
                      이번주 식단
                    </MDTypography>
                  </MDBox>
                  <MDBox pt={3}>
                    <DataTable
                      table={{ columns: pColumns, rows: pRows }}
                      isSorted={false}
                      entriesPerPage={false}
                      showTotalEntries={false}
                      noEndBorder
                    />
                  </MDBox>
                </Card>
              </Grid>
            </Grid>
          </MDBox>
        </DashboardLayout>
      );
    case "loading":
      return (
        <DashboardLayout>
          <DashboardNavbar />
          <MDBox pt={6} pb={3}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Card>
                  <MDBox
                    mx={2}
                    mt={-3}
                    py={3}
                    px={2}
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="info"
                  >
                    <MDTypography variant="h6" color="white">
                      이번주 식단
                    </MDTypography>
                  </MDBox>
                  <MDBox py={10} px={10}>
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                  </MDBox>
                </Card>
              </Grid>
            </Grid>
          </MDBox>
        </DashboardLayout>
      );
    case "hasError":
      return <div>error</div>;
  }
}

export default Tables;
