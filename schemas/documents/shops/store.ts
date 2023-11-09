import {DocumentIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'store',
  title: 'Store',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // Store number
    defineField({
      name: 'storeNumber',
      title: 'Store number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // Description
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'canReceiveDeliveres',
      title: 'Can receive deliveries',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      active: 'active',
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection

      return {
        title,
      }
    },
  },
})
