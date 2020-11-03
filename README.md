# soa-g2-mock-services

Mock API services running on Node server for study project


WORK in PROGRESS


# Docker perticulars/perculiarities
The following section looks at how the Docker build process is optimised.

## NPM package.json and package-lock.json
The files `package.json` and `package-lock.json` are copied into the image before the project files as this way the Docker layer caching will work. If none of the dependencies have changed then `npm install` will not have to run.  

Due to the one way nature of the Dockerfile build process the resulting `package-lock.json` will not be saved to host. It's recommended after building the image to copy the file from container to host using `docker cp nodemocks:/home/node/app/package-lock.json ./`. See more in the Todo note below.

## NPM node_modules folder and saving on downloads
The build and running process of the container will mean that the node dependencies will only exist in a layer of the docker build cache. In order for not all the dependencies to be re-downloaded when package.json changes we should copy out the `./node_modules` (after `npm install`) directory to host. On subsequent builds this directory can be copied into the image, and only the dependencies which have changed will be replaed. The command for doing this after a successfull image build process and container running is: `docker cp nodemocks:/home/node/app/node_modules ./`. See more in the Todo note below.

This section is also the reason why `node_modules` is allowed in repository but not it's contents. This will allow the Dockerfile build process not to fail.

## Todo: volumes, named volumes and saving data to host from the build process
alternative would perhaps be to run the container with a volume, however as these are mounted after the build process they will blank out the relevant files/folders in the container. There is the possibility to exploit the mounting order of volumes Vs. named volumes and thus get the files back to host in a hacked way. Currently the solution is to manually run the suggested commands and save the `package-lock.json` or `/node_modules` to the project repository that way. Note that only `package-lock.json` is tracked by VCS, not the `/node_modules` folder of course.


# Main dependencies
For serving JSON content and mocking REST API
https://www.npmjs.com/package/json-server

For making request from node services
https://www.npmjs.com/package/axios

For generating fake data
https://www.npmjs.com/package/casual