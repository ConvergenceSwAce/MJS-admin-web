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

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { TextField } from "@mui/material";

function Notifications() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  // const [submit, setSubmit] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);

  // const alertContent = (name) => (
  //   <MDTypography variant="body2" color="white">
  //     A simple {name} alert with{" "}
  //     <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
  //       an example link
  //     </MDTypography>
  //     . Give it a click if you like.
  //   </MDTypography>
  // );

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="학식 정상 운영중"
      content="학식이 정상운영중이라 전달했습니다."
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderInfoSB = (
    <MDSnackbar
      icon="notifications"
      title="기타 공지사항"
      content="기타 공지사항을 적을수있는 공간으로 사용할듯"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <MDSnackbar
      color="warning"
      icon="notifications"
      title="학식 조기 매진"
      content="학식이 조기 매진되었다고 전달했습니다."
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2} lineHeight={0}>
                <MDTypography variant="h5">학식 공지</MDTypography>
                <MDTypography variant="button" color="text" fontWeight="regular">
                  식당의 현재 상황에 맞는 공지사항을 적어주세요
                </MDTypography>
              </MDBox>
              <MDBox p={2}>
                <Grid container spacing={2} sx={{ justifyContent: "space-around" }}>
                  <Grid item xs={12} sm={6} lg={6}>
                    <MDButton variant="gradient" color="success" onClick={openSuccessSB} fullWidth>
                      정상 운영
                    </MDButton>
                    {renderSuccessSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6}>
                    <MDButton variant="gradient" color="warning" onClick={openWarningSB} fullWidth>
                      학식 조기 매진
                    </MDButton>
                    {renderWarningSB}
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Card sx={{ padding: 2 }}>
              <TextField
                id="notificationsMSGField"
                label="정상운영과 조기 매진 이외에 전달할 내용을 입력해주세요"
                multiline
                rows={10}
                placeholder="기타 공지사항"
              />
            </Card>
          </Grid>
          <Grid item xs={6} lg={6}>
            <MDButton variant="gradient" color="info" onClick={openInfoSB} fullWidth>
              공지 업로드
            </MDButton>
            {renderInfoSB}
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Notifications;
