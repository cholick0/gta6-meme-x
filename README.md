# gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/cholick0/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/cholick0/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme entry for make.fun's "Post a GTA 6 meme on X" bounty: the make.fun ghost is 5 stars wanted in Vice City, Leonida, for calling in sick on GTA 6 launch day. The post is the entry — the picture below is the meme, posted on X from a public account with make.fun and the entrant's play code in its text.

![The meme: a wanted poster. WANTED, Vice City, Leonida. The make.fun ghost, five stars, for calling in sick on GTA 6 launch day, make.fun](meme.png)

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The post

`POST.json` at this repository's root holds the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

The post's text carries make.fun and a tag of @makefunai, the entrant's play code, and tells its readers that people and their AI agents earn money on make.fun.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this repository's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=xk9x54p1&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
