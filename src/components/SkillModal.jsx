import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function SkillModal({ open, handleClose, skill }) {
	if (skill === undefined) {
		return null;
	}

	return (
		<Dialog
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-describedby="alert-dialog-slide-description">
			{/* <DialogTitle>{skill.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <ul>
                {
                    skill.modal.map((x, i) => <li key={i}>{x}</li>)
                }
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions> */}
			<div className="p-4">
				<div className="flex items-center gap-2">
					<img className="h-10" src={skill?.logo} alt="..." />
					<h6>{skill?.name}</h6>
				</div>
                <br />
                <ul className="list-disc px-4 font-Poppins sm:text-sm text-xs !leading-7">
                    {
                        skill.modal.map((x, i) => <li key={i}>{x}</li>)
                    }
                </ul>
                <br />
                <div className="flex justify-end">
                    <button onClick={handleClose} className="btn">
                        Close
                    </button>
                </div>
			</div>
		</Dialog>
	);
}
