import { View, Text, StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import JailMonkey from 'jail-monkey';
import { isSplashLoading, splashError } from "../redux/reducers/SplashReducer";
import { useEffect } from "react";
import Constants from "../util/Constants";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Spinner from "react-native-spinkit";
import StringFile from '../util/StringFile';


const SplashScreen = () => {
    const dispatch = useDispatch();
    const isJailBroken = JailMonkey.isJailBroken();
    const SplashError = useSelector(splashError);
    const SplashLoading = useSelector(isSplashLoading);

    useEffect(() => {
        if (!isJailBroken) {

        }
    }, []);

    const renderActivityIndicator = () => {
        if (SplashLoading) {
            return (
                <View style={{ justifyContent: 'center', alignSelf: 'center', marginTop: hp('10%') }}>
                    <Spinner
                        isVisible={true}
                        size={60}
                        type={'ChasingDots'}
                        color={Constants.COLOR.THEME_COLOR}
                    />
                </View>
            )
        }
        else if(true){
            return (
                <View style={styles.rootaccess}>
                    <Text style={styles.rootaccessone}>
                        {StringFile.MESSAGE.STRING_ROOT_ACCESS_WARNING}
                    </Text>
                    <View style={{ height: hp('5%') }} />
                </View>
            )
        }
    }


    return (
        <View style={styles.container}>
            <Image
                style={styles.appLogoStyle}
                source={Constants.PRIMARY_IMAGE.APP_LOGO}
                resizeMode='contain'
            />
            <Image
                style={styles.bannerStyle}
                source={require('../assets/GIF/home_delivery.gif')}
                resizeMode='contain'
            />
            {renderActivityIndicator()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constants.COLOR.WHITE_COLOR,
        alignItems: 'center',
    },

    appLogoStyle: {
        height: hp('10%'),
        width: wp('65%'),
        marginTop: hp('15%'),
        justifyContent: 'center',
    },

    bannerStyle: {
        marginTop: hp('12%'),
        height: hp('30%'),
        width: wp('75%'),
    },

    rootaccess: {
        paddingTop: hp('10%'),
        paddingHorizontal: wp('5%'),
        alignItems: 'center',
    },

    rootaccessone: {
        textAlign: 'center',
        fontSize: Constants.FONT_SIZE.M,
        fontFamily: Constants.FONT_FAMILY.FONT_REGULAR,
        color: Constants.COLOR.FONT_OPPS_COLOR,
    },
});

export default SplashScreen;