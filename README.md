# soa-g2-mock-services

Mock API services running on Node server for study project



WORK in PROGRESS


# NPM package.json and package-lock.json
These files are copied into the image before the project files as this way the Docekr caching will work. If none of the dependencies have changed then `npm install` will not have to run.

todo: Due to the one way nature of the Dockerfile build process the resulting `package-lock.json` will not be saved to host. It's possible after building the image and runing the container to copy the file from container to host using `docker cp nodemocks:/home/node/app/package-lock.json ./`, an alternative would perhaps be to run the container with a volume, however that is not straight forward either as these are mounted long after the buildprocess thus probably blanking out the generated `package-lock.json`. So currently the solution is to manually run the suggested command and save the `package-lock.json` to the project repository that way.




# Main dependencies
For serving JSON content and mocking REST API
https://www.npmjs.com/package/json-server

For making request from node services
https://www.npmjs.com/package/axios

For generating fake data
https://www.npmjs.com/package/casual