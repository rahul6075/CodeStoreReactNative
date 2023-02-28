import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import type {RootState, AppDispatch} from '../store';

const useAppDispatch: () => AppDispatch = useDispatch;
 const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export {useAppDispatch, useAppSelector}