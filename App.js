import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <View style={styles.content}>
        <View style={{width: '100%'}}></View>
        <View style={styles.bodyModal}>
          <View
            style={{
              marginTop: 15,
              marginBottom: 15,
              alignItems: 'center',
            }}></View>
          <View style={styles.formPhone}>
            <View style={styles.vietnam}>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg/230px-Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg.png',
                }}
                style={styles.vietnamIcon}
              />
            </View>
            <View>
              <TextInput
                placeholder="Nhập số điện thoại hoặc email"
                style={{width: 280}}></TextInput>
              <TextInput
                placeholder="Mật khẩu"
                style={{
                  width: 200,

                  backgroundColor: '#ffffff',
                  width: '100%',
                  borderRadius: 10,

                  alignItems: 'center',
                }}></TextInput>
            </View>
          </View>
          <TouchableOpacity style={{height: 100, width: 100}}>
            <Text style={{color: '#ffffff'}}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
