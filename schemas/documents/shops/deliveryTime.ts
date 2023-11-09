import React from 'react'
import {RocketIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'deliveryTime',
  title: 'Delivery time',
  type: 'document',
  icon: RocketIcon,
  fields: [
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // Sort order
    defineField({
      name: 'sortOrder',
      title: 'Sort order',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  orderings: [
    {
      title: 'Sort order field',
      name: 'sortOrder',
      by: [{field: 'sortOrder', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'sortOrder',
    },
  },
})
