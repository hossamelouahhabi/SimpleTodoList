import {
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

// Icons
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

export default function TodoTask() {
  return (
    <>
      <Card className="task-card" sx={{ minWidth: 275, marginTop: 5, bgcolor: "#eceff1" }}>
        <CardContent sx={{padding: 4}}>

          <Grid container spacing={2}>

            <Grid xs={8}>
              {/* //? Task Informations */}
              <Typography variant="h5" sx={{ textAlign: "left" }}>
                first task
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "left" }}>
                first task deatails
              </Typography>
              {/* //? Task Informations */}

            </Grid>

            <Grid
              xs={4}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >

              {/* //? Task Check, Edit And Delete Buttons */}
              <IconButton
                aria-label="check"
                sx={{
                  color: "#8bc34a",
                  border: "solid #8bc34a 2px",
                }}
                >
                <CheckIcon />
              </IconButton>
              <IconButton
                aria-label="edit"
                sx={{
                  color: "#2962ff",
                  border: "solid #2962ff 2px",
                }}
                >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                sx={{
                  color: "#b71c1c",
                  border: "solid #b71c1c 2px",
                }}
              >
                <DeleteIcon />
              </IconButton>
              {/* //? Task Check, Edit And Delete Buttons */}
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
