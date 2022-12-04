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
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { getDayByMeal, getDayByMeal2 } from "states";
import { Typography } from "@mui/material";

function Tables() {
  const mealLoadable = useRecoilValueLoadable(getDayByMeal);
  const mealLoadable2 = useRecoilValueLoadable(getDayByMeal2);

  const { columns: pColumns, rows: pRows } = projectsTableData();

  // eslint-disable-next-line default-case
  switch (mealLoadable.state && mealLoadable2.state) {
    case "hasValue":
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
                  <MDBox py={10}>
                    <Typography
                      variant="h6"
                      color="black"
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      Loading...
                    </Typography>
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
