import type { Block } from 'payload'

export const ServicesBlock: Block = {
  slug: 'services-block',
  labels: {
    singular: 'Services Block',
    plural: 'Services Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Enter section title',
      },
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      required: true,
      admin: {
        description: 'Select services to display in this section',
      },
    },
  ],
}
