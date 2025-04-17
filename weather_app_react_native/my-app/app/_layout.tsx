import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ImageBackground,
} from 'react-native';
import axios from 'axios';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<{
    name: string;
    main: { temp: number; humidity: number };
    weather: { description: string }[];
  } | null>(null);
  const API_KEY = 'd63b33270ad1c13f90539348de9fe977'; // Замените на ваш ключ от OpenWeatherMap

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      Alert.alert('Ошибка', 'Город не найден или произошла ошибка');
    }
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1504608521893-657bb72637e0',
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Погода</Text>
        <TextInput
          style={styles.input}
          placeholder="Введите город"
          placeholderTextColor="#ccc"
          value={city}
          onChangeText={setCity}
        />
        <Button title="Узнать погоду" onPress={getWeather} color="#007AFF" />
        {weather && (
          <View style={styles.weatherContainer}>
            <Text style={styles.weatherText}>
              Город: {weather.name}
            </Text>
            <Text style={styles.weatherText}>
              Температура: {weather.main.temp}°C
            </Text>
            <Text style={styles.weatherText}>
              Погода: {weather.weather[0].description}
            </Text>
            <Text style={styles.weatherText}>
              Влажность: {weather.main.humidity}%
            </Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
  weatherContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  weatherText: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 5,
  },
});

export default App;