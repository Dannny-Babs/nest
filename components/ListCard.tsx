import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { List } from '../types/list';
import { Checkbox } from './ui/checkbox';

interface ListCardProps {
  list: List;
  onToggle?: (newValue: boolean) => void;
  onPress?: () => void;
}

export default function ListCard({ list, onToggle, onPress }: ListCardProps) {
  const progress = list.progress || {
    completed: list.items.filter(item => item.completed).length,
    total: list.items.length
  };

  const isCompleted = progress.completed === progress.total;
  const titleColorClass = isCompleted ? 'text-gray-400 line-through' : 'text-gray-900';
  const subtitleColorClass = isCompleted ? 'text-gray-400' : 'text-gray-500';

  return (
    <TouchableOpacity
      className={`flex-row items-start bg-white rounded-xl border border-gray-100 p-3 my-1 ${isCompleted ? 'bg-gray-100' : ''}`}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Left: checkbox/toggle */}
      {onToggle && (
        <View className="mr-3 pt-1">
          <Checkbox
            checked={isCompleted}
            onCheckedChange={onToggle}
          />
        </View>
      )}

      {/* Center: title and progress */}
      <View className="flex-1">
        <Text style={{ fontSize: 17 }} className={`font-rethink-semibold ${titleColorClass}`} numberOfLines={1}>
          {list.title}
        </Text>
        
        <Text style={{ fontSize: 14 }} className={`font-rethink-medium mt-1 ${subtitleColorClass}`}>
          {progress.completed} of {progress.total} done
        </Text>

        {/* Progress bar */}
        {progress.total > 0 && (
          <View className="mt-2 bg-gray-200 rounded-full h-1">
            <View 
              className="bg-green-600 h-1 rounded-full" 
              style={{ width: `${(progress.completed / progress.total) * 100}%` }}
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}
