'use strict';
import React, {PureComponent} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Slider,
  Platform,
  Image,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import images from '../../Assets/Images';
import {
  width,
  height,
  heightNavBar,
  isIphoneX,
  isNotchAndroid,
} from '../../Common/styles';

export default class ExampleApp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      type: RNCamera.Constants.Type.front,
    };
  }

  change = (value) => {
    this.setState({value: parseFloat(value)});
  };

  goBack = () => {
    const {goBackScreen} = this.props;
    goBackScreen && goBackScreen();
  };

  changeType = () => {
    const {type} = this.state;
    if (type !== RNCamera.Constants.Type.back) {
      this.setState({type: RNCamera.Constants.Type.back});
    } else {
      this.setState({type: RNCamera.Constants.Type.front});
    }
  };

  takePicture = async () => {
    if (this.camera) {
      const {setChangeImage} = this.props;
      const {type} = this.state;
      const options = {
        quality: 1,
        base64: true,
        width: 640,
        height: 640,
        mirrorImage:
          Platform.OS === 'android'
            ? false
            : type === RNCamera.Constants.Type.front,
      };
      const data = await this.camera.takePictureAsync(options);
      // console.log(data.uri);
      setChangeImage && setChangeImage(data);
      this.goBack();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContain}>
          <TouchableOpacity style={styles.centerItem} onPress={this.goBack}>
            <Image source={images.icBack} style={styles.imgCamera} />
          </TouchableOpacity>
          <Slider
            style={{width: width(40), height: height(5)}}
            minimumTrackTintColor={'#ff85a6'}
            thumbTintColor={'#ff85a6'}
            step={0.03}
            maximumValue={0.3}
            onValueChange={this.change}
            value={this.state.value}
          />
          <TouchableOpacity style={styles.centerItem} onPress={this.changeType}>
            <Image source={images.icSync} style={styles.imgCamera} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageOvalContainer}>
          <View
            style={
              isIphoneX || isNotchAndroid ? styles.imageOvalX : styles.imageOval
            }
          />
        </View>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          zoom={this.state.value}
          style={styles.preview}
          type={this.state.type}
          captureAudio={false}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.log(barcodes);
          }}
        />
        <View style={styles.cameraContainer}>
          <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
            <Image source={images.icCamera1} style={styles.imgTakeCamera} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f1d9e0',
  },
  subContain: {
    width: '100%',
    height: heightNavBar,
    backgroundColor: '#f1d9e0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1000,
    paddingTop: height(2),
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    // backgroundColor: 'red',
    borderRadius: 5,
    zIndex: 1001,
    paddingVertical: height(3),
    paddingHorizontal: width(10),
    alignSelf: 'center',
    // margin: height(3),
  },
  imageOvalContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 999,
  },
  imageOvalX: {
    position: 'relative',
    height: height(46),
    width: width(95),
    top: height(15) + heightNavBar,
    left: width(2.5),
    borderWidth: width(0.5),
    borderRadius: height(25),
    borderColor: '#FF9DB8',
    transform: [{scaleY: 1.6}],
  },
  imageOval: {
    position: 'relative',
    height: height(52),
    width: width(92),
    top: height(11) + heightNavBar,
    left: width(4),
    borderWidth: width(0.5),
    borderRadius: height(25),
    borderColor: '#FF9DB8',
    transform: [{scaleY: 1.4}],
  },
  centerItem: {
    alignItems: 'center',
    width: width(14),
    // backgroundColor: 'yellow',
    paddingHorizontal: width(3),
    paddingVertical: height(2),
  },
  imgCamera: {
    height: width(5),
    width: width(5),
    resizeMode: 'contain',
  },
  imgTakeCamera: {
    height: width(10),
    width: width(10),
    resizeMode: 'contain',
  },
  cameraContainer: {
    flex: 0,
    zIndex: 1001,
    flexDirection: 'row',
    justifyContent: 'center',
    height: height(13),
  },
});
