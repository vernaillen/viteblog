/*import type { Post } from "./types";

declare module "vue-router" {
  interface RouteMeta {
    frontmatter: Post;
  }
}*/

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}
