## Local Setup

- First, install [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/).
- Finally, run the following command that will pull the latest pre-built image from DockerHub and will run your website.

```bash
$ docker compose pull
$ docker compose up
```

Note that when you run it for the first time, it will download a docker image of size 400MB or so. To see the template running, open your browser and go to `http://localhost:8080`. You should see a copy of the theme's demo website.

Now, feel free to customize the theme however you like (don't forget to change the name!). Also, your changes should be automatically rendered in real-time (or maybe after a few seconds).

> Beta: You can also use the slimmed docker image with a size below 100MBs and exact same functionality. Just use `docker compose -f docker-compose-slim.yml up`

### Build your own docker image

> Note: this approach is only necessary if you would like to build an older or very custom version of al-folio.

Build and run a new docker image using:

```bash
$ docker compose up --build
```

> If you want to update jekyll, install new ruby packages, etc., all you have to do is build the image again using `--force-recreate` argument at the end of the previous command! It will download Ruby and Jekyll and install all Ruby packages again from scratch.

If you want to use a specific docker version, you can do so by changing `latest` tag to `your_version` in `docker-compose.yaml`. For example, you might have created your website on `v0.10.0` and you want to stick with that.

### Have Bugs on Docker Image?

Sometimes, there might be some bugs in the current docker image. It might be version mismatch or anything. If you want to debug and easily solve the problem for yourself you can do the following steps:

```
docker compose up -d
docker compose logs
```

Then you can see the bug! You can enter the container via this command:

```
docker compose exec -it jekyll /bin/bash
```

Then you can run the script:

```
./bin/entry_point.sh
```

You might see problems for package dependecy or something which is not available. You can fix it now by using

```
bundle install
./bin/entry_point.sh
```

Most likely, this will solve the problem but it shouldn't really happen. So, please open a bug report for us.
