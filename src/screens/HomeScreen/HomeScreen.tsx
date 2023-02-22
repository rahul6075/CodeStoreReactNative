import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './ScreenStyle';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {Footer, JobCard} from '../../components/index';
import LogoName from '../../assets/images/Gandalf.svg';
import Logo from '../../assets/images/Heading.svg';
const image = {
  uri: 'https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
};

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const talentCardData = [
    {
      id: 1,
      imageUrl: {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0RsIUAHpaK2VUGQw3b_ghGYUdhERr-Udl2MZW7j7H3w&s',
      },
      tag: 'Developers',
    },
    {
      id: 2,
      imageUrl: {
        uri: 'https://cdn.searchenginejournal.com/wp-content/uploads/2021/05/what-is-internet-marketing_-your-guide-to-todays-online-marketing-60bfa40e217e7.png',
      },
      tag: 'Marketing',
    },
    {
      id: 3,
      imageUrl: {
        uri: 'https://img.freepik.com/premium-photo/designer-work_53876-13192.jpg',
      },
      tag: 'Designers',
    },
    {
      id: 4,
      imageUrl: {
        uri: 'https://miro.medium.com/max/1168/1*ES-EmFH7UzFdWWu21sLv5g.png',
      },
      tag: 'Product Managers',
    },
    {
      id: 5,
      imageUrl: {
        uri: 'https://ventsmagazine.com/wp-content/uploads/2019/12/Audit_Committee_Financial_Expert.jpg',
      },
      tag: 'Finance Experts',
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.heroSection}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['rgba(0, 0, 0, 0.79)', 'rgba(0, 0, 0, 0.3)']}
            style={styles.gradient}>
            <View style={styles.heroContainer}>
              <View style={styles.header}>
                <View style={styles.headerLeft}>
                  <Logo />
                  <LogoName width={80} height={43} />
                </View>
                <TouchableOpacity
                  style={styles.headerRight}
                  onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.headerBtn}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.heroContent}>
              <Text style={styles.heroHeading}>
                Find the perfect freelance services for your business
              </Text>
              <Text style={styles.heroDesc}>
                Work with talented people at the most affordable price to get
                the most out of your time and cost
              </Text>
              <TouchableOpacity
                style={styles.heroBtn}
                onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.heroBtnText}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ImageBackground>
        <View style={styles.talentSection}>
          <View>
            <Text style={styles.sectionHeading}>
              Browse Talent by category{' '}
            </Text>
            <Text style={styles.sectiondesc}>
              Discover the many ways in which our clients have embraced the
              benefits of the Gandalf network.{' '}
            </Text>
            <View style={styles.cardsContainer}>
              {talentCardData.map(item => {
                return <JobCard imageUrl={item.imageUrl} tag={item.tag} />;
              })}
            </View>
          </View>
        </View>

        <View style={styles.footerSection}>
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
