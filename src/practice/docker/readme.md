Build 

`nerdctl build -t app.js -f Dockerfile .`

`nerdctl build -t my-app .`

Run

`nerdctl run -d --name my-app my-app`

`nerdctl run -it b7892cb460f4 node -v`

To check running containers using nerdctl

`nerdctl ps`

Remove all containers

`nerdctl rm -f $(nerdctl ps -a -q)`