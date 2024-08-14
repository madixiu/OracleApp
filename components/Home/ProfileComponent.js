import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';
const ProfileComponent = ({navigation}) => {
  const theme = useTheme()
  return (
    <ScrollView style={styles.container(theme)}>
      {/* Profile Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <TouchableOpacity style={styles.item}>
          <FontAwesome name="user" size={20} style={styles.icon(theme)} />
          <Text style={styles.itemText}>Edit Profile</Text>
        </TouchableOpacity>
        <View style={styles.divider(theme)} />
        <TouchableOpacity style={styles.item}>
          <Ionicons name="lock-closed" size={20} style={styles.icon(theme)} />
          <Text style={styles.itemText}>Change Password</Text>
        </TouchableOpacity>
        <View style={styles.divider(theme)} />
        <TouchableOpacity style={styles.item}>
          <MaterialIcons name="subscriptions" size={20} style={styles.icon(theme)} />
          <Text style={styles.itemText}>Manage Subscriptions</Text>
        </TouchableOpacity>
      </View>

      {/* App Settings Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Settings</Text>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="notifications-outline" size={20} style={styles.icon(theme)} />
          <Text style={styles.itemText}>Notifications</Text>
        </TouchableOpacity>
        <View style={styles.divider(theme)} />
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Theme')}>
          <Ionicons name="color-palette-outline" size={20} style={styles.icon(theme)} />
          <Text style={styles.itemText}>Theme</Text>
        </TouchableOpacity>
        <View style={styles.divider(theme)} />
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Language')}>
          <Ionicons name="language-outline" size={20} style={styles.icon(theme)} />
          <Text style={styles.itemText}>Language</Text>
        </TouchableOpacity>
        <View style={styles.divider(theme)} />
        <TouchableOpacity style={styles.item}>
          <MaterialIcons name="sync" size={20} style={styles.icon(theme)} />
          <Text style={styles.itemText}>Data Sync</Text>
        </TouchableOpacity>
        <View style={styles.divider(theme)} />
        <TouchableOpacity style={styles.item}>
          <MaterialIcons name="privacy-tip" size={20} style={styles.icon(theme)} />
          <Text style={styles.itemText}>Privacy Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Support Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="help-circle-outline" size={20} style={styles.icon(theme)} />
          <Text style={styles.itemText}>Help & Support</Text>
        </TouchableOpacity>
        <View style={styles.divider(theme)} />
        <TouchableOpacity style={styles.item}>
          <Ionicons name="chatbubble-outline" size={20} style={styles.icon(theme)} />
          <Text style={styles.itemText}>Feedback</Text>
        </TouchableOpacity>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="information-circle-outline" size={20} style={styles.icon(theme)} />
          <Text style={styles.itemText}>App Version</Text>
        </TouchableOpacity>
        <View style={styles.divider(theme)} />
        <TouchableOpacity style={styles.item}>
          <Ionicons name="document-text-outline" size={20} style={styles.icon(theme)} />
          <Text style={styles.itemText}>Terms of Service</Text>
        </TouchableOpacity>
        <View style={styles.divider(theme)} />
        <TouchableOpacity style={styles.item}>
          <Ionicons name="shield-checkmark-outline" size={20} style={styles.icon(theme)} />
          <Text style={styles.itemText}>Privacy Policy</Text>
        </TouchableOpacity>
        <View style={styles.divider(theme)} />
        <TouchableOpacity style={styles.item}>
          <Ionicons name="ribbon-outline" size={20} style={styles.icon(theme)} />
          <Text style={styles.itemText}>Acknowledgements</Text>
        </TouchableOpacity>
      </View>

      {/* Miscellaneous Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Miscellaneous</Text>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="star-outline" size={20} style={styles.icon(theme)} />
          <Text style={styles.itemText}>Rate Us</Text>
        </TouchableOpacity>
        <View style={styles.divider(theme)} />
        <TouchableOpacity style={styles.item}>
          <Feather name="log-out" size={20} style={styles.icon(theme)} />
          <Text style={styles.itemText}>Log Out</Text>
        </TouchableOpacity>
        <View style={styles.divider(theme)} />
        <TouchableOpacity style={styles.item}>
          <AntDesign name="delete" size={20} style={styles.icon(theme)} />
          <Text style={[styles.itemText, styles.deleteText]}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:(theme) =>({
    flex: 1,
    backgroundColor: theme.colors.background,
    marginBottom:80
  }),
  section: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  icon:(theme)=> ({
    marginRight: 15,
    color:theme.colors.primary
  }),
  itemText: {
    fontSize: 14,
    // fontWeight:'bold'
  },
  divider:(theme) => ({
    height: 1,
    backgroundColor: theme.colors.secondary,
    marginVertical: 5,
  }),
  deleteText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default ProfileComponent;
