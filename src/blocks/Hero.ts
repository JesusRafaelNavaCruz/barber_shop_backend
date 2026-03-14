import type { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero-block',
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
  fields: [
    // Badge/Etiqueta
    {
      name: 'badge',
      type: 'text',
      required: true,
      defaultValue: 'BIENVENIDO A BANDOLEROS',
      admin: {
        placeholder: 'e.g., BIENVENIDO A BANDOLEROS',
        description: 'Small text label above the title',
      },
    },

    // Título principal
    {
      name: 'title',
      type: 'textarea',
      required: true,
      admin: {
        placeholder: 'Tu estilo es\nnuestra firma',
        description: 'Main hero title (supports line breaks)',
      },
    },

    // Parte destacada del título
    {
      name: 'highlightedText',
      type: 'text',
      required: true,
      defaultValue: 'nuestra firma',
      admin: {
        placeholder: 'Text to highlight in red',
        description: 'The text that will be colored in red',
      },
    },

    // Descripción
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        placeholder:
          'Más que un corte, una declaración de intenciones. Descubre por qué somos la barbería de referencia para quienes no se conforman.',
        description: 'Main description text',
      },
    },

    // Imagen de fondo
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'The background image for the hero section',
      },
    },

    // Botones
    {
      name: 'buttons',
      type: 'group',
      fields: [
        {
          name: 'primaryButtonText',
          type: 'text',
          defaultValue: 'Reservar ahora',
          admin: {
            placeholder: 'Reservar ahora',
            description: 'Primary CTA button text',
          },
        },
        {
          name: 'primaryButtonShortText',
          type: 'text',
          defaultValue: 'Reservar',
          admin: {
            placeholder: 'Reservar',
            description: 'Primary CTA button text for mobile',
          },
        },
        {
          name: 'secondaryButtonText',
          type: 'text',
          defaultValue: 'Servicios',
          admin: {
            placeholder: 'Servicios',
            description: 'Secondary button text',
          },
        },
        {
          name: 'secondaryButtonShortText',
          type: 'text',
          defaultValue: 'Ver más',
          admin: {
            placeholder: 'Ver más',
            description: 'Secondary button text for mobile',
          },
        },
      ],
    },

    // Servicios (relación opcional)
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      required: false,
      admin: {
        description: 'Select services to display in the hero section (optional)',
      },
    },
  ],
}
