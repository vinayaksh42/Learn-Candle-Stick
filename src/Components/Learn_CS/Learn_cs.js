import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import list from "./data";
import "./Learn_cs.css";
function Module() {
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="learnList">
      <h1 className="learnHeading">Learn Module</h1>
      {list.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === `panel${item.id}`}
          onChange={handleChange(`panel${item.id}`)}
        >
          <AccordionSummary className="Accordian">
            <div className="learnList__item">
              <Typography>{item.name}</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="learnList__item">
              <li>
                <Link to={`/quiz/${item.id}`}>{item.quiz}</Link>
              </li>
              <li>
                <Link to={`/learn/${item.id}`}>{item.lm}</Link>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default Module;
