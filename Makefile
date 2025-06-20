build:
	sudo docker rm -f PamaUI
	sudo docker build -f docker/Dockerfile -t pama-ui/prod .
	sudo docker run -d --restart=always --name=PamaUI -p 8401:3000 pama-ui/prod