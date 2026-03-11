import type { Block } from 'payload'

export const CTA: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Call to Actions',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Enter CTA title',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        placeholder: 'Enter description',
      },
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Enter button text',
      },
    },
    {
      name: 'buttonLink',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Enter button link (e.g., /contact or https://example.com)',
      },
    },
  ],
}
