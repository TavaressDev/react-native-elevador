import { StyleSheet, Text, View } from 'react-native';

export interface NewsProps {
  id: number;
  icon: string;
  title: string;
  description: string;
  date: string;
  isDark?: boolean;
  backgroundColor?: string;
  titleColor?: string;
  textColor?: string;
  mutedColor?: string;
}

export const NewsCard = ({
  icon,
  title,
  description,
  date,
  isDark,
  backgroundColor = '#2a2d31',
  titleColor = '#f5f5f5',
  textColor = '#e5e7eb',
  mutedColor = '#a1a1aa',
}: NewsProps) => {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor,
          shadowColor: isDark ? '#000000' : '#cbd5e1',
        },
      ]}
    >
      <View style={styles.left}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>{icon}</Text>
        </View>
        <View style={styles.content}>
          <Text style={[styles.title, { color: titleColor }]} numberOfLines={2}>
            {title}
          </Text>
          <Text style={[styles.description, { color: textColor }]} numberOfLines={2}>
            {description}
          </Text>
        </View>
      </View>

      <Text style={[styles.date, { color: mutedColor }]}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  left: {
    flexDirection: 'row',
    flex: 1,
    paddingRight: 12,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#334155',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 22,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    lineHeight: 17,
  },
  date: {
    fontSize: 12,
    marginTop: 2,
  },
});
