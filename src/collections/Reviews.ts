import type { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin: {
    useAsTitle: 'id',
  },
  fields: [
    {
      name: 'customer',
      type: 'relationship',
      relationTo: 'customers',
    },
    {
      name: 'appointment',
      type: 'relationship',
      relationTo: 'appointments',
    },
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'services',
    },
    {
      name: 'staff',
      type: 'relationship',
      relationTo: 'staff',
    },
    {
      name: 'visitType',
      type: 'select',
      options: ['appointment', 'walk-in'],
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
    },
    {
      name: 'experience',
      type: 'select',
      options: ['excellent', 'good', 'regular', 'bad'],
    },
    {
      name: 'comments',
      type: 'textarea',
    },
    {
      name: 'isAnonymous',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'submittedForm',
      type: 'select',
      options: ['reception', 'web', 'qr'],
      defaultValue: 'web',
    },
    {
      name: 'approved',
      type: 'checkbox',
      defaultValue: 'false',
    },
  ],
}
