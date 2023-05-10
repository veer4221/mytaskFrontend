// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import ListItemText from '@mui/material/ListItemText';
// import ListItem from '@mui/material/ListItem';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import CloseIcon from '@mui/icons-material/Close';
// import Slide from '@mui/material/Slide';
// import { TransitionProps } from '@mui/material/transitions';
import DynamicForm from '../../../components/DynamicForm';
import { AddTimeLineFormJSON } from '../../../FormGenrate/AddTimeLine';

// const Transition = React.forwardRef(function Transition(
//     props: TransitionProps & {
//         children: React.ReactElement;
//     },
//     ref: React.Ref<unknown>,
// ) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function PopUPForm({ setOpen, open }: any) {
//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };
//     return (
//         <div>
//             {/* <Button variant="outlined" onClick={handleClickOpen}>
//                 Open full-screen dialog
//             </Button> */}
//             <Dialog
//                 fullScreen
//                 open={open}
//                 onClose={handleClose}
//                 TransitionComponent={Transition}
//             >
//                 <AppBar sx={{ position: 'relative' }}>
//                     <Toolbar>
//                         <IconButton
//                             edge="start"
//                             color="inherit"
//                             onClick={handleClose}
//                             aria-label="close"
//                         >
//                             <CloseIcon />
//                         </IconButton>
//                         <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
//                             Sound
//                         </Typography>
//                         <Button autoFocus color="inherit" onClick={handleClose}>
//                             save
//                         </Button>
//                     </Toolbar>
//                 </AppBar>
//                 <DynamicForm formData={AddTimeLineFormJSON} isReRender={false} />
//             </Dialog>
//         </div>
//     );
// }


import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

export default function PopUPForm({ setOpen, open }: any) {


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open dialog
            </Button> */}
            <BootstrapDialog
                style={{ background: "blue !importent" }}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                PaperProps={{
                    style: {
                        backgroundColor: '#1f1d2029',
                        // boxShadow: 'none',
                        color: "white"
                    },
                }}
            >
                {/* <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Modal title
                </BootstrapDialogTitle> */}
                <DialogContent dividers


                >


                    <DynamicForm formData={AddTimeLineFormJSON} isReRender={false} />
                </DialogContent>

            </BootstrapDialog>
        </div>
    );
}

// MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation24 MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm 