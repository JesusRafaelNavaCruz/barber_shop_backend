import type { GlobalConfig } from 'payload'

export const Navbar: GlobalConfig = {
  slug: 'navbar',
  label: 'Navbar',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navigationLinks',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'Ej: Servicios',
          },
        },
        {
          name: 'link',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'ejemplo: #services',
          },
        },
        {
          name: 'isSection',
          type: 'checkbox',
          required: true,
        },
        {
          name: 'isModal',
          type: 'checkbox',
          required: true,
        },
      ],
      admin: {
        description: 'Gestion de los links de navegación',
      },
    },
  ],
}
