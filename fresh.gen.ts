// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[username].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/api/auth/authorize.tsx";
import * as $3 from "./routes/api/auth/refresh.tsx";
import * as $4 from "./routes/api/auth/register.tsx";
import * as $5 from "./routes/api/helpers.ts";
import * as $6 from "./routes/api/users.ts";
import * as $7 from "./routes/docs.tsx";
import * as $8 from "./routes/feed.tsx";
import * as $9 from "./routes/index.tsx";
import * as $10 from "./routes/vip/post.tsx";
import * as $11 from "./routes/vip/register.tsx";
import * as $$0 from "./islands/IndexBlock.tsx";
import * as $$1 from "./islands/NewPost.tsx";
import * as $$2 from "./islands/Post.tsx";
import * as $$3 from "./islands/SiteBar.tsx";

const manifest = {
  routes: {
    "./routes/[username].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/api/auth/authorize.tsx": $2,
    "./routes/api/auth/refresh.tsx": $3,
    "./routes/api/auth/register.tsx": $4,
    "./routes/api/helpers.ts": $5,
    "./routes/api/users.ts": $6,
    "./routes/docs.tsx": $7,
    "./routes/feed.tsx": $8,
    "./routes/index.tsx": $9,
    "./routes/vip/post.tsx": $10,
    "./routes/vip/register.tsx": $11,
  },
  islands: {
    "./islands/IndexBlock.tsx": $$0,
    "./islands/NewPost.tsx": $$1,
    "./islands/Post.tsx": $$2,
    "./islands/SiteBar.tsx": $$3,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
