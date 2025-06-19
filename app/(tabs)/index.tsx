import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={28} color="#fff" />
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Coat_of_arms_of_Honduras.svg' }} // Cambia por tu logo
          style={styles.logo}
        />
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={{ marginLeft: 10 }} />
        <TextInput
          placeholder="Ingrese Búsqueda"
          placeholderTextColor="#888"
          style={styles.searchInput}
        />
      </View>

      <ScrollView style={{ flex: 1 }}>
        {/* Notificaciones */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>NOTIFICACIONES</Text>
          <View style={styles.notificationBox}>
            <View style={styles.notificationRow}>
              <Ionicons name="notifications-outline" size={20} color="#fff" />
              <Text style={styles.notificationText}>Recordatorio: reunión a las 10.00</Text>
            </View>
            <View style={styles.notificationRow}>
              <MaterialIcons name="event-note" size={20} color="#fff" />
              <Text style={styles.notificationText}>Evento añadido para el viernes</Text>
            </View>
            <View style={styles.notificationRow}>
              <MaterialIcons name="mail-outline" size={20} color="#fff" />
              <Text style={styles.notificationText}>Nuevo mensaje de Carla</Text>
            </View>
          </View>
        </View>

        {/* Matrícula */}
        <Text style={styles.subtitle}>Matrícula</Text>
        <View style={styles.matriculaBox}>
          <View style={styles.matriculaLeft}>
            <Text style={styles.matriculaTitle}>Matrículas ordinarias{"\n"}(ESTUDIANTES REGULARES) 9no, 8vo semestre</Text>
          </View>
          <View style={styles.matriculaRight}>
            <Text style={styles.matriculaDate}>Lunes 16 de octubre de 2025</Text>
            <Text style={styles.matriculaHour}>08:00 - 12:00</Text>
          </View>
        </View>

        {/* Accesos rápidos */}
        <View style={styles.quickAccessContainer}>
          <TouchableOpacity style={styles.quickAccessBox}>
            <MaterialIcons name="calendar-today" size={36} color="#fff" />
            <Text style={styles.quickAccessText}>Carga horaria</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessBox}>
            <FontAwesome name="pencil" size={36} color="#fff" />
            <Text style={styles.quickAccessText}>Matrícula</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.quickAccessContainer}>
          <TouchableOpacity style={styles.quickAccessBox}>
            <Ionicons name="information-circle-outline" size={36} color="#fff" />
            <Text style={styles.quickAccessText}>Simulador de matrícula</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons name="home" size={28} color="#0080c6" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="menu" size={28} color="#222" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={28} color="#222" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="school-outline" size={28} color="#222" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0080c6',
    paddingTop: 40,
    paddingHorizontal: 15,
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  logo: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#fff' },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    margin: 10,
    borderRadius: 10,
    height: 40,
  },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 16, color: '#222' },
  section: { marginHorizontal: 10, marginTop: 10 },
  sectionTitle: {
    backgroundColor: '#0080c6',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    textAlign: 'center',
  },
  notificationBox: {
    backgroundColor: '#0080c6',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 10,
    marginTop: -5,
    marginBottom: 10,
  },
  notificationRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 2 },
  notificationText: { color: '#fff', marginLeft: 10, fontSize: 15 },
  subtitle: { marginLeft: 15, marginTop: 10, fontWeight: 'bold', fontSize: 16 },
  matriculaBox: {
    flexDirection: 'row',
    backgroundColor: '#0080c6',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    elevation: 2,
  },
  matriculaLeft: { flex: 1, borderRightWidth: 1, borderRightColor: '#fff', paddingRight: 10 },
  matriculaRight: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  matriculaTitle: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  matriculaDate: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
  matriculaHour: { color: '#fff', fontSize: 13 },
  quickAccessContainer: { flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 5 },
  quickAccessBox: {
    backgroundColor: '#0080c6',
    borderRadius: 12,
    width: 150,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    elevation: 2,
  },
  quickAccessText: { color: '#fff', marginTop: 8, fontWeight: 'bold', textAlign: 'center' },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },
});
