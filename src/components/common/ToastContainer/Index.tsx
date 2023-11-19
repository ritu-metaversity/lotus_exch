import { Toaster } from 'react-hot-toast';

const ToastContainer = () => {
	return <Toaster position='bottom-left' toastOptions={{ duration: 4500 }} />;
};

export default ToastContainer;
