import type { Block } from 'payload'

export const ReviewsBlock: Block = {
  slug: 'reviews-block',
  labels: {
    singular: 'Reviews Block',
    plural: 'Reviews Blocks',
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
      name: 'reviews',
      type: 'relationship',
      relationTo: 'reviews',
      hasMany: true,
      required: true,
      admin: {
        description: 'Select reviews to display in this section',
      },
    },
  ],
}
