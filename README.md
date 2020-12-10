# soa-g2-mock-services

Mock API services running on Node server for study project

See the API specifications for details on routes and resources. What we can say here is that the routes assume all the same domain for the three services StudentITS, LADOK, and EPOK. Calls to these apis are segregated using simple route mappings, whereas in reality it would belong under different domains.
`localhost:8282/modul` is identical to `localhost:8282/epok/modul`.


# Docker perticulars/perculiarities
The following section looks at how the Docker build process is optimised.

## NPM package.json package-lock.json and node_modules
The files `package.json` and `package-lock.json` are copied into the image before the project files as this way the Docker layer caching will work. If none of the dependencies have changed then `npm install` will not have to run.  

Due to the one way nature of the Dockerfile build process the resulting `package-lock.json` will not be saved to host. It's recommended after building the image to copy the file from container to host using `docker cp nodemocks:/home/node/app/package-lock.json ./`. See more in the Todo note below.

See note below on `node_modules` folder.

## NPM node_modules folder and saving on downloads
The build and running process of the container will mean that the node dependencies will usually only exist in a layer of the docker build cache. In order for not all the dependencies to be re-downloaded when package.json changes we should copy out the `./node_modules` (after `npm install`) and save to host. On subsequent builds this directory can be copied into the image, thus only the dependencies which have changed will be replaced.

Due to this being done with volumes the easiest and best way is with the wrapper/parent repo's docker-compose.yml. Run the service `docker-compose up --build nodemocks` and it will take care of saving the node_modules to host. The first time running you would have to create the `node_modules` folder in the `soa-g2-mock-services` repository.


# Main dependencies
For serving JSON content and mocking REST API
https://www.npmjs.com/package/json-server

For making request from node services
https://www.npmjs.com/package/axios

For generating fake data
https://www.npmjs.com/package/casual
