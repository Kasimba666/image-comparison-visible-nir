import { ref } from 'vue';

export function useLoadImages() {
    const imageGroups = ref({});

    const loadImages = async () => {
        const images = import.meta.glob('/public/assets/images/**/*.jpg', { eager: true });
        const groups = {};

        for (const path in images) {
            const match = path.match(/\/public\/assets\/images\/([^/]+)\/(.*)_(Visible|NIR)\.jpg$/);
            if (match) {
                const folder = match[1];
                const name = match[2];
                const type = match[3].toLowerCase();

                if (!groups[folder]) {
                    groups[folder] = {};
                }

                if (!groups[folder][name]) {
                    groups[folder][name] = {};
                }

                groups[folder][name][type] = path.replace('/public', '.').replace('/image-comparison-visible-nir/src', '.');;
            }
        }

        imageGroups.value = groups;
    };

    return {
        imageGroups,
        loadImages
    };
}
