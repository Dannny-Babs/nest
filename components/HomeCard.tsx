// HomeCard.tsx
import { CheckmarkSquare04Icon, SquareIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from '@hugeicons/react-native'
import React from 'react'
import { GestureResponderEvent, Text, TouchableOpacity, View } from 'react-native'

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
  const toggleIcon = isDone ? CheckmarkSquare04Icon : SquareIcon
  // Colors: slate-based for black/white theme
  const toggleColor = isDone ? '#6B7280' : '#111827' // gray-500 when done, slate-900 when not
  const titleColorClass = isDone ? 'text-gray-400 line-through' : 'text-gray-900 dark:text-gray-100'
  const subtitleColorClass = isDone ? 'text-gray-400 line-through' : 'text-gray-500 dark:text-gray-400'
  // Badge background/text uses slate variants
  const badgeBase = 'px-2 py-0.5 rounded-full text-xs font-medium'
  let priorityBadgeClass = ''
  if (type === 'task' && priority) {
    // For black/white only theme, use slate shades: e.g., High=bg-gray-200 text-gray-800, Medium=bg-gray-100 text-gray-800, Low=bg-gray-50 text-gray-800
    if (priority === 'High') priorityBadgeClass = `${badgeBase} bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200`
    else if (priority === 'Medium') priorityBadgeClass = `${badgeBase} bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200`
    else /* Low */ priorityBadgeClass = `${badgeBase} bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200`
  }

  // Optional slot badge (single letter), if you still want it
  const slotBadgeClass = 'text-xs text-gray-500 dark:text-gray-400'

  return (
    <TouchableOpacity
      className={`flex-row items-start bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-slate-700 p-3 my-1 ${
        isDone ? 'bg-gray-100 dark:bg-gray-700' : ''
      }`}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Left: checkbox/toggle */}
      {onToggle && (
        <TouchableOpacity
          onPress={() => onToggle(!isDone)}
          className="mr-3 pt-1"
          accessibilityLabel={`Mark ${title} as ${isDone ? 'incomplete' : 'complete'}`}
        >
          <HugeiconsIcon
            icon={toggleIcon}
            size={24}
            color={toggleColor}
          />
        </TouchableOpacity>
      )}

      {/* Center: title and minimal subtitle */}
      <View className="flex-1">
        {/* Title */}
        <Text className={`text-base font-semibold ${titleColorClass}`} numberOfLines={1}>
          {title}
        </Text>
        {/* Subtitle */}
        {type === 'habit' ? (
          frequency ? (
            <Text className={`text-sm mt-1 ${subtitleColorClass}`}>
              {frequency}
            </Text>
          ) : null
        ) : (
          <View className="flex-row items-center mt-1 space-x-2">
            {dateTime && (
              <Text className={`text-sm ${subtitleColorClass}`}>
                {dateTime}
              </Text>
            )}
            {priority && (
              <View className={priorityBadgeClass}>
                <Text className="text-xs">{priority}</Text>
              </View>
            )}
          </View>
        )}
      </View>

      {/* Right: optional slot badge */}
      {slot && (
        <View className="ml-3 items-center">
          <Text className={slotBadgeClass}>{slot.charAt(0)}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}
