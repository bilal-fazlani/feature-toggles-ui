Travis CI : [![Build Status](https://travis-ci.org/bilal-fazlani/feature-toggles-ui.svg?branch=master)](https://travis-ci.org/bilal-fazlani/feature-toggles-ui)

---

# Feature toggles UI

Pre-requisites:
- spring cloud config server
- toggles must have prefix `toggle.`
- toggles must have value of either `true` or `false`


# Configuration

You need you create a file named `config.json`. The contents should look something lke this:

```json
{
  "springConfigServerUrl": "http://xxxxxxxxxxxxxxxxxxxxxxxxx/",
  "apps": ["app1", "app2", "app3", "app4", "app5"],
  "envs": ["dev", "qa", "uat", "prod"]
}
```

Replace the values with actuals before use

# Usage

There are 2 ways you can run this application

## 1. docker

```bash
docker run -p 80:80 \
-v $(pwd)/config.json:/usr/share/nginx/html/config.json \
bilalfazlani/feature-toggles-ui:latest
```

Note: `config.json` file needs to be present in **root directory** before running this command

## 2. npm

- `git clone https://github.com/bilal-fazlani/feature-toggles-ui.git`
- create the `config.json` in **`./public` directory**
- `npm install`
- `npm start`