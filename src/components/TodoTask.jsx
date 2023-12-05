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
import { useContext, useState } from "react";
import { TasksContext } from "../contexts/TasksContext";

// Modal
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Button} from "@mui/material";

export default function TodoTask({task}) {

  const {tasksData, setTasksData} = useContext(TasksContext)
  const [isOpen, setIsOpen] = useState(false)

  const handleCheckBtn = () => {
    const newTaskdata = tasksData.map((t) => {
      if(t.id == task.id){
         if(t.isCompleted){
          t.isCompleted = false
         }else{
          t.isCompleted = true
         }
      }
      return t;
    })
    setTasksData(newTaskdata)
  }

  const handleShowModal = () => {
    setIsOpen(true)
  }

  const handleDeleteBtn = () => {
    const newTaskdata = tasksData.filter((t) => {
      if(t.id !== task.id){
        return t;
      }
    })
    setTasksData(newTaskdata)
    setIsOpen(false)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* //! Show Delete Modal*/}
        <Dialog
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {" Are You Sure You Want To Delete This Task?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              After deleting this task you can't restore it.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button size="large" variant="outlined" color="error"  onClick={handleDeleteBtn}  autoFocus>
              Delete Now
            </Button>
          </DialogActions>
        </Dialog>
      {/* //! Show Delete Modal*/}

      <Card className="task-card" sx={{ minWidth: 275, marginTop: 2, bgcolor: "#eceff1" }}>
        <CardContent sx={{padding: 4}}>

          <Grid container spacing={2}>

            <Grid item xs={8}>
              {/* //? Task Informations */}
              <Typography variant="h5" sx={{ textAlign: "left" , marginTop: 0.5}}>
                {task.title}
              </Typography>
              {/* <Typography variant="h6" sx={{ textAlign: "left" }}>
                {task.details}
              </Typography> */}
              {/* //? Task Informations */}

            </Grid>

            <Grid
              item
              xs={4}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >

              {/* //? Task Check, Edit And Delete Buttons */}

              <IconButton
                onClick={handleCheckBtn}
                aria-label="check"
                sx={{
                  backgroundColor: task.isCompleted ? "#c8e6c9" : 'white',
                  // color: "#8bc34a",
                  color: task.isCompleted ? "white" : '#8bc34a' ,
                  border: "solid #8bc34a 2px",
                }}
                >
                <CheckIcon />
              </IconButton>

              <IconButton
                aria-label="edit"
                sx={{
                  backgroundColor: "white",
                  color: "#2962ff",
                  border: "solid #2962ff 2px",
                }}
                >
                <EditIcon />
              </IconButton>

              <IconButton
                onClick={handleShowModal}
                aria-label="delete"
                sx={{
                  backgroundColor: "white",
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
