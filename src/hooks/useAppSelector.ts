// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useSelector, type TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '../utils/store/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
