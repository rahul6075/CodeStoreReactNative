import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

// Svgs Imports
import FaceBookIcon from '../../assets/images/Vector.svg';
import TwitterIcon from '../../assets/images/Vector (1).svg';
import LinkeninIcon from '../../assets/images/Vector (2).svg';
import InstagramIcon from '../../assets/images/Vector (3).svg';

import styles from './FooterStyle';

export default function Footer() {
  const linksData = [
    {
      id: 1,
      name: 'Home',
      borderRight: true,
    },
    {
      id: 2,
      name: 'About Us',
      borderRight: true,
    },
    {
      id: 3,
      name: 'Terms of Service',
      borderRight: true,
    },
    {
      id: 4,
      name: 'Privacy Policy',
      borderRight: true,
    },
    {
      id: 5,
      name: 'FAQ',
      borderRight: false,
    },
  ];

  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerLinks}>
        {linksData.map(link => {
          return (
            <View style={styles.footerLink} key={link.id}>
              <TouchableOpacity style={styles.footerLink}>
                <Text style={styles.linkText}>{link.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View style={styles.footerIcons}>
        <TouchableOpacity style={styles.icons}>
          <FaceBookIcon width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons}>
          <TwitterIcon width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons}>
          <LinkeninIcon width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons}>
          <InstagramIcon width={30} height={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.footerCaption}>
        <Text style={styles.footerCapText}>Copyright 2010 - 2022 Gandalf</Text>
      </View>
    </View>
  );
}
