const { Dimensions, Platform, PixelRatio } = require("react-native");
const { default: DeviceInfo } = require("react-native-device-info");

const deviceWidth = Dimensions.get('window').width;
const scale = deviceWidth / 320;

const normalize = (size) => {
    const newSize = size * scale;
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}

module.exports = {
    APP_NAME: DeviceInfo.getApplicationName(),

    PRIMARY_IMAGE: {
        APP_LOGO: require('../assets/Images/APP_LOGO.jpg'),
    },

    FONT_FAMILY: 'OpenSans',

    FONT_SIZE: {
        XXXXL: normalize(33),
        XXXL: normalize(21),
        XXL: normalize(18),
        XL: normalize(16),
        L: normalize(14),
        ML: normalize(12.5),
        M: normalize(11),
        SM: normalize(9.5),
        S: normalize(8),
        XS: normalize(7),
        XXS: normalize(6.5),
    },

    COLOR: {
        THEME_COLOR: '#8cbc54',
        THEME_COLOR_2: '#E0EACD',
        THEME_COLOR_3: '#f1f7e7',

        FONT_COLOR: '#000000',
        FONT_COLOR_HINT: '#939393',
        FONT_HINT: '#536765',
        FONT_OPPS_COLOR: '#F3F3F4',

        BLACK_COLOR: '#000000',
        WHITE_COLOR: '#FFFFFF',

        SCREEN_BG: '#F2F2F2',
        HIGHLIGHT_03: '#1B30F9',
        SPINNER_COLOR: '#FFFFFF',
        ERROR_COLOR: '#FF0000',

        ORANGE_COLOR: '#FFA500',
        BLUE_COLOR: '#007BFF',
        GREEN_COLOR: '#28A745',
        DARK_GREEN_COLOR: '#20C997',
        GREY_COLOR: '#6C757D',
        RED_COLOR: '#DC3545',

    },

    ACTIONS: {
        //Splash Screen Actions
        SPLASH_UPDATE_LOADING: 'SPLASH_UPDATE_LOADING',
        SPLASH_ERROR_UPDATE: 'SPLASH_ERROR_UPDATE',
    }

}