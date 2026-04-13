import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList, Linking, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// --- 大地色系色碼表 (Earth Tones) ---
const COLORS = {
  primary: '#8C6A5D',   // 深可可 (標題/導航)
  secondary: '#BCAC9B', // 沙石色 (卡片背景)
  background: '#F4F2EE',// 燕麥米 (全頁背景)
  accent: '#626F47',    // 苔蘚綠 (動作/標籤)
  text: '#4A4238',      // 炭棕色 (內文)
  white: '#FFFFFF'
};

// --- 1. 行程頁面 (Itinerary) ---
const ItineraryScreen = () => {
  const schedule = [
    { day: '5/19', title: '抵達名古屋', info: '23:15 入住 Mont Blanc Hotel', loc: 'Mont Blanc Hotel Nagoya' },
    { day: '5/20', title: '高山/飛驒文化遊', info: '08:00 買套票 | 18:30 京屋晚餐', loc: 'Hotel Amanek Takayama' },
    { day: '5/21', title: '上高地 12K 健行', info: '07:40 巴士 | 18:30 味藏天國', loc: 'Kamikochi Kappa Bridge' },
    { day: '5/22', title: '榮商圈 & AEON 採購', info: '巨大書牆 | 超市退稅', loc: 'AEON MALL Nagoya Noritake Garden' },
    { day: '5/23', title: '悠閒早晨回台', info: '名古屋站早餐 | 12:30 起飛', loc: 'Chubu Centrair International Airport' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>名古屋 ➔ 高山 行程表</Text>
      {schedule.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.dateText}>{item.day}</Text>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.infoText}>{item.info}</Text>
          <TouchableOpacity 
            style={styles.mapButton}
            onPress={() => Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${item.loc}`)}
          >
            <Text style={{color: COLORS.white, fontWeight: 'bold'}}>📍 查看地圖與導航</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

// --- 2. 必買推薦 (Recommended) ---
const RecommendedScreen = () => {
  const recommendations = [
    { region: '高山 / 飛驒', items: ['朴葉味噌', '飛驒地酒', '赤蕪菁漬物', '飛驒娃娃'] },
    { region: '名古屋 榮商圈', items: ['藥妝 (EVE/合利他命)', '百貨專櫃', '唐吉訶德'] },
    { region: 'AEON / 超市', items: ['小倉吐司抹醬', '壽賀喜屋泡麵', '手羽先仙貝'] },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>區域限定必買</Text>
      {recommendations.map((section, idx) => (
        <View key={idx} style={{marginBottom: 20}}>
          <Text style={styles
