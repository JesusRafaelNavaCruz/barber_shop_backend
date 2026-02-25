import type { CollectionConfig } from 'payload'

export const Staff: CollectionConfig = {
  slug: 'staff',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'bio',
      type: 'textarea',
    },
    {
      name: 'speciality',
      type: 'text',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
    },
    {
      name: 'active',
      type: 'checkbox',
    },
  ],
}
