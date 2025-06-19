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
  weeklyStatus?: boolean[] // length 7, Mon–Sun
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
    weeklyStatus,
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
  const badgeBase = ' rounded-full text-xs font-rethink-medium'
  let priorityBadgeClass = ''
  if (type === 'task' && priority) {
    // For black/white only theme, use slate shades: e.g., High=bg-gray-200 text-gray-800, Medium=bg-gray-100 text-gray-800, Low=bg-gray-50 text-gray-800
    if (priority === 'High') priorityBadgeClass = `${badgeBase} bg-red-100 text-red-800`
    else if (priority === 'Medium') priorityBadgeClass = `${badgeBase} bg-yellow-100 text-orange-800`
    else /* Low */ priorityBadgeClass = `${badgeBase} bg-green-100 text-green-800`
  }

  // Optional slot badge (single letter), if you still want it
  const slotBadgeClass = 'text-xs text-gray-500 dark:text-gray-400'

  const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <TouchableOpacity
      className={`flex-row items-start bg-white rounded-xl border border-gray-100 p-3 my-1 ${isDone ? 'bg-gray-100 ' : ''
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
          <View className="flex-row items-center mt-1 space-x-2 gap-2">
            {dateTime && (
              <Text style={{ fontSize: 14 }} className={`font-rethink-medium ${subtitleColorClass}`}>
                {dateTime}
              </Text>
            )}
            {priority && (
              <View className={`${priorityBadgeClass} px-2 py-1`}>
                <Text style={{ fontSize: 12 }} className={`${priorityBadgeClass}`}>{priority}</Text>
              </View>
            )}
          </View>
        )}

        {/* Weekly Status for Habits */}
        {type === 'habit' && weeklyStatus && (
          <View className="mt-2">
            {/* Day labels */}
            <View className="flex-row justify-between mb-1">
              {dayLabels.map((day, index) => (
                <Text
                  key={day}
                  style={{ fontSize: 12 }}
                  className={`font-rethink-medium ${subtitleColorClass} flex-1 text-center`}
                >
                  {day}
                </Text>
              ))}
            </View>
            {/* Status indicators */}
            <View className="flex-row justify-between">
              {weeklyStatus.map((done, index) => (
                <View key={index} className="flex-1 mt-1 items-center">
                  <View
                    className={`w-2 h-2 rounded-full ${done ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                  />
                </View>
              ))}
            </View>
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
