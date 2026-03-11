import type { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Enter hero title',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      admin: {
        placeholder: 'Enter hero subtitle',
      },
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'The background image for the hero section',
      },
    },
  ],
}
