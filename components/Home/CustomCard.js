import { View,Text,StyleSheet } from 'react-native' 
import { Card } from 'react-native-paper'
export default function CustomCard({ title, subtitle, time ,date,links,theme}) {
  return ( 
    <Card style={{marginHorizontal:5,marginVertical:5}}>
      <View style={{padding:5}}>
        <View style={{padding:5}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{marginEnd:45}}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.dateView(theme)}>
              <Text style={styles.date(theme)}> {formatDate(date)}</Text>
            </View>
          </View>
          <View style={{marginTop:5}}>
            <Text style={styles.time(theme)}>
              {time}
            </Text>
          </View>
        </View>
        <View style={{padding:5,paddingTop:15}}>
          <Text style={styles.subtitle(theme)}>{subtitle}</Text>
        </View>
      </View>
    </Card>
   );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: (theme) =>({
    fontSize: 12,
    color: theme.colors.onTertiaryContainer,
  }),
  time: (theme) =>({
    fontSize: 10,
    color: theme.colors.onTertiaryContainer,
  }),
  date: (theme) => ({
    fontSize: 10,
    color: theme.colors.onTertiaryContainer,
  }),
  dateView: (theme) => ({
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: theme.colors.tertiaryContainer,
    borderRadius: 10,
    elevation: 3, // For Android
    shadowColor: '#000', // For iOS
    shadowOffset: { width: 0, height: 1 }, // For iOS
    shadowOpacity: 0.25, // For iOS
    shadowRadius: 3.84, // For iOS
  }),

});

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Check if the given date is today
  if (date.toDateString() === today.toDateString()) {
    return 'Today';
  }

  // Check if the given date is tomorrow
  if (date.toDateString() === tomorrow.toDateString()) {
    return 'Tomorrow';
  }

  // Otherwise, format the date
  const options = { month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  // Add the appropriate suffix to the day
  const day = date.getDate();
  let suffix = 'th';
  if (day === 1 || day === 21 || day === 31) {
    suffix = 'st';
  } else if (day === 2 || day === 22) {
    suffix = 'nd';
  } else if (day === 3 || day === 23) {
    suffix = 'rd';
  }

  return `${formattedDate}${suffix}`;
}

