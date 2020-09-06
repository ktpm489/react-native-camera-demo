import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Result from '../../Components/Result';
import LoadImage from '../../Components/LoadImage';
import Header from '../../Container/CoreHeader/index';

class ResultScreen extends React.Component {
  backAction = () => {
    const {changePage, setTransferData} = this.props;
    setTransferData && setTransferData(null);
    changePage && changePage(0);
  };

  render() {
    // console.log('transferData', this.props.transferData);
    return (
      <View>
        <Header title={'AI Skin Analysis'} leftAction={this.backAction} />
        <ScrollView
          style={{
            position: 'relative',
            padding: 10,
            height: '90%',
            paddingBottom: 0,
            backgroundColor: 'transparent',
          }}>
          <View style={{position: 'relative', paddingBottom: 40}}>
            <LoadImage />
            <Result />
            <Result />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ResultScreen;
