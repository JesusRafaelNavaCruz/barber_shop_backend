import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'siteSettings',
  label: 'Site Settings',
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      // General Section
      type: 'collapsible',
      label: 'General Information',
      fields: [
        {
          name: 'siteName',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'e.g., Barber Shop',
            description: 'The name of your website',
          },
        },
        {
          name: 'tagline',
          type: 'text',
          admin: {
            placeholder: 'e.g., Premium Barbering Services',
            description: 'A short tagline or motto for your business',
          },
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Main logo used across the site',
          },
        },
        {
          name: 'favicon',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Browser tab icon (preferably 32x32px)',
          },
        },
      ],
    },

    {
      // Theme Section
      type: 'collapsible',
      label: 'Theme & Styling',
      fields: [
        {
          name: 'theme',
          type: 'group',
          fields: [
            {
              name: 'primaryColor',
              type: 'text',
              admin: {
                placeholder: '#000000',
                description: 'Primary brand color (hex format)',
              },
            },
            {
              name: 'secondaryColor',
              type: 'text',
              admin: {
                placeholder: '#FFFFFF',
                description: 'Secondary brand color (hex format)',
              },
            },
            {
              name: 'background',
              type: 'text',
              admin: {
                placeholder: '#FFFFFF',
                description: 'Default background color',
              },
            },
            {
              name: 'textColor',
              type: 'text',
              admin: {
                placeholder: '#000000',
                description: 'Default text color',
              },
            },
          ],
        },
      ],
    },

    {
      // SEO Section
      type: 'collapsible',
      label: 'SEO Settings',
      fields: [
        {
          name: 'seo',
          type: 'group',
          fields: [
            {
              name: 'defaultTitle',
              type: 'text',
              admin: {
                placeholder: 'Set a default page title for SEO',
                description: 'Used as the default title tag on pages without a specific title',
              },
            },
            {
              name: 'ogImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Default Open Graph image for social sharing (1200x630px recommended)',
              },
            },
            {
              name: 'indexingEnabled',
              type: 'checkbox',
              defaultValue: true,
              admin: {
                description: 'Allow search engines to index your website',
              },
            },
          ],
        },
      ],
    },

    {
      // Contact Section
      type: 'collapsible',
      label: 'Contact Information',
      fields: [
        {
          name: 'contact',
          type: 'group',
          fields: [
            {
              name: 'phone',
              type: 'text',
              required: true,
              admin: {
                placeholder: '+1 (555) 123-4567',
                description: 'Primary phone number for customer inquiries',
              },
            },
            {
              name: 'email',
              type: 'email',
              required: true,
              admin: {
                placeholder: 'contact@barbershop.com',
                description: 'Primary contact email',
              },
            },
            {
              name: 'address',
              type: 'textarea',
              required: true,
              admin: {
                placeholder: 'Enter your full business address',
                description: 'Your physical business location',
              },
            },
            {
              name: 'whatsapp',
              type: 'text',
              admin: {
                placeholder: '+1 (555) 123-4567',
                description: 'WhatsApp number for customer contact',
              },
            },
          ],
        },
      ],
    },

    {
      // Social Media Section
      type: 'collapsible',
      label: 'Social Media',
      fields: [
        {
          name: 'socials',
          type: 'array',
          fields: [
            {
              name: 'platform',
              type: 'select',
              required: true,
              options: [
                { label: 'Facebook', value: 'facebook' },
                { label: 'Instagram', value: 'instagram' },
                { label: 'Twitter', value: 'twitter' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'YouTube', value: 'youtube' },
                { label: 'TikTok', value: 'tiktok' },
                { label: 'Pinterest', value: 'pinterest' },
              ],
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              admin: {
                placeholder: 'https://facebook.com/yourbusiness',
              },
            },
          ],
          admin: {
            description: 'Add social media profiles linked from your site',
          },
        },
      ],
    },

    {
      // Booking Settings Section
      type: 'collapsible',
      label: 'Booking Settings',
      fields: [
        {
          name: 'booking',
          type: 'group',
          fields: [
            {
              name: 'enabled',
              type: 'checkbox',
              defaultValue: true,
              admin: {
                description: 'Enable or disable the booking system',
              },
            },
            {
              name: 'slotDuration',
              type: 'number',
              defaultValue: 30,
              admin: {
                placeholder: '30',
                description: 'Duration of each booking slot in minutes',
              },
            },
            {
              name: 'openHours',
              type: 'textarea',
              admin: {
                placeholder: 'Monday - Friday: 9AM - 6PM\nSaturday: 9AM - 5PM\nSunday: Closed',
                description: 'Display your business hours',
              },
            },
          ],
        },
      ],
    },
  ],
}
