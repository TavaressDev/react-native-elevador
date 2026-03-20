import { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import { NewsCard } from './components/NewsCard';
import News from './data/News';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);

  const colors = darkMode
    ? {
        background: '#111315',
        panel: '#1b1d20',
        card: '#2a2d31',
        title: '#f5f5f5',
        text: '#e5e7eb',
        muted: '#a1a1aa',
        accent: '#34c759',
      }
    : {
        background: '#f3f4f6',
        panel: '#ffffff',
        card: '#ffffff',
        title: '#111827',
        text: '#1f2937',
        muted: '#6b7280',
        accent: '#34c759',
      };

  if (showWelcome) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
        <View style={[styles.container, styles.welcomeContainer]}>
          <Text style={[styles.welcomeEyebrow, { color: colors.muted }]}>Bem-vindo ao</Text>
          <Text style={[styles.welcomeTitle, { color: colors.title }]}>Elevador</Text>
          <Text style={[styles.welcomeText, { color: colors.text }]}>
            Acompanhe avisos, noticias e atualizacoes do painel em uma interface simples.
          </Text>
          <Pressable
            style={[styles.welcomeButton, { backgroundColor: colors.accent }]}
            onPress={() => setShowWelcome(false)}
          >
            <Text style={styles.welcomeButtonText}>Entrar no painel</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <View style={styles.controlsRow}>
            <Pressable
              style={[styles.backButton, { backgroundColor: colors.panel }]}
              onPress={() => setShowWelcome(true)}
            >
              <Text style={[styles.backButtonText, { color: colors.text }]}>Voltar</Text>
            </Pressable>
          </View>
          <View style={styles.themeBox}>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#d1d5db', true: colors.accent }}
            />
            <Text style={[styles.themeLabel, { color: colors.text }]}>Modo Escuro</Text>
          </View>
        </View>

        <View style={styles.hero}>
          <Text style={[styles.title, { color: colors.title }]}>Atualizacao em</Text>
          <Text style={[styles.title, { color: colors.title }]}>Andamento</Text>
          <Text style={[styles.subtitle, { color: colors.text }]}>
            Status do Painel de Elevador
          </Text>
        </View>

        <ScrollView
          style={styles.list}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        >
          {News.map((item) => (
            <NewsCard
              key={item.id}
              id={item.id}
              title={item.title}
              icon={item.icon}
              description={item.description}
              date={item.date}
              isDark={darkMode}
              backgroundColor={colors.card}
              titleColor={colors.title}
              textColor={colors.text}
              mutedColor={colors.muted}
            />
          ))}
        </ScrollView>

        <View style={styles.loadingBox}>
          <ActivityIndicator size="large" color="#2563eb" />
          <Text style={[styles.loadingText, { color: colors.text }]}>Carregando...</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 12,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 18,
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  themeBox: {
    alignItems: 'center',
  },
  themeLabel: {
    marginTop: 4,
    fontSize: 14,
  },
  hero: {
    alignItems: 'center',
    marginBottom: 18,
  },
  title: {
    fontSize: 27,
    fontWeight: '800',
    lineHeight: 32,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
  loadingBox: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  loadingText: {
    fontSize: 16,
    marginTop: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeEyebrow: {
    fontSize: 18,
    marginBottom: 8,
  },
  welcomeTitle: {
    fontSize: 40,
    fontWeight: '800',
    marginBottom: 12,
  },
  welcomeText: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 28,
    paddingHorizontal: 16,
  },
  welcomeButton: {
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 14,
  },
  welcomeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
