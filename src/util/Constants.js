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

    ACTIONS: {
        //Splash Screen Actions
        SPLASH_UPDATE_LOADING: 'SPLASH_UPDATE_LOADING',
        SPLASH_ERROR_UPDATE: 'SPLASH_ERROR_UPDATE',
    }

}