import {
	Box,
	Typography,
	Stack,
	FormControl,
	FormHelperText,
	TextField,
	TextareaAutosize,
	Select,
	MenuItem,
	Button,
} from "@pankod/refine-mui";

import { FormProps } from "interfaces/common";

import { CustomButton } from "components";

function Form({
	type,
	register,
	onFinish,
	formLoading,
	handleSubmit,
	handleImageChange,
	onFinishHandler,
	propertyImage,
}: FormProps) {
	return (
		<Box>
			<Typography fontSize={25} fontWeight={700} color="#11142d">
				{type} a Property
			</Typography>
			<Box mt="2.5" borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
				<form
					style={{
						marginTop: "20px",
						width: "100%",
						display: "flex",
						flexDirection: "column",
						gap: "20px",
					}}
					onSubmit={handleSubmit(onFinishHandler)}
				>
          <FormControl>
            <FormHelperText sx={{fontWeight="500" , margin:"10px" ,}}>Enter Property Name</FormHelperText>
            <TextField/>
          </FormControl>
        </form>
			</Box>
		</Box>
	);
}
export default Form;
