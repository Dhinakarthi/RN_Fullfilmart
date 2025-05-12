import Constants from '../../util/Constants';

const { ACTIONS } = Constants;

const initialState = {
    isSplashLoading: false,
    splashError: '',
}

export const splashState = (state = initialState, action) => {
    switch (action?.type) {
        case ACTIONS.SPLASH_UPDATE_LOADING:
            return { ...state, isSplashLoading: action.status }
        case ACTIONS.SPLASH_ERROR_UPDATE:
            return { ...state, splashError: action?.splashError }
        default:
            state;
    }
}

export const isSplashLoading = state => state.splashState.isSplashLoading;
export const splashError = state => state.splashState.splashError;

