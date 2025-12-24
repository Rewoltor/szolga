import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Szolga - Christmas Party Game',
        short_name: 'Szolga',
        description: 'The best bilingual Christmas game for families and friends.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ef4444',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
