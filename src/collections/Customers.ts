import type { CollectionConfig } from 'payload'

export const Customers: CollectionConfig = {
  slug: 'customers',
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
    },
    {
      name: 'lastName',
      type: 'text',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
      unique: true,
    },
    {
      name: 'preferredContactMethod',
      type: 'select',
      options: [
        {
          label: 'Whatsapp',
          value: 'whatsapp',
        },
        {
          label: 'Email',
          value: 'email',
        },
        {
          label: 'Phone',
          value: 'phone',
        },
      ],
      defaultValue: 'whatsapp',
    },
    {
      name: 'allowNotifications',
      type: 'checkbox',
    },
    {
      name: 'status',
      type: 'select',
      options: ['active', 'inactive', 'blocked'],
    },
    {
      name: 'lastVisit',
      type: 'date',
    },
  ],
}
