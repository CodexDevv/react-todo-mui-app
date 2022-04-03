import { React, useState, useContext, useRef } from "react";
import {
  Typography,
  Button,
  Container,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const [category, setCategory] = useState("todos");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title == "") {
      setTitleError(true);
    }

    if (details == "") {
      setDetailsError(true);
    }

    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => navigate("/"));
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a new Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          sx={{
            marginBottom: 2,
            marginTop: 2,
          }}
          label="Note Title"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          sx={{
            marginBottom: 2,
          }}
          label="Details"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        <FormControl
          sx={{
            display: "flex",
          }}
        >
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            sx={{
              marginBottom: 2,
            }}
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
