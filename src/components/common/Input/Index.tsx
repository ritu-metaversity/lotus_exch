import { forwardRef } from 'react';
import MuiInput from '@mui/material/Input';
import {
	InputAlert,
	InputContainer,
	StyledInput,
	StyledLabel,
} from './Index.styled';
import { BoxProps } from '@mui/material/Box';
import { InputBaseProps } from '@mui/material/InputBase';

interface MuiInput extends InputBaseProps {
	containerProps?: BoxProps;
	label?: string;
	errorMessage?: string;
}

const Input = forwardRef<React.Ref<any>, MuiInput>((props, ref) => {
	const { containerProps, label, name, error, errorMessage, ...rest } = props;

	return (
		<InputContainer {...containerProps}>
			{label && (
				<StyledLabel className='input__label' htmlFor={name}>
					{label}
				</StyledLabel>
			)}
			<StyledInput id={name} error={error} ref={ref} {...rest} />
			{error && (
				<InputAlert className='input__alert'>{errorMessage}</InputAlert>
			)}
		</InputContainer>
	);
});

export default Input;
