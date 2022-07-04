import esbuild from 'esbuild'
import mdx from '@mdx-js/esbuild'

await esbuild.build({
  entryPoints: ['./posts/blog.mdx'],
  outdir: 'pages/blog',
  bundle: false,
  format: 'esm',
  watch: true,
  plugins: [mdx({/* Options… */})]
})
