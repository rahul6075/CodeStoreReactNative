import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import styles from './NotificationStyle';
import {Header} from '../../components';

interface flatListProps {
  id: number;
  title: string;
  description: string;
}

const Item: React.FC<flatListProps> = ({title, description}) => {
  return (
    <View style={styles.notification}>
      <Text style={styles.heading}>{title}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {description}{' '}
      </Text>
    </View>
  );
};

const NotificationScreen = () => {
  const notificationData = [
    {
      id: 1,
      title: 'Job application recieve',
      description: 'Job application recieve lorem',
    },
    {
      id: 2,
      title: 'Job application recieve',
      description: 'Job application recieve',
    },
    {
      id: 3,
      title: 'Job application recieve',
      description:
        'Job application Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi qui necessitatibus dolore? Consequatur nesciunt enim assumenda asperiores odio quae deserunt, deleniti impedit blanditiis est beatae pariatur ea explicabo omnis!',
    },
    {
      id: 4,
      title: 'Job application recieve',
      description:
        'Job application Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi qui necessitatibus dolore? Consequatur nesciunt enim assumenda asperiores odio quae deserunt, deleniti impedit blanditiis est beatae pariatur ea explicabo omnis!',
    },
    {
      id: 5,
      title: 'Job application recieve',
      description:
        'Job application Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi qui necessitatibus dolore? Consequatur nesciunt enim assumenda asperiores odio quae deserunt, deleniti impedit blanditiis est beatae pariatur ea explicabo omnis!',
    },
    {
      id: 6,
      title: 'Job application recieve',
      description:
        'Job application Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi qui necessitatibus dolore? Consequatur nesciunt enim assumenda asperiores odio quae deserunt, deleniti impedit blanditiis est beatae pariatur ea explicabo omnis!',
    },
    {
      id: 7,
      title: 'Job application recieve',
      description:
        'Job application Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi qui necessitatibus dolore? Consequatur nesciunt enim assumenda asperiores odio quae deserunt, deleniti impedit blanditiis est beatae pariatur ea explicabo omnis!',
    },
    {
      id: 8,
      title: 'Job application recieve',
      description:
        'Job application Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi qui necessitatibus dolore? Consequatur nesciunt enim assumenda asperiores odio quae deserunt, deleniti impedit blanditiis est beatae pariatur ea explicabo omnis!',
    },
    {
      id: 9,
      title: 'Job application recieve',
      description:
        'Job application Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi qui necessitatibus dolore? Consequatur nesciunt enim assumenda asperiores odio quae deserunt, deleniti impedit blanditiis est beatae pariatur ea explicabo omnis!',
    },
  ];

  const wait = (timeout: any) => {
    // Defined the timeout function for testing purpose
    return new Promise((resolve: any) => setTimeout(resolve, timeout));
  };

  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const onRefresh = React.useCallback(() => {
    setIsRefreshing(true);
    wait(2000).then(() => setIsRefreshing(false));
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Header />
        </View>
        <View style={styles.content}>
          <Text style={styles.pageHeading}>Notifications</Text>
          <FlatList
            data={notificationData}
            renderItem={({item}) => (
              <Item
                title={item.title}
                id={item.id}
                description={item.description}
              />
            )}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
