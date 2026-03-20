import React from "react";
import { Text, View } from "react-native";

export interface NewsProps {
  id: number,
  icon: string,
  title: string,
  description: string,
  date: string
}

export const NewsCard = ({ id, icon, title, description, date }: NewsProps) => {
  return (
    <View>
      {icon}
      <View>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>

      <Text>{date}</Text>
    </View>
  )
};
