// HomeCard.tsx
import React from 'react'
import { GestureResponderEvent, Text, TouchableOpacity, View } from 'react-native'
import { Checkbox } from './ui/checkbox'

// Tailwind classes assume nativewind or similar setup

type SlotKey = 'Morning' | 'Afternoon' | 'Night' | 'Unscheduled'

interface HomeCardProps {
  type: 'habit' | 'task'
  title: string
  // For habits
  frequency?: 'Daily' | 'Weekly' | string
  // omit requirements here
  slot?: SlotKey | string
  doneToday?: boolean
  // For tasks
  dateTime?: string // e.g. '14:30'
  priority?: 'High' | 'Medium' | 'Low'
  completed?: boolean
  // Common
  onToggle?: (newValue: boolean) => void
  onPress?: (event: GestureResponderEvent) => void
}

export default function HomeCard(props: HomeCardProps) {
  const {
    type,
    title,
    frequency,
    slot,
    doneToday = false,
    dateTime,
    priority,
    completed = false,
    onToggle,
    onPress,
  } = props

  const isDone = type === 'habit' ? doneToday : completed
  // Colors: slate-based for black/white theme
  const titleColorClass = isDone ? 'text-gray-400 line-through' : 'text-gray-900  '
  const subtitleColorClass = isDone ? 'text-gray-400 line-through' : 'text-gray-500'
  // Badge background/text uses slate variants
  const badgeBase = 'px-2 py-0.5 rounded-full text-xs font-medium'
  let priorityBadgeClass = ''
  if (type === 'task' && priority) {
    // For black/white only theme, use slate shades: e.g., High=bg-gray-200 text-gray-800, Medium=bg-gray-100 text-gray-800, Low=bg-gray-50 text-gray-800
    if (priority === 'High') priorityBadgeClass = `${badgeBase} bg-gray-300 text-gray-800`
    else if (priority === 'Medium') priorityBadgeClass = `${badgeBase} bg-gray-200 text-gray-800`
    else /* Low */ priorityBadgeClass = `${badgeBase} bg-gray-100 text-gray-800`
  }

  // Optional slot badge (single letter), if you still want it
  const slotBadgeClass = 'text-xs text-gray-500 dark:text-gray-400'

  return (
    <TouchableOpacity
      className={`flex-row items-start bg-white rounded-xl border border-gray-100 p-3 my-1 ${
        isDone ? 'bg-gray-100 ' : ''
      }`}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Left: checkbox/toggle */}
      {onToggle && (
        <View className="mr-3 pt-1">
          <Checkbox 
            checked={isDone} 
            onCheckedChange={onToggle}
          />
        </View>
      )}

      {/* Center: title and minimal subtitle */}
      <View className="flex-1">
        {/* Title */}
        <Text style={{ fontSize: 17 }} className={`font-rethink-semibold ${titleColorClass}`} numberOfLines={1}>
          {title}
        </Text>
        {/* Subtitle */}
        {type === 'habit' ? (
          frequency ? (
            <Text style={{ fontSize: 14 }} className={`font-rethink-medium mt-1 ${subtitleColorClass}`}>
              {frequency}
            </Text>
          ) : null
        ) : (
          <View className="flex-row items-center mt-1 space-x-2">
            {dateTime && (
              <Text style={{ fontSize: 14 }} className={`font-rethink-medium ${subtitleColorClass}`}>
                {dateTime}
              </Text>
            )}
            {priority && (
              <View className={priorityBadgeClass}>
                <Text style={{ fontSize: 12 }} className={`font-rethink-medium ${subtitleColorClass}`}>{priority}</Text>
              </View>
            )}
          </View>
        )}
      </View>

      {/* Right: optional slot badge */}
      {slot && (
        <View className="ml-3 items-center">
          <Text style={{ fontSize: 12 }} className={`font-rethink-medium ${subtitleColorClass}`}>{slot.charAt(0)}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}
