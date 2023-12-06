import {
  Card,
  CardContent,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

// Icons
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { useContext, useState } from "react";
import { TasksContext } from "../contexts/TasksContext";

// Modal
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

export default function TodoTask({ task }) {
  //? Hooks //
  const { tasksData, setTasksData } = useContext(TasksContext);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editTask, setEditTask] = useState({
    title: task.title,
    details: task.details,
  });
  //?======Hooks======//

  const handleCheckBtn = () => {
    const newTaskdata = tasksData.map((t) => {
      if (t.id == task.id) {
        if (t.isCompleted) {
          t.isCompleted = false;
        } else {
          t.isCompleted = true;
        }
      }
      return t;
    });
    setTasksData(newTaskdata);

    localStorage.setItem("tasksData", JSON.stringify(newTaskdata))
  };

  // * Delete Button Events //

  const handleShowDeleteModal = () => {
    setShowDeleteModal(true);
  };

  //!==================================================================
  const handleDeleteBtn = () => {
    const newTaskdata = tasksData.filter((t) => {
      if (t.id !== task.id) {
        return t;
      }
    });
    setTasksData(newTaskdata);
    setShowDeleteModal(false);

    localStorage.setItem("tasksData", JSON.stringify(newTaskdata))
  };
  //!==================================================================

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
  };

  //*======Delete Button Events======//

  // * Edit Button Events //

  const handleShowEditModal = () => {
    setShowEditModal(true);
  };

  //!==================================================================
  const handlleEditbtn = () => {
    const editTasks = tasksData.map((t) => {
      if (t.id == task.id) {
        return {...t, title: editTask.title, details: editTask.details};
      } else {
        return t;
      }
    });
    setTasksData(editTasks);
    setShowEditModal(false);

    localStorage.setItem("tasksData", JSON.stringify(editTasks))
  };
  //!==================================================================

  const handleEditModalClose = () => {
    setShowEditModal(false);
  };

  //*======Edit Button Events======//
  return (
    <>
      {/* //! Show Delete Modal*/}
      <Dialog
        open={showDeleteModal}
        onClose={handleDeleteModalClose}
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
          <Button onClick={handleDeleteModalClose}>Cancel</Button>
          <Button
            size="large"
            variant="outlined"
            color="error"
            onClick={handleDeleteBtn}
            autoFocus
          >
            Delete Now
          </Button>
        </DialogActions>
      </Dialog>
      {/* //!======Show Delete Modal======*/}

      {/* //! Show Edit Modal*/}
      <Dialog open={showEditModal} onClose={handleEditModalClose}>
        <DialogTitle>Editing Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={editTask.title}
            onChange={(e) => {
              setEditTask({ ...editTask, title: e.target.value });
            }}
            margin="dense"
            id="Edit"
            label="Task Title"
            fullWidth
            variant="standard"
            color="success"
          />
          <TextField
            autoFocus
            value={editTask.details}
            onChange={(e) => {
              setEditTask({ ...editTask, details: e.target.value });
            }}
            margin="dense"
            id="Details"
            label="Add/Edit Task Details"
            fullWidth
            variant="standard"
            color="success"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditModalClose}>Cancel</Button>
          <Button
            onClick={handlleEditbtn}
            size="large"
            variant="outlined"
            color="success"
          >
            Edit
          </Button>
        </DialogActions>
      </Dialog>
      {/* //!======Show Edit Modal======*/}

      <Card
        className="task-card"
        sx={{ minWidth: 275, marginTop: 2, bgcolor: "#eceff1" }}
      >
        <CardContent sx={{ padding: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              {/* //? Task Informations */}
              <Typography
                variant="h5"
                sx={{ textAlign: "left", marginTop: 0.5 }}
              >
                {task.title}
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "left" }}>
                {task.details}
              </Typography>
              {/* //?======Task Informations======*/}
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
                  backgroundColor: task.isCompleted ? "#c8e6c9" : "white",
                  // color: "#8bc34a",
                  color: task.isCompleted ? "white" : "#8bc34a",
                  border: "solid #8bc34a 2px",
                }}
              >
                <CheckIcon />
              </IconButton>

              <IconButton
                onClick={handleShowEditModal}
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
                onClick={handleShowDeleteModal}
                aria-label="delete"
                sx={{
                  backgroundColor: "white",
                  color: "#b71c1c",
                  border: "solid #b71c1c 2px",
                }}
              >
                <DeleteIcon />
              </IconButton>

              {/* //?======Task Check, Edit And Delete Buttons======*/}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
