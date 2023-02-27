import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import styles from './ProfessionalsStyle';
import {Header} from '../../components';
import {SearchIcon, FilterIcon} from '../../assets';
import {ProfessionalCard, FilterModel} from '../../components';
import {professionals} from '../../dummydata';
const ProfessionalsScreen = () => {
  const [visibility, setVisibility] = useState<boolean>(true);
  const openModel = () => {
    setVisibility(true);
  };
  const closeModel = () => {
    setVisibility(false);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerSection}>
            <Header />
          </View>
          <View style={styles.content}>
            <View style={styles.contentHeader}>
              <View style={[styles.contentHeaderIcon, styles.searchIcon]}>
                <SearchIcon width={25} height={25} />
              </View>
              <TextInput
                placeholder="Search Professionals..."
                style={styles.searchInput}
              />
              <Pressable
                onPress={openModel}
                style={[styles.contentHeaderIcon, styles.filterIcon]}>
                <FilterIcon width={25} height={25} />
              </Pressable>
              {visibility && <FilterModel visibility={visibility} closeModel={closeModel} />}
            </View>
            <Text style={styles.contentHeading}>Professionals</Text>
            <View style={styles.contentCards}>
              {professionals.map(item => {
                return (
                  <View style={styles.contentCard} key={item?.id}>
                    <ProfessionalCard
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      price={item.price}
                      designation={item.designation}
                      desc={item.desc}
                      skills={item.skills}
                    />
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
   
  );
};

export default ProfessionalsScreen;
