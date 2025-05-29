import { defineConfig } from 'vite';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import usePHP from "vite-plugin-php";
import autoprefixer from "autoprefixer";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
    css: {
        postcss: {
            plugins: [autoprefixer]
        }
    },
    plugins: [
        // Обработка php файлов (для include / for / foreach)
        usePHP({
            // добавить другие php страницы, если нужно
            entry: ['index.php']
        }),
        // обработка @import в scss (устарело, нужно менять)
        sassGlobImports(),
        // отслеживание scss файлов, которые созданы во время работы дев сервера
        {
            name: 'force-scss-rebuild',
            configureServer(server) {
                server.watcher.on('add', async (path) => {
                    if (path.endsWith('.scss')) {
                        const { moduleGraph } = server;
                        moduleGraph.invalidateAll();
                        server.ws.send({ type: 'full-reload' });
                    }
                });
            },
        },
        // Optimize Images
        ViteImageOptimizer({
            jpg:  { quality: 75, mozjpeg: true, progressive: true },
            png:  { quality: 85, compressionLevel: 9, palette: true },
            webp: { quality: 80, lossless: false, effort: 6 },
            avif: { quality: 60, chromaSubsampling: '4:2:0' },
            svg: {
                plugins: [
                    { name: 'removeViewBox', active: false },
                    { name: 'sortAttrs' },
                ],
            }
        })
    ]
});