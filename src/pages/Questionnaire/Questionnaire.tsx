import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { PersonalForm } from "../../components/personalForm/PersonalForm";
import { ApplicationBar } from "../../components/applicationBar/ApplicationBar";
import { EscolarForm } from "../../components/escolarForm/escolarForm";
import { CompannyForm } from "../../components/companyForm/companyForm";
import { DrawerApp } from "../../components/Drawer/drawerApp";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../store/store.interfaces";
import { ShowFormInfo } from "../../components/showForm/showForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);
function getSteps() {
  return ["Datos personales", "Datos escolares", "Datos de la dependencia"];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <PersonalForm />;
    case 1:
      return <EscolarForm />;
    case 2:
      return <CompannyForm />;
    default:
      return "Unknown step";
  }
}

export const Questionnaire = () => {
  const [drawer, setDrawer] = useState(false);
  const classes = useStyles();

  const steps = getSteps();
  const activeStep = useSelector((state: RootStoreState) => state.step);
  const isStepOptional = (step: number) => {
    return step === 1;
  };

  return (
    <div className={classes.root}>
      <DrawerApp open={drawer} setOpen={setDrawer} />
      <ApplicationBar openDrawer={drawer} setOpenDrawer={setDrawer} />
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ShowFormInfo />
          </div>
        ) : (
          <div>
            <Container>{getStepContent(activeStep)}</Container>
          </div>
        )}
      </div>
    </div>
  );
};
