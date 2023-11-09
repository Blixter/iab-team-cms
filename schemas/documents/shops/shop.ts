import {DocumentIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'shop',
  title: 'Shop',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      name: 'theme',
      title: 'Theme',
    },
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // Customer Id
    defineField({
      name: 'customerId',
      title: 'Customer Id',
      type: 'string',
    }),
    // Description
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    // Link
    {
      name: 'link',
      title: 'Link',
      type: 'linkExternal',
    },
    // Delivery time
    {
      name: 'deliveryTime',
      title: 'Delivery time',
      type: 'reference',
      to: {type: 'deliveryTime'},
    },
    // Printing Location
    {
      name: 'printingLocation',
      title: 'Printing location',
      type: 'reference',
      to: {type: 'printingLocation'},
    },
    // Delivery Store
    {
      name: 'deliveryStore',
      title: 'Delivery store',
      type: 'reference',
      to: [{type: 'store'}],
      options: {
        filter: 'canReceiveDeliveres == $canReceiveDeliveres',
        filterParams: {canReceiveDeliveres: true},
      },
    },
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
